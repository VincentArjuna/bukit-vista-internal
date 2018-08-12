<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DateTime;
use App\Bookings;
use App\Listing;
use App\Unit;
class BookingComController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    function multiexplode ($delimiters,$string) {
    
        $ready = str_replace($delimiters, $delimiters[0], $string);
        $launch = explode($delimiters[0], $ready);
        return  $launch;
    }

    public function newBookingCom(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $guest_name = $request->input('data.name');
        $unit_name = $request->input('data.unit_name');
        $guest_phone = $request->input('data.phone');
        $check_in = $request->input('data.check_in');
        $check_out = $request->input('data.check_out');
        $adult = $request->input('data.guests');
        $children = $request->input('data.children');
        $price = $request->input('data.price');
        $profile_name = $request->input('data.username');
        $unit_name = explode('-',$unit_name);
        $units = Unit::where('unit_name', 'like', $unit_name[0].' BookingCom')->first();
        $rawbookingid = $request->input('data.email');
        $exploded = $this->multiexplode(array("-","@"),$rawbookingid);
        $booking_id = $exploded[1];
        $guest_number = (int)$adult + (int)$children;
        $currency = substr($price,0,2);
        if($currency == 'Rp')
        {
            $currency = 1;
        }
        $earned = intval(substr($price,2,(strlen($price)-6)));
        if(!$units){}else
        {
            //var_dump('in');
            $listings = Listing::where('unit_id', $units->unit_id)->where('profile_id', 'PA0003')->first();
            $bookings = new Bookings;
            $bookings->booking_id = $booking_id;
            $bookings->booking_guest_name = $guest_name;
            $bookings->booking_guest_phone = $guest_phone;
            $bookings->booking_check_in = $check_in;
            $bookings->booking_check_out = $check_out;
            $bookings->booking_guest_number = $guest_number;
            $bookings->listing_id = $listings->listing_id;
            $date = new DateTime;
            $bookings->booking_received_timestamp  = $date->format('Y-m-d H:i:s');
            $bookings->booking_currency = $currency;
            $bookings->booking_earned - $earned;
            $bookings->save();
            return $bookings;
        }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
