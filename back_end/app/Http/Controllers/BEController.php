<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BookingEmployee;

class BEController extends Controller
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    public function new_be_id()
    {
        $ctr = BookingEmployee::Latest()->count();
        $be_id = 'BE'.sprintf("%04s", $ctr);
        return $be_id;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $booking_id = $request->input('data.booking_id');
        $employee_id = $request->input('data.employee_id');
        $be_role = $request->input('data.be_role');
        $bes = BookingEmployee::where('booking_id', $booking_id)->get();
        $ctr = $bes->count();
        if($ctr == 0)
        {
            $bes = new BookingEmployee;
            $bes->be_id = $this->new_be_id();
            $bes->booking_id = $booking_id;
            $bes->employee_id = $employee_id;
            $bes->be_role = $be_role;
            $bes->save();
        }else if($ctr == 1)
        {
            $bes = BookingEmployee::where('booking_id', $booking_id)->first();
            $bes_role = $bes->be_role;
            if($bes_role == $be_role)
            {
                $bes->employee_id = $employee_id;
                $bes->save();
            }else
            {
                $bes = new BookingEmployee;
                $bes->be_id = $this->new_be_id();
                $bes->booking_id = $booking_id;
                $bes->employee_id = $employee_id;
                $bes->be_role = $be_role;
                $bes->save();
            }
        }else if ($ctr == 2)
        {
            $matcher = ['booking_id'=>$booking_id, 'be_role'=>$be_role];
            $bes = BookingEmployee::where($matcher)->first();
            $bes->employee_id = $employee_id;
            $bes->save();
        }
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
