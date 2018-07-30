<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Bookings;
use App\Http\Requests;
use DateTime;
use App\Listing;
use App\Properties;
use App\Unit;
use App\fnPaginate;
use App\PaymentBooking;
class BookingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $bookings = Bookings::where('deleted_at', null)->latest()->paginate(20);
        return $bookings;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');

        $rawrtimestamp = date_create($request->input('data.booking_received_timestamp'));
        $raweta = date_create($request->input('data.booking_guest_eta'));
        $received_timestamp = date_format($rawrtimestamp,"Y-m-d H:i:s");
        $guest_eta = date_format($raweta,"H:i:s");
        $bookings = new Bookings;
        $bookings->booking_id = $request->input('data.booking_id');
        $bookings->booking_guest_name = $request->input('data.booking_guest_name');
        $bookings->booking_status = $request->input('data.booking_status');
        $bookings->booking_check_in = $request->input('data.booking_check_in');
        $bookings->booking_check_out = $request->input('data.booking_check_in');
        $bookings->booking_guest_number = $request->input('data.booking_guest_number');
        $bookings->booking_guest_phone = $request->input('data.booking_guest_phone');
        $bookings->booking_guest_eta = $guest_eta;
        $bookings->booking_comm_channel = $request->input('data.booking_comm_channel');
        $bookings->booking_notes = $request->input('data.booking_notes');
        $bookings->booking_earned = $request->input('data.booking_earned');
        $bookings->booking_currency = $request->input('data.booking_currency');
        $bookings->booking_source = $request->input('data.booking_source');
        $bookings->booking_conversation_url = $request->input('data.booking_conversation_url');
        $bookings->booking_received_timestamp = $received_timestamp;
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
    public function showId($id)
    {
        $bookings = Bookings::where('booking_id', $id)->get();
        return $bookings;
    }
        public function showGuest($id)
    {
        $bookings = Bookings::where('booking_guest_name', $id)->paginate(20);
        return $bookings;
    }
    public function showSource($id)
    {
        $bookings = Bookings::where('booking_source', $id)->paginate(20);
        return $bookings;
    }
    public function showListing($id)
    {
        $bookings = Bookings::where('listing_id', $id)->paginate(20);
        return $bookings;
    }
    public function showCheckIn($id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $bookings = Bookings::where('booking_check_in', $id)->paginate(20);
        return $bookings;
    }
    public function showCheckOut($id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $bookings = Bookings::where('booking_check_out',$id)->paginate(20);
        return $bookings;
    }
    public function showProfile($id, Request $request)
    {
        $listings = Listing::where('profile_id',$id)->get();  
        $ar = [];
        foreach ($listings as $listing){
            $bookings = Bookings::where('listing_id',$listing->listing_id)->get();
            foreach ($bookings as $booking){
                array_push($ar,$booking);
            }
        }
        $paginated = fnPaginate::pager($ar, $request);
        return $paginated;
    }
    public function showArea($id, Request $request)
    {
        $ar = [];
        $properties = Properties::where('area_id', $id)->get();
        foreach($properties as $property){
            $units = Unit::where('property_id', $property->property_id)->get();
            foreach($units as $unit){
                $listings = Listing::where('unit_id', $unit->unit_id)->get();
                foreach ($listings as $listing){
                    $bookings = Bookings::where('listing_id',$listing->listing_id)->get();
                    foreach ($bookings as $booking){
                        array_push($ar,$booking);
                    }
                }                
            }
        }
        $paginated = fnPaginate::pager($ar, $request);
        return $paginated;
    }
    public function showPayment($id, Request $request)
    {
        $ar=[];
        $properties = Properties::where('property_id', $id)->get();
        foreach($properties as $property){
            $units = Unit::where('property_id', $property->property_id)->get();
            foreach($units as $unit){
                $listings = Listing::where('unit_id', $unit->unit_id)->get();
                foreach ($listings as $listing){
                    $bookings = Bookings::where('listing_id',$listing->listing_id)->get();
                    foreach ($bookings as $booking){
                        $pbs = PaymentBooking::where('booking_id', $booking->booking_id)->get();
                        foreach($pbs as $pb)
                        {
                            array_push($ar,$pb);
                        }
                    }
                }                
            }
        }
        $paginated = fnPaginate::pager($ar, $request);
        return $paginated;
    }
    public function showDeleted()
    {
        $bookings = Bookings::onlyTrashed()->latest()->paginate();
        return $bookings;
    }
    public function showrec($id)
    {
        $bookings = Bookings::where('booking_received_timestamp', 'like', $id.'%')->get();
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
    public function update(Request $request, $id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $rawrtimestamp = date_create($request->input('data.booking_received_timestamp'));
        $raweta = date_create($request->input('data.booking_guest_eta'));
        $received_timestamp = date_format($rawrtimestamp,"Y-m-d H:i:s");
        $guest_eta = date_format($raweta,"H:i:s");

        $bookings = Bookings::where('booking_id', $id)->first();
        $bookings->booking_guest_name = $request->input('data.booking_guest_name');
        $bookings->booking_status = $request->input('data.booking_status');
        $bookings->booking_check_in = $request->input('data.booking_check_in');
        $bookings->booking_check_out = $request->input('data.booking_check_out');
        $bookings->booking_guest_number = $request->input('data.booking_guest_number');
        $bookings->booking_guest_phone = $request->input('data.booking_guest_phone');
        $bookings->booking_guest_eta = $guest_eta;
        $bookings->booking_comm_channel = $request->input('data.booking_comm_channel');
        $bookings->booking_notes = $request->input('data.booking_notes');
        $bookings->booking_earned = $request->input('data.booking_earned');
        $bookings->booking_currency = $request->input('data.booking_currency');
        $bookings->booking_source = $request->input('data.booking_source');
        $bookings->booking_conversation_url = $request->input('data.booking_conversation_url');
        $bookings->booking_received_timestamp = $received_timestamp;
        $bookings->listing_id = $request->input('data.listing_id');
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
