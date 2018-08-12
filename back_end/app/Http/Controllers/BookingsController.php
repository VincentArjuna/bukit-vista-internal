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
use DateTime;

class BookingsController extends Controller
{
    use LogTrait;
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
        $merged = collect();
        $merged =  $merged->merge($bookings);
        $merged =  $merged->merge($listings);
        $merged =  $merged->merge($units);
        $merged =  $merged->merge($profiles);
        return $merged;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        return $request->all();
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
        if($date_type == 0 )
        {
            if($filter_type == 0)
            {
                $bookings = Bookings::paginate(10);
                return $bookings;
            }else if ($filter_type == 1)
            {
                $bookings = Bookings::where('booking_id', 'like', '%'.$filterer.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 2)
            {
                $bookings = Bookings::where('booking_guest_name', 'like', '%'.$filterer.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name','like', '%'.$filterer.'%')->first();
                $bookings = Bookings::where('listing_id', $listings->listing_id)->paginate(10);
                return $bookings;
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name','like', '%'.$filterer.'%')->first();
                $listings = Listing::where('profile_id', $profiles->profile_id)->get();
                $bookings = Bookings::get();
                $ar = collect();
                foreach($listings as $listing)
                {
                    $bookings = Bookings::where('listing_id', $listing->listing_id)->get();
                    $ar = $ar->merge($bookings);
                }
                $paginated = fnPaginate::pager($ar, $request);
                return $paginated;
            }
        }else if ($date_type == 1)
        {
            if($filter_type == 0)
            {
                $bookings = Bookings::where('booking_check_in', $date)->paginate(10);
                return $bookings;
            }else if ($filter_type == 1)
            {
                $matcher = ['booking_check_in'=> $date];
                $bookings = Bookings::where($matcher)->where('booking_id','like','%'.$filterer.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 2)
            {
                $matcher = ['booking_check_in'=> $date];
                $bookings = Bookings::where($matcher)->where('booking_guest_name', 'like', '%'.$filterer.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name','like', '%'.$filterer.'%')->first();
                $matcher = ['listing_id'=>$listings->listing_id, 'booking_check_in'=> $date];                
                $bookings = Bookings::where($matcher)->paginate(10);
                return $bookings;
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name', 'like', '%'.$filterer.'%')->first();
                $listings = Listing::where('profile_id', $profiles->profile_id)->get();
                $bookings = Bookings::get();
                $ar = collect();
                foreach($listings as $listing)
                {
                    $matcher = ['listing_id'=>$listings->listing_id, 'booking_check_in'=> $date];                
                    $bookings = Bookings::where($matcher)->get();
                    $ar = $ar->merge($bookings);
                }
                $paginated = fnPaginate::pager($ar, $request);
                return $paginated;
            }
        }else if ($date_type == 2)
        {
            if($filter_type == 0)
            {
                $bookings = Bookings::where('booking_check_out', $date)->paginate(10);
                return $bookings;
            }else if ($filter_type == 1)
            {
                $matcher = ['booking_check_out'=> $date];
                $bookings = Bookings::where($matcher)->where('booking_id','like','%'.$filterer.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 2)
            {
                $matcher = ['booking_check_out'=> $date];
                $bookings = Bookings::where($matcher)->where('booking_guest_name', 'like', '%'.$filterer.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name', 'like', '%'.$filterer.'%')->first();
                $matcher = ['listing_id'=>$listings->listing_id, 'booking_check_out'=> $date];                
                $bookings = Bookings::where($matcher)->paginate(10);
                return $bookings;
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name', ' like', '%'.$filterer.'%')->first();
                $listings = Listing::where('profile_id', $profiles->profile_id)->get();
                $bookings = Bookings::get();
                $ar = collect();
                foreach($listings as $listing)
                {
                    $matcher = ['listing_id'=>$listings->listing_id, 'booking_check_out'=> $date];                
                    $bookings = Bookings::where($matcher)->get();
                    $ar = $ar->merge($bookings);
                }
                $paginated = fnPaginate::pager($ar, $request);
                return $paginated;
            }
        }else if ($date_type == 3)
        {
            if($filter_type == 0)
            {
                $bookings = Bookings::where('booking_received_timestamp','like', $date.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 1)
            {
                $bookings = Bookings::where('booking_id', 'like', '%'.$filterer.'%')->where('booking_received_timestamp','like', $date.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 2)
            {
                $bookings = Bookings::where('booking_guest_name', 'like', '%'.$filterer.'%')->where('booking_received_timestamp','like', $date.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name','like', '%'.$filterer.'%')->first();
                $matcher = ['listing_id'=>$listings->listing_id];                
                $bookings = Bookings::where($matcher)->where('booking_received_timestamp','like', $date.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name','like', '%'.$filterer.'%')->first();
                $listings = Listing::where('profile_id', $profiles->profile_id)->get();
                $bookings = Bookings::get();
                $ar = collect();
                foreach($listings as $listing)
                {
                    $matcher = ['listing_id'=>$listings->listing_id];                
                    $bookings = Bookings::where($matcher)->where('booking_received_timestamp','like', $date.'%')->get();
                    $ar = $ar->merge($bookings);
                }
                $paginated = fnPaginate::pager($ar, $request);
                return $paginated;
            }
        }else if ($date_type == 4)
        {
            $bookings = [];
            if($filter_type == 0)
            {
                $bookings = Bookings::get();
            }else if ($filter_type == 1)
            {
                $bookings = Bookings::where('booking_id', 'like', '%'.$filterer.'%')->get();
            }else if ($filter_type == 2)
            {
                $bookings = Bookings::where('booking_guest_name', 'like', '%'.$filterer.'%')->get();
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name','like', '%'.$filterer.'%')->first();
                $bookings = Bookings::where('listing_id', $listings->listing_id)->get();
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name','like', '%'.$filterer.'%')->first();
                $listings = Listing::where('profile_id', $profiles->profile_id)->get();
                $bookings = Bookings::get();
                $ar = [];
                foreach($listings as $listing)
                {
                    $bookings = Bookings::where('listing_id', $listing->listing_id)->get();
                    foreach($bookings as $booking)
                    {
                        array_push($ar,$booking);
                    }
                }
            }
            $collect = [];
            foreach ($bookings as $booking)
            {
                if($this->check_in_range($booking->booking_check_in, $booking->booking_check_out, $date))
                {
                    array_push($collect, $booking);
                }
            }
            $paginated = fnPaginate::pager($collect, $request);
            return $paginated;
        }
    }
    
    public function showDeleted()
    {
        $bookings = Bookings::onlyTrashed()->latest()->paginate();
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
            $bookings->booking_notes = $request->input('data.booking_notes');
            $bookings->booking_earned = $request->input('data.booking_earned');
            $bookings->booking_currency = $request->input('data.booking_currency');
            $bookings->booking_source = $request->input('data.booking_source');
            $bookings->booking_conversation_url = $request->input('data.booking_conversation_url');
            $bookings->booking_received_timestamp = $request->input('data.booking_received.timestamp');
            $bookings->listing_id = $request->input('data.listing_id');
        }else
        {
            $bookings->booking_check_out = $request->input('data.booking_check_out');
            $bookings->booking_guest_phone = $request->input('data.booking_guest_phone');
            $bookings->booking_guest_eta = $request->input('data.booking_guest_eta');
            $bookings->booking_guest_status = $request->input('data.booking_guest_status');
            $bookings->booking_notes = $request->input('data.booking_notes');
            $bookings->booking_guest_number = $request->input('data.booking_guest_number');
        }
        $bookings->save();
        return 'Data Updated';
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
        Bookings::onlyTrashed()->where('area_id', $id)->restore();
        return 'Data Restored';
    }
}
