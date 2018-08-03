<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Bookings;
use App\Http\Requests;
use DateTime;
use App\Listing;
use App\Properties;
use App\Unit;
use App\Profiles;
use App\fnPaginate;
use App\PaymentBooking;
use GeneaLabs\LaravelModelCaching\Traits\Cachable;

class BookingsController extends Controller
{
    use Cachable;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $bookings = new Bookings;
        $bookings->booking_id = $request->input('data.booking_id');
        $bookings->booking_guest_name = $request->input('data.booking_guest_name');
        $bookings->booking_status = $request->input('data.booking_status');
        $bookings->booking_check_in = $request->input('data.booking_check_in');
        $bookings->booking_check_out = $request->input('data.booking_check_in');
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
        $bookings->booking_received_timestamp = $request->input('data.booking_received_timestamp');
        $bookings->listing_id = $request->input('data.listing_id');
        $bookings->save();
        return 'New Data Added';
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
                $bookings = Bookings::where('booking_id', $filterer)->paginate(10);
                return $bookings;
            }else if ($filter_type == 2)
            {
                $bookings = Bookings::where('booking_guest_name', $filterer)->paginate(10);
                return $bookings;
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name', $filterer)->first();
                $bookings = Bookings::where('listing_id', $listings->listing_id)->paginate(10);
                return $bookings;
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name', $filterer)->first();
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
                $matcher = ['booking_id'=>$filterer, 'booking_check_in'=> $date];
                $bookings = Bookings::where($matcher)->paginate(10);
                return $bookings;
            }else if ($filter_type == 2)
            {
                $matcher = ['booking_guest_name'=>$filterer, 'booking_check_in'=> $date];
                $bookings = Bookings::where($matcher)->paginate(10);
                return $bookings;
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name', $filterer)->first();
                $matcher = ['listing_id'=>$listings->listing_id, 'booking_check_in'=> $date];                
                $bookings = Bookings::where($matcher)->paginate(10);
                return $bookings;
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name', $filterer)->first();
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
                $matcher = ['booking_id'=>$filterer, 'booking_check_out'=> $date];
                $bookings = Bookings::where($matcher)->paginate(10);
                return $bookings;
            }else if ($filter_type == 2)
            {
                $matcher = ['booking_guest_name'=>$filterer, 'booking_check_out'=> $date];
                $bookings = Bookings::where($matcher)->paginate(10);
                return $bookings;
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name', $filterer)->first();
                $matcher = ['listing_id'=>$listings->listing_id, 'booking_check_out'=> $date];                
                $bookings = Bookings::where($matcher)->paginate(10);
                return $bookings;
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name', $filterer)->first();
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
                $matcher = ['booking_id'=>$filterer];
                $bookings = Bookings::where($matcher)->where('booking_received_timestamp','like', $date.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 2)
            {
                $matcher = ['booking_guest_name'=>$filterer];
                $bookings = Bookings::where($matcher)->where('booking_received_timestamp','like', $date.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 3)
            {
                $listings = Listing::where('listing_name', $filterer)->first();
                $matcher = ['listing_id'=>$listings->listing_id];                
                $bookings = Bookings::where($matcher)->where('booking_received_timestamp','like', $date.'%')->paginate(10);
                return $bookings;
            }else if ($filter_type == 4)
            {
                $profiles = Profiles::where('profile_name', $filterer)->first();
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
            $bookings->booking_check_in = $request->input('data.booking_check_in');
            $bookings->booking_check_out = $request->input('data.booking_check_out');
            $bookings->booking_guest_eta = $request->input('data.booking_guest_eta');
            $bookings->booking_guest_status = $request->input('data.booking_guest_status');
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
