<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Bookings;
use App\Http\Requests;
use DateTime;
use App\Listing;
use App\Properties;
use App\Unit;

class BookingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bookings = Bookings::Latest()->paginate(20);
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
        $rawcheckin = date_create($request->input('data.booking_check_in'));
        $rawcheckout = date_create($request->input('data.booking_check_out'));
        $rawrtimestamp = date_create($request->input('data.booking_received_timestamp'));
        $raweta = date_create($request->input('data.booking_guest_eta'));
        $check_in = date_format($rawcheckin,"Y-m-d");
        $check_out = date_format($rawcheckout,"Y-m-d");
        $received_timestamp = date_format($rawrtimestamp,"Y-m-d H:i:s");
        $guest_eta = date_format($raweta,"H:i:s");
        
        $bookings = new Bookings;
        $bookings->booking_id = $request->input('data.booking_id');
        $bookings->booking_guest_name = $request->input('data.booking_guest_name');
        $bookings->booking_status = $request->input('data.booking_status');
        $bookings->booking_check_in = $check_in;
        $bookings->booking_check_out = $check_out;
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
        $bookings->created_at = new DateTime();
        $bookings->updated_at = null;
        $bookings->deleted_at = null;
        $bookings->temp_column = null;
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
    public function showGuest($id)
    {
        $bookings = Bookings::where('booking_guest_name',$id)->get();
        return $bookings;
    }
    public function showId($id)
    {
        $bookings = Bookings::where('booking_id',$id)->get();
        return $bookings;
    }
    public function showSource($id)
    {
        $bookings = Bookings::where('booking_source',$id)->get();
        return $bookings;
    }
    public function showListing($id)
    {
        $bookings = Bookings::where('listing_id',$id)->get();
        return $bookings;
    }
    public function showCheckIn($id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $rawcheckin = date_create($id);
        $check_in = date_format($rawcheckin,"Y-m-d");
        $bookings = Bookings::where('booking_check_in',$check_in)->get();
        return $bookings;
    }
    public function showCheckOut($id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $rawcheckout = date_create($id);
        $check_out = date_format($rawcheckout,"Y-m-d");
        $bookings = Bookings::where('booking_check_out',$check_out)->get();
        return $bookings;
    }
    public function showProfile($id)
    {
        $listings = Listing::where('profile_id',$id)->get();  
        $ar = [];
        foreach ($listings as $listing){
            $bookings = Bookings::where('listing_id',$listing->listing_id)->get();
            foreach ($bookings as $booking){
                array_push($ar,$booking);
            }
        }
        return $ar;
    }
    public function showArea($id)
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
        return $ar;
    }
    public function showArrival($tgl, $area)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $rawcheckin = date_create($tgl);
        $check_in = date_format($rawcheckin,"Y-m-d");
        $ar = [];
        $properties = Properties::where('area_id', $area)->get();
        foreach($properties as $property){
            $units = Unit::where('property_id', $property->property_id)->get();
            foreach($units as $unit){
                $listings = Listing::where('unit_id', $unit->unit_id)->get();
                foreach ($listings as $listing){
                    $bookings = Bookings::where('listing_id',$listing->listing_id)->where('booking_check_in', $check_in)->get();
                    foreach ($bookings as $booking){
                        array_push($ar,$booking);
                    }
                }                
            }
        }
        return $ar;
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
        $rawcheckin = date_create($request->input('data.booking_check_in'));
        $rawcheckout = date_create($request->input('data.booking_check_out'));
        $rawrtimestamp = date_create($request->input('data.booking_received_timestamp'));
        $raweta = date_create($request->input('data.booking_guest_eta'));
        $check_in = date_format($rawcheckin,"Y-m-d");
        $check_out = date_format($rawcheckout,"Y-m-d");
        $received_timestamp = date_format($rawrtimestamp,"Y-m-d H:i:s");
        $guest_eta = date_format($raweta,"H:i:s");

        $bookings = Bookings::find($id)->first();
        $bookings->booking_guest_name = $request->input('data.booking_guest_name');
        $bookings->booking_status = $request->input('data.booking_status');
        $bookings->booking_check_in = $check_in;
        $bookings->booking_check_out = $check_out;
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
        $bookings->updated_at = new DateTime();
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
        $bookings = Bookings::find($id)->first();
        $bookings->deleted_at = new DateTime();
        $bookings->save();
        return 'Data SoftDeleted';
    }
}
