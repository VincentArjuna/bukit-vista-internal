<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PaymentBooking;
use App\Listing;
use App\Bookings;
use Illuminate\Pagination\Paginator;

class PBController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pbs = PaymentBooking::paginate(20);
        return $pbs;
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
    public function showPayment($id)
    {
        $pbs = PaymentBooking::where('payment_id',$id)->paginate(20);
        return $pbs;
    }
    public function showProfile($id)
    {
        $ar = [];
        $listings = Listing::where('profile_id', $id)->get();
            foreach ($listings as $listing){
                $bookings = Bookings::where('listing_id',$listing->listing_id)->get();
                foreach ($bookings as $booking){
                    $pbs = PaymentBooking::where('booking_id', $booking->booking_id)->get();
                    foreach($pbs as $pb){
                        array_push($ar,$pb);
                    }
                }
            }
        $paginated = new Paginator($ar, 20);
        $paginated->setPath('http://localhost:8000/api/pb/profile/'.$id);
        return $paginated;
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
