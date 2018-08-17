<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;
use League\Csv\Writer;
use League\Csv\CannotInsertRecord;
use App\Bookings;
use App\Listing;
use App\Unit;
use App\Properties;
use App\fnPaginate;
use App\Profiles;
use App\Areas;
use App\BookingEmployee;
use App\employee;
use DateTime;
use DB;
class ArrivalListsController extends Controller
{
    function check_in_range($start_date, $end_date, $date_from_user)
    {
        // Convert to timestamp
        $start_ts = strtotime($start_date);
        $end_ts = strtotime($end_date);
        $user_ts = strtotime($date_from_user);

        // Check that user date is between start & end
        return (($user_ts >= $start_ts) && ($user_ts <= $end_ts));
    }
    public function showArrival2(Request $request)
    {
         date_default_timezone_set('Asia/Kuala_Lumpur');
        $ar = [];
        $date_type = $request->input('data.date_type');
        $date = $request->input('data.date');
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        $area = $request->input('data.area');
        $bookings=[];
        $searcher = ['booking_id','booking_guest_name','booking_check_in', 'booking_check_out',
                     'booking_guest_phone', 'booking_comm_channel', 'booking_guest_eta','booking_guest_number',
                     'booking_guest_status','booking_conversation_url','listing_id','booking_notes',
                     DB::raw('(select 
                        (select unit_name from unit u where u.unit_id=l.unit_id)
                        from listing l where l.listing_id=booking.listing_id
                        ) as unit_name'),
                    DB::raw('(select 
                        (select profile_name from profile p where p.profile_id=l.profile_id)
                        from listing l where l.listing_id=booking.listing_id
                        )as profile_name')];
        if($filter_type == 0){
            if($date_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher)
                    ->where('booking_check_in', $date)
                    ->where('booking_status', 1)
                    ->get();
            }else if ($date_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher)
                    ->where('booking_check_out', $date)
                    ->where('booking_status', 1)
                    ->get();
            }else if ($date_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher)->where('booking_status', 1)
                    ->get();
                $collect = [];
                foreach ($bookings as $booking)
                {
                    if($this->check_in_range($booking->booking_check_in, $booking->booking_check_out, $date))
                    {
                        array_push($collect, $booking);
                    }
                }
                $bookings = $collect;
            }
        }else if ($filter_type == 1)
        {
            if($date_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher)
                    ->where('booking_check_in', $date)
                    ->where('booking_guest_name', 'like', '%'.$filterer.'%')
                    ->where('booking_status', 1)
                    ->get();
            }else if ($date_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher)
                    ->where('booking_check_out', $date)
                    ->where('booking_guest_name', 'like', '%'.$filterer.'%')
                    ->where('booking_status', 1)
                    ->get();
            }else if ($date_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher)
                    ->where('booking_guest_name', 'like', '%'.$filterer.'%')
                    ->where('booking_status', 1)
                    ->get();
                $collect = [];
                foreach ($bookings as $booking)
                {
                    if($this->check_in_range($booking->booking_check_in, $booking->booking_check_out, $date))
                    {
                        array_push($collect, $booking);
                    }
                }
                $bookings = $collect;
            }
        }else if ($filter_type == 2)
        {
            if($date_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher)
                    ->where('booking_check_in', $date)
                    ->where('booking_status', 1)
                    ->get();
            }else if ($date_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher)
                    ->where('booking_check_out', $date)
                    ->where('booking_status', 1)
                    ->get();
            }else if ($date_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher)
                    ->where('booking_status', 1)
                    ->get();
                $collect = [];
                foreach ($bookings as $booking)
                {
                    if($this->check_in_range($booking->booking_check_in, $booking->booking_check_out, $date))
                    {
                        array_push($collect, $booking);
                    }
                }
                $bookings = $collect;
            }
            $temp = [];
            foreach($bookings as $booking)
            {
                if(stripos($booking->unit_name, $filterer) === FALSE){}else
                {
                    array_push($temp,$booking);
                }
            }
            $bookings = $temp;
        }else if ($filter_type == 3)
        {
            if($date_type == 0)
            {
                
                $bookings = DB::table('booking')->select($searcher)
                    ->where('booking_check_in', $date)
                    ->where('booking_status', 1)
                    ->get();
            }else if ($date_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher)
                    ->where('booking_check_out', $date)
                    ->where('booking_status', 1)
                    ->get();
            }else if ($date_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher)
                    ->where('booking_status', 1)
                    ->get();
                $collect = [];
                foreach ($bookings as $booking)
                {
                    if($this->check_in_range($booking->booking_check_in, $booking->booking_check_out, $date))
                    {
                        array_push($collect, $booking);
                    }
                }
                $bookings = $collect;
            }
            $temp = [];
            foreach($bookings as $booking)
            {
                if(stripos($booking->profile_name, $filterer) === FALSE){}else
                {
                    array_push($temp,$booking);
                }
            }
            $bookings = $temp;
        }
        foreach ($bookings as $booking)
        {
            $listing = Listing::select('listing_id','unit_id','profile_id')->where('listing_id',$booking->listing_id)->first();
            $units = Unit::select('unit_id', 'unit_name','property_id')->where('unit_id', $listing->unit_id)->first();
            $profiles = Profiles::select('profile_name')->where('profile_id', $listing->profile_id)->first();
            $properties = Properties::select('property_id','area_id')->where('property_id', $units->property_id)->first();
            if($properties->area_id == $area)
            {
                $bes = BookingEmployee::select('employee_id','be_role')
                ->where('booking_id', $booking->booking_id)->get();
                $omps['host']=[];
                $omps['driver']=[];
                $omps['verifier']=[];
                foreach($bes as $be)
                {
                    $emps = collect();
                    $employees = employee::select('employee_name')->where('employee_id', $be->employee_id)->first();
                    $emps = $emps->merge($be);
                    $emps = $emps->merge($employees);
                    if($be->be_role == 0)
                    {
                        $omps['host'] = $emps;
                    }else if ($be->be_role == 1)
                    {
                        $omps['driver'] = $emps;
                    }else if($be->be_role == 2)
                    {
                        $omps['verifier'] = $emps;
                    }
                }
                $merged = collect();
                $merged = $merged->merge($booking);
                $data['booking_los'] = $this->LoS($booking->booking_id);
                $merged = $merged->merge($data);
                $merged = $merged->merge($omps);
                array_push($ar,$merged);
            }
        }
        $sort_type = $request->input('data.sort_type');
        $ar = collect($ar);
        if($sort_type == 1)
        {
            $ar = $ar->sortBy('booking_guest_eta');
        }else if($sort_type == 2)
        {
            $ar = $ar->sortByDesc('booking_guest_eta');
        }else if ($sort_type == 3)
        {
            $ar = $ar->sortBy('booking_guest_name');
        }else if ($sort_type == 4)
        {
            $ar = $ar->sortByDesc('booking_guest_name');
        }else if ($sort_type == 5)
        {
            $ar = $ar->sortBy('unit_name');
        }else if ($sort_type == 6)
        {
            $ar = $ar->sortByDesc('unit_name');
        }
        $ar = $ar->values()->toArray();
        $paginated = fnpaginate::pager($ar, $request);
        return $paginated;
    }
    public function showArrival(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $ar = [];
        $date_type = $request->input('data.date_type');
        $date = $request->input('data.date');
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        $area = $request->input('data.area');
        $searcher = ['booking_id','booking_guest_name','booking_check_in', 'booking_check_out',
                     'booking_guest_phone', 'booking_comm_channel', 'booking_guest_eta','booking_guest_number',
                     'booking_guest_status','booking_conversation_url','listing_id','booking_notes'];
        $bookings = [];        
        if ($filter_type == 1)
        {
            if($date_type == 0){
                $bookings = Bookings::select($searcher)->where('booking_check_in', $date)
                ->where('booking_guest_name','like', '%'.$filterer.'%')->get();
            }else if ($date_type == 1)
            {
                $bookings = Bookings::select($searcher)->where('booking_check_out', $date)
                ->where('booking_guest_name','like', '%'.$filterer.'%')->get();
            }else if($date_type == 2)
            {
                $bookings = Bookings::select($searcher)->where('booking_guest_name', 'like', '%'.$filterer.'%')->get();
                $collect = [];
                foreach ($bookings as $booking)
                {
                    if($this->check_in_range($booking->booking_check_in, $booking->booking_check_out, $date))
                    {
                        array_push($collect, $booking);
                    }
                }
                $bookings = $collect;
            }
        }else
        {
            if($date_type == 0){
                $bookings = Bookings::select($searcher)->where('booking_check_in', $date)->get();
            }else if ($date_type == 1)
            {
                $bookings = Bookings::select($searcher)->where('booking_check_out', $date)->get();
            }else if ($date_type ==2)
            {
                $bookings = Bookings::get();
                $collect = [];
                foreach ($bookings as $booking)
                {
                    if($this->check_in_range($booking->booking_check_in, $booking->booking_check_out, $date))
                    {
                        array_push($collect, $booking);
                    }
                }
                $bookings = $collect;
            }
        }
        foreach ($bookings as $booking) {
            $listing = Listing::select('listing_id','unit_id','profile_id')
            ->where('listing_id', $booking->listing_id)->first();
            if($filter_type == 2)
            {
                $units = Unit::select('unit_id', 'unit_name','property_id')->where('unit_id', $listing->unit_id)->first();
                //var_dump(stripos($units->unit_name, $filterer));
                if(stripos($units->unit_name, $filterer)===false){}else 
                {
                    $profiles = Profiles::select('profile_name')->where('profile_id', $listing->profile_id)->first();
                    $properties = Properties::select('property_id','area_id')->where('property_id', $units->property_id)->first();
                    if($properties->area_id == $area)
                    {
                        $bes = BookingEmployee::select('employee_id','be_role')
                        ->where('booking_id', $booking->booking_id)->get();
                        $omps['host']=[];
                        $omps['driver']=[];
                        $omps['verifier']=[];
                        foreach($bes as $be)
                        {
                            $emps = collect();
                            $employees = employee::select('employee_name')->where('employee_id', $be->employee_id)->first();
                            $emps = $emps->merge($be);
                            $emps = $emps->merge($employees);
                            if($be->be_role == 0)
                            {
                                $omps['host'] = $emps;
                            }else if ($be->be_role == 1)
                            {
                                $omps['driver'] = $emps;
                            }else if($be->be_role == 2)
                            {
                                $omps['verifier'] = $emps;
                            }
                        }
                        $merged = collect();
                        $merged = $merged->merge($booking);
                        $merged = $merged->merge($units);
                        $merged = $merged->merge($profiles);
                        $data['booking_los'] = $this->LoS($booking->booking_id);
                        $merged = $merged->merge($data);
                        $merged = $merged->merge($omps);
                        array_push($ar,$merged);
                    }
                }
            }else
            {
                $units = Unit::select('unit_id', 'unit_name','property_id')->where('unit_id', $listing->unit_id)->first();
                $profiles = Profiles::select('profile_name')->where('profile_id', $listing->profile_id)->first();
                $properties = Properties::select('property_id','area_id')->where('property_id', $units->property_id)->first();
                if($properties->area_id == $area)
                {
                    $bes = BookingEmployee::select('employee_id','be_role')
                    ->where('booking_id', $booking->booking_id)->get();
                    $omps['host']=[];
                    $omps['driver']=[];
                    $omps['verifier']=[];
                    foreach($bes as $be)
                    {
                        $emps = collect();
                        $employees = employee::select('employee_name')->where('employee_id', $be->employee_id)->first();
                        $emps = $emps->merge($be);
                        $emps = $emps->merge($employees);
                        if($be->be_role == 0)
                        {
                            $omps['host'] = $emps;
                        }else if ($be->be_role == 1)
                        {
                            $omps['driver'] = $emps;
                        }else if($be->be_role == 2)
                        {
                            $omps['verifier'] = $emps;
                        }
                    }
                    $merged = collect();
                    $merged = $merged->merge($booking);
                    $merged = $merged->merge($units);
                    $merged = $merged->merge($profiles);
                    $data['booking_los'] = $this->LoS($booking->booking_id);
                    $merged = $merged->merge($data);
                    $merged = $merged->merge($omps);
                    array_push($ar,$merged);
                }
            }
        }
        $sort_type = $request->input('data.sort_type');
        $ar = collect($ar);
        if($sort_type == 1)
        {
            $ar = $ar->sortBy('booking_guest_eta');
        }else if($sort_type == 2)
        {
            $ar = $ar->sortByDesc('booking_guest_eta');
        }else if ($sort_type == 3)
        {
            $ar = $ar->sortBy('booking_guest_name');
        }else if ($sort_type == 4)
        {
            $ar = $ar->sortByDesc('booking_guest_name');
        }else if ($sort_type == 5)
        {
            $ar = $ar->sortBy('unit_name');
        }else if ($sort_type == 6)
        {
            $ar = $ar->sortByDesc('unit_name');
        }
        $ar = $ar->values()->toArray();
        $paginated = fnpaginate::pager($ar, $request);
        return $paginated;
        
    }
    public function LoS($id)
    {
        $bookings = Bookings::select('booking_check_in', 'booking_check_out')->where('booking_id',$id)->first();
        $check_in = $bookings->booking_check_in;
        $check_out = $bookings->booking_check_out;
        $diff = abs(strtotime($check_out) - strtotime($check_in));
        $days = floor($diff / (60*60*24));
        $loss = $days;
        return $loss;
    }
    
    public function csvWriter($tgl)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $ar = [];
        $bookings = Bookings::where('booking_check_in', $tgl)->get();
        foreach($bookings as $booking){
            $listings = Listing::where('listing_id', $booking->listing_id)->first();
            $units = Unit::where('unit_id', $listings->unit_id)->first();
            $properties = Properties::where('property_id', $units->property_id)->first();
            $areas = Areas::where('area_id', $properties->area_id)->first();
            $profiles = Profiles::where('profile_id', $listings->profile_id)->first();
            $bes = BookingEmployee::select('employee_id','be_role')
            ->where('booking_id', $booking->booking_id)->get();
            $omps['host']=[];
            $omps['driver']=[];
            $omps['verifier']=[];
            foreach($bes as $be)
            {
                $emps = collect();
                $employees = employee::select('employee_name')->where('employee_id', $be->employee_id)->first();
                $emps = $emps->merge($be);
                $emps = $emps->merge($employees);
                if($be->be_role == 0)
                {
                    $omps['host'] = $emps;
                }else if ($be->be_role == 1)
                {
                    $omps['driver'] = $emps;
                }else if($be->be_role == 2)
                {
                    $omps['verifier'] = $emps;
                }
            }
            $merged = collect();
            $merged = $merged->merge($booking);
            $merged = $merged->merge($units);
            $merged = $merged->merge($profiles);
            $data['booking_los'] = $this->LoS($booking->booking_id);
            $merged = $merged->merge($data);
            $merged = $merged->merge($omps);
            $merged = $merged->merge($areas);
            array_push($ar, $merged);
        }
        $ar = collect($ar);
        $ar = $ar->sortBy('area_name');
        $ar = $ar->values()->toArray();
        try {
            $name = 'CHECK_IN-'.$tgl.'.csv';
            $wr = Writer::createFromPath(storage_path('Csv/'.$name), 'w+');
            $wr->insertOne(['Guest Name',
                            'Check In',
                            'Check Out',
                            'Unit Name',
                            'Profile',
                            'ETA',
                            'Guest Number',
                            'LoS',
                            'Guest Status',
                            'Communication Channel',
                            'Host',
                            'Driver',
                            'Notes',
                            'Area'
                            ]);
            foreach ($ar as $arr)
            {
                $gs = $arr['booking_guest_status'];
                $gss = '';
                if($gs == 0)
                {
                    $gss = 'Not Checked In';
                }else if($gs == 1)
                {
                    $gss = 'Checked In';
                }else if ($gs == 2)
                {
                    $gss = 'Checked In, Not Meeting Host';
                }
                $cc = $arr['booking_comm_channel'];
                $ccs = '';
                if($cc == 1){
                    $ccs = 'WhatsApp';
                }else if ($cc == 2){
                    $ccs='Airbnb Message';
                 }else if ($cc == 3){
                     $ccs='WeChat';
                 }else if($cc == 4){
                     $ccs = 'Booking.com';
                 }
                $host ='';
                $driver = '';
                foreach($arr['host'] as $h)
                {
                    $host = $h;
                }
                foreach($arr['driver'] as $d)
                {
                    $driver = $d;
                }
                $tmp = [$arr['booking_guest_name'],
                        $arr['booking_check_in'],
                        $arr['booking_check_out'],
                        $arr['unit_name'],
                        $arr['profile_name'],
                        $arr['booking_guest_eta'],
                        $arr['booking_guest_number'],
                        $this->LoS($arr['booking_id']),
                        $gss,
                        $ccs,
                        $host,
                        $driver,
                        $arr['booking_notes'],
                        $arr['area_name']
                ];
                $wr->insertOne($tmp);
            }
        } catch (CannotInsertRecord $e) {
            $e->getRecords(); //returns [1, 2, 3]
        }
        return response()->download(storage_path('Csv/'.$name));
    }
}