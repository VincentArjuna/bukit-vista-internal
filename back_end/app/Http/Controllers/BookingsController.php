<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Traits\LogTrait;
use App\Bookings;
use App\Listing;
use App\Properties;
use App\Unit;
use App\Profiles;
use App\fnPaginate;
use App\PaymentBooking;
use App\Areas;
use DB;
use DateTime;

class BookingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
    }
    public function integromatcancelation($id)
    {
        $bookings = Bookings::withTrashed()->where('booking_id', $id)->first();
        $listings = Listing::where('listing_id', $bookings->listing_id)->first();
        $units = Unit::where('unit_id', $listings->unit_id)->first();
        $profiles = Profiles::where('profile_id', $listings->profile_id)->first();
        $properties = Properties::where('property_id', $units->property_id)->first();
        $areas = Areas::where('area_id', $properties->area_id)->first();
        $merged = collect();
        $merged = $merged->merge($bookings);
        $merged = $merged->merge($listings);
        $merged = $merged->merge($units);
        $merged = $merged->merge($profiles);
        $merged = $merged->merge($properties);
        $merged = $merged->merge($areas);
        return $merged;
    }
    public function monthlyBookProp(Request $request)
    {
        $id = $request->input('data.property_id');
        $date = $request->input('data.date');
        $units = Unit::where('property_id', $id)->get();
        $ar = [];
        foreach($units as $unit)
        {
            $listings = Listing::where('unit_id', $unit->unit_id)->get();
            foreach($listings as $listing)
            {
                $bookings = Bookings::where('listing_id', $listing->listing_id)
                ->where('booking_check_in', 'like', '%'.$date.'%')->get();
                $profiles = Profiles::where('profile_id', $listing->profile_id)->first();
                foreach($bookings as $booking)
                {
                    $collect = collect();
                    $collect = $collect->merge($booking);
                    $collect = $collect->merge($profiles);
                    array_push($ar,$collect);
                }
            }
        }
        $paginated = fnPaginate::pager($ar, $request);
        return $paginated;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $bookings = Bookings::where('booking_id', $request->input('data.booking_id'))->first();
        if(!$bookings){
            $bookings = new Bookings;
            $bookings->booking_id = $request->input('data.booking_id');
            $bookings->booking_guest_name = $request->input('data.booking_guest_name');
            $bookings->booking_status = $request->input('data.booking_status');
            $bookings->booking_check_in = $request->input('data.booking_check_in');
            $bookings->booking_check_out = $request->input('data.booking_check_out');
            $bookings->booking_guest_number = $request->input('data.booking_guest_number');
            $bookings->booking_guest_phone = $request->input('data.booking_guest_phone');
            $bookings->booking_guest_eta = $request->input('data.booking_guest_eta');
            $bookings->booking_guest_status = $request->input('data.booking_guest_status');
            $bookings->booking_comm_channel = $request->input('data.booking_comm_channel');
            $bookings->booking_earned = $request->input('data.booking_earned');
            $bookings->booking_currency = $request->input('data.booking_currency');
            $bookings->booking_source = $request->input('data.booking_source');
            $bookings->booking_conversation_url = $request->input('data.booking_conversation_url');
            $bookings->booking_received_timestamp = $request->input('data.booking_received_timestamp');
            $bookings->listing_id = $request->input('data.listing_id');
            $bookings->save();
            return 'TRUE';
        }else
        {
            return 'FALSE';
        }
    }
    public function cancelation(Request $request)
    {
        $bookings = Bookings::where('booking_id', $request->input('data.booking_id'))->first();
        $bookings->booking_status = 2;
        $bookings->delete();
        return 'Booking Canceled';
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }
    function check_in_range($start_date, $end_date, $date_from_user)
    {
        // Convert to timestamp
        $start_ts = strtotime($start_date);
        $end_ts = strtotime($end_date);
        $user_ts = strtotime($date_from_user);

        // Check that user date is between start & end
        return (($user_ts >= $start_ts) && ($user_ts <= $end_ts));
    }

    public function sorterbookinglist(Request $request, $bookings)
    {
        $sort_type = $request->input('data.sort_type');
        if($sort_type == 1){
            $bookings = $bookings->sortBy('booking_guest_name');
        }else if($sort_type == 2){
            $bookings = $bookings->sortByDesc('booking_guest_name');
        }else if($sort_type == 3){
            $bookings = $bookings->sortBy('unit_name');
        }else if($sort_type == 4){
            $bookings = $bookings->sortByDesc('unit_name');
        }else if($sort_type == 5){
            $bookings = $bookings->sortBy('profile_name');
        }else if($sort_type == 6){
            $bookings = $bookings->sortByDesc('profile_name');
        }
        $ar = $bookings->values()->toArray();
        $paginated = fnpaginate::pager($ar, $request);
        return $paginated;
    }
    /**
     * date_type = 0 --> no type
     * date_type = 1 --> check_in    
     * date_type = 2 --> check_out    
     * date_type = 3 --> received_timestamp   
     * date_type = 4 --> in house (check_out - check_in)
     * filter_type = 0 --> no filter
     * filter_type = 1 --> booking_code
     * filter_type = 2 --> guest_name
     * filter_type = 3 --> listing_name
     * filter_type = 4 --> profile_name
     * date = the date for date_filter
     * filterer = the text for filter_type
     * sort_type = 0 -> no sort
     * sort_type = 1 -> booking_guest_name ASC
     * sort_type = 2 -> booking_guest_name DESC
     * sort_type = 3 -> unit_name ASC
     * sort_type = 4 -> unit_name DESC
     * sort_type = 5 -> profile_name ASC
     * sort_type = 6 -> profile_name DESC
    */
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function bookingList(Request $request)
    {
        $date_type = $request->input('data.date_type');
        $date = $request->input('data.date');
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        $sort_type = $request->input('data.sort_type');
        $searcher = ['booking.*',
        DB::raw('(select 
                    (select unit_name from unit u where u.unit_id=l.unit_id)
                    from listing l where l.listing_id=booking.listing_id
                    ) as unit_name'),
        DB::raw('(select 
                    (select profile_name from profile p where p.profile_id=l.profile_id)
                    from listing l where l.listing_id=booking.listing_id
                    )as profile_name')];
        if($date_type == 0 )
        {
            if($filter_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('booking_status', '!=', 2)->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('booking_id', 'like', '%'.$filterer.'%')
                ->where('booking_status', '!=', 2)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_guest_name', 'like', '%'.$filterer.'%')
                ->where('booking_status', '!=', 2)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach($listings as $listing){
                    $bookings = DB::table('booking')->select($searcher
                    )->where('listing_id', $listing->listing_id)
                    ->where('booking_status', '!=', 2)
                    ->get();
                    $ar = $ar->merge($bookings);
                }
                $bookings = $this->sorterbookinglist($request, $ar);
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach($profiles as $profile)
                {
                    $listings = Listing::where('profile_id', $profile->profile_id)->get();
                    foreach($listings as $listing)
                    {
                        $bookings = DB::table('booking')->select($searcher
                        )->where('listing_id', $listing->listing_id)
                        ->where('booking_status', '!=', 2)
                        ->get();
                        $ar = $ar->merge($bookings);
                    }
                }
                $bookings = $this->sorterbookinglist($request, $ar);
            }
        }else if ($date_type == 1)
        {
            if($filter_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_check_in', $date)
                ->where('booking_status', '!=', 2)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 1)
            {
                $matcher = ['booking_check_in'=> $date];
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_check_in', $date)
                ->where('booking_id','like','%'.$filterer.'%')
                ->where('booking_status', '!=', 2)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 2)
            {
                $matcher = ['booking_check_in'=> $date];
                $bookings = Bookings::where($matcher)->where('booking_guest_name', 'like', '%'.$filterer.'%')->paginate(10);
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_check_in', $date)
                ->where('booking_guest_name', 'like', '%'.$filterer.'%')
                ->where('booking_status', '!=', 2)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach ($listings as $listing)
                {
                    $bookings = DB::table('booking')->select($searcher
                    )->where('booking_check_in', $date)
                    ->where('listing_id', $listing->listing_id)
                    ->where('booking_status', '!=', 2)
                    ->get();
                    $ar = $ar->merge($bookings);
                }
                $bookings = $this->sorterbookinglist($request, $ar);
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name', 'like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach ($profiles as $profile)
                {
                    $listings = Listing::where('profile_id', $profile->profile_id)->get();
                    foreach($listings as $listing)
                    {          
                        $bookings = DB::table('booking')->select($searcher
                        )->where('booking_check_in', $date)
                        ->where('listing_id', $listing->listing_id)
                        ->where('booking_status', '!=', 2)
                        ->get();
                        $ar = $ar->merge($bookings);
                    }
                }
                $bookings = $this->sorterbookinglist($request, $ar);
            }
        }else if ($date_type == 2)
        {
            if($filter_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher
                    )->where('booking_check_out', $date)
                    ->where('booking_status', '!=', 2)
                    ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher
                    )->where('booking_check_out', $date)
                    ->where('booking_id','like','%'.$filterer.'%')
                    ->where('booking_status', '!=', 2)
                    ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher
                    )->where('booking_check_out', $date)
                    ->where('booking_guest_name', 'like', '%'.$filterer.'%')
                    ->where('booking_status', '!=', 2)
                    ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach ($listings as $listing)
                {
                    $bookings = DB::table('booking')->select($searcher
                    )->where('booking_check_out', $date)
                    ->where('listing_id', $listing->listing_id)
                    ->where('booking_status', '!=', 2)->get();
                    $ar = $ar->merge($bookings);
                }
                $bookings = $this->sorterbookinglist($request, $ar);                
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name', 'like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach ($profiles as $profile)
                {
                    $listings = Listing::where('profile_id', $profile->profile_id)->get();
                    foreach($listings as $listing)
                    {          
                        $bookings = DB::table('booking')->select($searcher
                        )->where('booking_check_out', $date)
                        ->where('listing_id', $listing->listing_id)
                        ->where('booking_status', '!=', 2)
                        ->get();
                        $ar = $ar->merge($bookings);
                    }
                }
                $bookings = $this->sorterbookinglist($request, $ar);                
            }
        }else if ($date_type == 3)
        {
            if($filter_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_received_timestamp','like', $date.'%')
                ->where('booking_status', '!=', 2)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_received_timestamp','like', $date.'%')
                ->where('booking_id', 'like', '%'.$filterer.'%')
                ->where('booking_status', '!=', 2)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_received_timestamp','like', $date.'%')
                ->where('booking_guest_name', 'like', '%'.$filterer.'%')
                ->where('booking_status', '!=', 2)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach ($listings as $listing)
                {
                    $bookings = DB::table('booking')->select($searcher
                    )->where('booking_received_timestamp','like', $date.'%')
                    ->where('listing_id', $listing->listing_id)
                    ->where('booking_status', '!=', 2)->get();
                    $ar = $ar->merge($bookings);
                }
                $bookings = $this->sorterbookinglist($request, $ar);                
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name', 'like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach ($profiles as $profile)
                {
                    $listings = Listing::where('profile_id', $profile->profile_id)->get();
                    foreach($listings as $listing)
                    {          
                        $bookings = DB::table('booking')->select($searcher
                        )->where('booking_received_timestamp', 'like', $date.'%')
                        ->where('listing_id', $listing->listing_id)
                        ->where('booking_status', '!=', 2)
                        ->get();
                        $ar = $ar->merge($bookings);
                    }
                }
                $bookings = $this->sorterbookinglist($request, $ar);
            }
        }else if ($date_type == 4)
        {
            $bookings = [];
            if($filter_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_status', '!=', 2)
                ->get();
            }else if ($filter_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_id', 'like', '%'.$filterer.'%')
                ->where('booking_status', '!=', 2)
                ->get();
            }else if ($filter_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_guest_name', 'like', '%'.$filterer.'%')
                ->where('booking_status', '!=', 2)
                ->get();
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach ($listings as $listing)
                {
                    $bookings = DB::table('booking')->select($searcher
                    )->where('listing_id', $listing->listing_id)
                    ->where('booking_status', '!=', 2)
                    ->get();
                    $ar = $ar->merge($bookings);
                }
                $bookings = $ar;
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach($profiles as $profile)
                {
                    $listings = Listing::where('profile_id', $profile->profile_id)->get();
                    foreach ($listings as $listing)
                    {
                        $bookings = DB::table('booking')->select($searcher
                        )->where('listing_id', $listing->listing_id)
                        ->where('booking_status', '!=', 2)
                        ->get();
                        $ar = $ar->merge($bookings);
                    }
                }
                $bookings = $ar;
            }
            $collect = [];
            foreach ($bookings as $booking)
            {
                
                if($this->check_in_range($booking->booking_check_in, $booking->booking_check_out, $date))
                {
                    array_push($collect, $booking);
                }
            }
            $bookings = $this->sorterbookinglist($request, $bookings);            
        }
        return $bookings;
    }
    
    /**
     * date_type = 0 --> no type
     * date_type = 1 --> check_in    
     * date_type = 2 --> check_out
     * filter_type = 0 --> no filter
     * filter_type = 1 --> booking_code
     * filter_type = 2 --> guest_name
     * filter_type = 3 --> listing_name
     * filter_type = 4 --> profile_name
     * date = the date for date_filter
     * filterer = the text for filter_type
     * sort_type = 0 -> no sort
     * sort_type = 1 -> booking_guest_name ASC
     * sort_type = 2 -> booking_guest_name DESC
     * sort_type = 3 -> unit_name ASC
     * sort_type = 4 -> unit_name DESC
     * sort_type = 5 -> profile_name ASC
     * sort_type = 6 -> profile_name DESC
    */
    
    public function showDeleted(Request $request)
    {
        $date_type = $request->input('data.date_type');
        $date = $request->input('data.date');
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        $sort_type = $request->input('data.sort_type');
        $searcher = ['booking.*',
        DB::raw('(select 
                    (select unit_name from unit u where u.unit_id=l.unit_id)
                    from listing l where l.listing_id=booking.listing_id
                    ) as unit_name'),
        DB::raw('(select 
                    (select profile_name from profile p where p.profile_id=l.profile_id)
                    from listing l where l.listing_id=booking.listing_id
                    )as profile_name')];
        if($date_type == 0 )
        {
            if($filter_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_status', 2)->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_id', 'like', '%'.$filterer.'%')
                ->where('booking_status', 2)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_guest_name', 'like', '%'.$filterer.'%')
                ->where('booking_status', 2)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach($listings as $listing){
                    $bookings = DB::table('booking')->select($searcher
                    )->where('listing_id', $listing->listing_id)
                    ->where('booking_status', 2)
                    ->get();
                    $ar = $ar->merge($bookings);
                }
                $bookings = $this->sorterbookinglist($request, $ar);
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach($profiles as $profile)
                {
                    $listings = Listing::where('profile_id', $profile->profile_id)->get();
                    foreach($listings as $listing)
                    {
                        $bookings = DB::table('booking')->select($searcher
                        )->where('listing_id', $listing->listing_id)
                        ->where('booking_status', 2)
                        ->get();
                        $ar = $ar->merge($bookings);
                    }
                }
                $bookings = $this->sorterbookinglist($request, $ar);
            }
        }else if($date_type == 1 )
        {
            if($filter_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('booking_status', 2)
                ->where('booking_check_in', $date)->get();
                $bookings = $this->sorterbookinglist($request, $bookings,$sort_type);
            }else if ($filter_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('booking_id', 'like', '%'.$filterer.'%')
                ->where('booking_status', 2)
                ->where('booking_check_in', $date)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('booking_guest_name', 'like', '%'.$filterer.'%')
                ->where('booking_status', 2)
                ->where('booking_check_in', $date)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach($listings as $listing){
                    $bookings = DB::table('booking')->select($searcher
                    )->where('listing_id', $listing->listing_id)
                    ->where('booking_status', 2)
                    ->where('booking_check_in', $date)
                    ->get();
                    $ar = $ar->merge($bookings);
                }
                $bookings = $this->sorterbookinglist($request, $ar);
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach($profiles as $profile)
                {
                    $listings = Listing::where('profile_id', $profile->profile_id)->get();
                    foreach($listings as $listing)
                    {
                        $bookings = DB::table('booking')->select($searcher
                        )->where('listing_id', $listing->listing_id)
                        ->where('booking_status', 2)
                        ->where('booking_check_in', $date)
                        ->get();
                        $ar = $ar->merge($bookings);
                    }
                }
                $bookings = $this->sorterbookinglist($request, $ar);
            }
        }else if($date_type == 2)
        {
            if($filter_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('booking_status', 2)
                ->where('booking_check_out', $date)->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('booking_id', 'like', '%'.$filterer.'%')
                ->where('booking_status', 2)
                ->where('booking_check_out', $date)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('booking_guest_name', 'like', '%'.$filterer.'%')
                ->where('booking_status', 2)
                ->where('booking_check_out', $date)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach($listings as $listing){
                    $bookings = DB::table('booking')->select($searcher
                    )->where('listing_id', $listing->listing_id)
                    ->where('booking_status', 2)
                    ->where('booking_check_out', $date)
                    ->get();
                    $ar = $ar->merge($bookings);
                }
                $bookings = $this->sorterbookinglist($request, $ar);                
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach($profiles as $profile)
                {
                    $listings = Listing::where('profile_id', $profile->profile_id)->get();
                    foreach($listings as $listing)
                    {
                        $bookings = DB::table('booking')->select($searcher
                        )->where('listing_id', $listing->listing_id)
                        ->where('booking_status', 2)
                        ->where('booking_check_out', $date)
                        ->get();
                        $ar = $ar->merge($bookings);
                    }
                }
                $bookings = $this->sorterbookinglist($request, $ar);                
            }
        }
        return $bookings;
    }

    /**
     * date_type = 0 --> no type
     * date_type = 1 --> check_in    
     * date_type = 2 --> check_out
     * filter_type = 0 --> no filter
     * filter_type = 1 --> booking_id
     * filter_type = 2 --> guest_name
     * filter_type = 3 --> profile_name
     * date = the date for date_filter
     * filterer = the text for filter_type
     * sort_type = 0 -> no sort
     * sort_type = 1 -> booking_guest_name ASC
     * sort_type = 2 -> booking_guest_name DESC
     * sort_type = 3 -> unit_name ASC
     * sort_type = 4 -> unit_name DESC
     * sort_type = 5 -> profile_name ASC
     * sort_type = 6 -> profile_name DESC
    */

    public function bookingUnregisteredListing(Request $request)
    {
        $date_type = $request->input('data.date_type');
        $date = $request->input('data.date');
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        $sort_type = $request->input('data.sort_type');
        $searcher = ['booking.*',
        DB::raw('(select 
                    (select unit_name from unit u where u.unit_id=l.unit_id)
                    from listing l where l.listing_id=booking.listing_id
                    ) as unit_name'),
        DB::raw('(select 
                    (select profile_name from profile p where p.profile_id=l.profile_id)
                    from listing l where l.listing_id=booking.listing_id
                    )as profile_name')];
        if($date_type == 0 )
        {
            if($filter_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('listing_id', 'UNREGISTERED')->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_id', 'like', '%'.$filterer.'%')
                ->where('listing_id', 'UNREGISTERED')
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher
                )->where('booking_guest_name', 'like', '%'.$filterer.'%')
                ->where('listing_id', 'UNREGISTERED')
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 3)
            {
                $profiles = Profiles::where('profile_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach($profiles as $profile)
                {
                    $listings = Listing::where('profile_id', $profile->profile_id)->get();
                    foreach($listings as $listing)
                    {
                        $bookings = DB::table('booking')->select($searcher
                        )->where('listing_id', $listing->listing_id)
                        ->where('listing_id', 'UNREGISTERED')
                        ->get();
                        $ar = $ar->merge($bookings);
                    }
                }
                $bookings = $this->sorterbookinglist($request, $ar);
            }
        }else if($date_type == 1 )
        {
            if($filter_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('listing_id', 'UNREGISTERED')
                ->where('booking_check_in', $date)->get();
                $bookings = $this->sorterbookinglist($request, $bookings,$sort_type);
            }else if ($filter_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('booking_id', 'like', '%'.$filterer.'%')
                ->where('listing_id', 'UNREGISTERED')
                ->where('booking_check_in', $date)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('booking_guest_name', 'like', '%'.$filterer.'%')
                ->where('listing_id', 'UNREGISTERED')
                ->where('booking_check_in', $date)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 3)
            {
                $profiles = Profiles::where('profile_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach($profiles as $profile)
                {
                    $listings = Listing::where('profile_id', $profile->profile_id)->get();
                    foreach($listings as $listing)
                    {
                        $bookings = DB::table('booking')->select($searcher
                        )->where('listing_id', $listing->listing_id)
                        ->where('listing_id', 'UNREGISTERED')
                        ->where('booking_check_in', $date)
                        ->get();
                        $ar = $ar->merge($bookings);
                    }
                }
                $bookings = $this->sorterbookinglist($request, $ar);
            }
        }else if($date_type == 2)
        {
            if($filter_type == 0)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('listing_id', 'UNREGISTERED')
                ->where('booking_check_out', $date)->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 1)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('booking_id', 'like', '%'.$filterer.'%')
                ->where('listing_id', 'UNREGISTERED')
                ->where('booking_check_out', $date)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 2)
            {
                $bookings = DB::table('booking')->select($searcher)
                ->where('booking_guest_name', 'like', '%'.$filterer.'%')
                ->where('listing_id', 'UNREGISTERED')
                ->where('booking_check_out', $date)
                ->get();
                $bookings = $this->sorterbookinglist($request, $bookings);
            }else if ($filter_type == 3)
            {
                $profiles = Profiles::where('profile_name','like', '%'.$filterer.'%')->get();
                $ar = collect();
                foreach($profiles as $profile)
                {
                    $listings = Listing::where('profile_id', $profile->profile_id)->get();
                    foreach($listings as $listing)
                    {
                        $bookings = DB::table('booking')->select($searcher
                        )->where('listing_id', $listing->listing_id)
                        ->where('listing_id', 'UNREGISTERED')
                        ->where('booking_check_out', $date)
                        ->get();
                        $ar = $ar->merge($bookings);
                    }
                }
                $bookings = $this->sorterbookinglist($request, $ar);                
            }
        }
        return $bookings;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $update_type = $request->input('data.update_type');
        $id = $request->input('data.booking_id');
        $bookings = Bookings::where('booking_id', $id)->first();
        if($bookings){
            if($update_type == 0)
            {
                $bookings->booking_guest_name = $request->input('data.booking_guest_name');
                $bookings->booking_status = $request->input('data.booking_status');
                $bookings->booking_check_in = $request->input('data.booking_check_in');
                $bookings->booking_check_out = $request->input('data.booking_check_out');
                $bookings->booking_guest_number = $request->input('data.booking_guest_number');
                $bookings->booking_guest_phone = $request->input('data.booking_guest_phone');
                $bookings->booking_guest_eta = $request->input('data.booking_guest_eta');
                $bookings->booking_guest_status = $request->input('data.booking_guest_status');
                $bookings->booking_comm_channel = $request->input('data.booking_comm_channel');
                $bookings->booking_earned = $request->input('data.booking_earned');
                $bookings->booking_currency = $request->input('data.booking_currency');
                $bookings->booking_source = $request->input('data.booking_source');
                $bookings->booking_conversation_url = $request->input('data.booking_conversation_url');
                $bookings->listing_id = $request->input('data.listing_id');
            }else
            {
                $bookings->booking_comm_channel = $request->input('data.booking_comm_channel');
                $bookings->booking_check_out = $request->input('data.booking_check_out');
                $bookings->booking_guest_phone = $request->input('data.booking_guest_phone');
                $bookings->booking_guest_eta = $request->input('data.booking_guest_eta');
                $bookings->booking_guest_status = $request->input('data.booking_guest_status');
                $bookings->booking_guest_number = $request->input('data.booking_guest_number');
            }
            $bookings->save();
            if ($bookings->booking_status == 2)
            {
                $this->softDelete($bookings->booking_id);
            }
            return 'TRUE';
        }else {
             return 'FALSE';
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function softDelete($id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $bookings = Bookings::where('booking_id', $id)->first();
        $bookings->delete();
        return 'Data SoftDeleted';
    }
    public function restore($id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        Bookings::onlyTrashed()->where('booking_id', $id)->restore();
        $bookings = Bookings::where('booking_id', $id)->first();
        $bookings->booking_status = 1;
        $bookings->save();
        return 'Data Restored';
    }
}
