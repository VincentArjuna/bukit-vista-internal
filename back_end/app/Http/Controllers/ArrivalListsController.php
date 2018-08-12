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
                                 'booking_guest_phone', 'booking_comm_channel', 'booking_guest_eta',
                                 'booking_guest_status','booking_conversation_url','listing_id','booking_notes'];
        $bookings = Bookings::select($searcher)->get();        
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
                $bookings = Bookings::select($searcher)->where('booking_guest_name', 'like', '$'.$filterer.'%')->get();
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
            $ar->sortBy('booking_guest_eta');
        }else if($sort_type == 2)
        {
            $ar->sortByDesc('booking_guest_eta');
        }else if ($sort_type == 3)
        {
            $ar->sortBy('unit_name');
        }else if ($sort_type == 4)
        {
            $ar->sortByDesc('unit_name');
        }
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
            $profiles = Profiles::where('profile_id', $listings->profile_id)->first();
            $merged = collect();
            $merged = $merged->merge($booking);
            $merged = $merged->merge($units);
            $merged = $merged->merge($profiles);
            $data['booking_los'] = $this->LoS($booking->booking_id);
            $merged = $merged->merge($data);
            array_push($ar, $merged);
        }
        try {
            $name = 'CHECK_IN-'.$tgl.'.csv';
            $wr = Writer::createFromPath(storage_path('Csv/'.$name), 'w+');
            $wr->insertOne(['Guest Name',
                            'Check In',
                            'Check Out',
                            'Unit Name',
                            'Profile']);
            foreach ($ar as $arr)
            {
                $prname = Profiles::where('profile_id', $arr['profile_id'])->first()->profile_name;
                $tmp = [$arr['booking_guest_name'],
                        $arr['booking_check_in'],
                        $arr['booking_check_out'],
                        $arr['unit_name'],
                        $prname
                ];
                $wr->insertOne($tmp);
            }
        } catch (CannotInsertRecord $e) {
            $e->getRecords(); //returns [1, 2, 3]
        }
        return response()->download(storage_path('Csv/'.$name));
    }
}