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

    public function new_BC_id()
    {
        $bcs = Bookings::where('booking_id','like','BC-%')->Latest()->first();
        $id = substr($bcs->booking_id,3);
        $ctr = intval($id)+1;
        $bc_id = 'BC-'.sprintf("%04s", $ctr);
        return $bc_id;
    }

    public function convert_currency($cur){
        if(strpos($cur, 'Rp') !== false){
            return 1;
        }else if(strpos($cur, '$') !== false){
            return 2;
        }else if(strpos($cur, 'EUR') !== false|| strpos($cur, '€') !== false){
            return 3;
        }else if(strpos($cur, '$AUD') !== false){
            return 4;
        }else{
            return 5;
        }
    }

    public function newBookingCom(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $guest_name = $request->input('name');
        $unit_name = $request->input('unit_name');
        $guest_phone = $request->input('phone');
        $check_in = $request->input('check_in');
        $check_out = $request->input('check_out');
        $adult = $request->input('guests');
        $children = $request->input('children');
        $price = $request->input('price');
        $units = Unit::where('unit_name', $unit_name)->first();
        $booking_id = $request->input('email');
        $guest_number = (int)$adult+(int)$children;
        $currency = $this->convert_currency(preg_replace('/[^A-Za-z?!$€]/','',$price));
        $earned = (float)preg_replace('/[^\-\d.]*(\-?\d.*).*/','$1',$price);
        if(!$units){}else
        {
            $listings = Listing::where('unit_id', $units->unit_id)->where('profile_id', 'PA0003')->first();
            if(!$listings){
                $listings = Listing::where('unit_id', $units->unit_id)->first();
            }
            $id_check = Bookings::where('booking_id', 'BC-'.$booking_id)->count();

            $bookings = new Bookings;
            $bookings->booking_id = $this->new_BC_id();
            $bookings->booking_guest_name = $guest_name;
            $bookings->booking_guest_phone = $guest_phone;
            $bookings->booking_check_in = $check_in;
            $bookings->booking_check_out = $check_out;
            $bookings->booking_guest_number = $guest_number;
            $bookings->listing_id = $listings->listing_id;
            $date = new DateTime;
            $bookings->booking_received_timestamp  = $date->format('Y-m-d H:i:s');
            $bookings->booking_currency = $currency;
            $bookings->booking_earned = $earned;
            $bookings->booking_source = 2;
            $bookings->booking_status = 1;
            $bookings->booking_guest_status = 0;
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
