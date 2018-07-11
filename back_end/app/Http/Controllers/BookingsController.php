<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        $check_in = date_format($rawcheckin,"Y-m-d H:i:s");
        $check_out = date_format($rawcheckout,"Y-m-d H:i:s");
        $bookings = new Bookings;
        $bookings->booking_id = $request->input('data.booking_id');
        $bookings->booking_guest_name = $request->input('data.booking_guest_name');
        $bookings->booking_status = $request->input('data.booking_status');
        $bookings->booking_check_in = $check_in;
        $bookings->booking_check_out = $check_out;
        $bookings->booking_guest_number = $request->input('data.booking_guest_number');
        $bookings->booking_guest_phone = $request->input('data.booking_guest_phone');
        //$bookings->boo
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
