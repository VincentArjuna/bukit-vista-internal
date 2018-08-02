<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use League\Csv\Reader;
use App\Payment;
use App\PaymentBooking;
use App\Bookings;
use App\Listing;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $payments = Payment::paginate(15);
        return $payments;
    }
    public function new_pb_id()
    {
        $ctr = PaymentBooking::Latest()->count();
        $pb_id = 'PB'.sprintf("%04s", $ctr);
        return $pb_id;
    }
    public function new_payment_id()
    {
        $ctr = Payment::Latest()->count();
        $payment_id = 'PY'.sprintf("%04s", $ctr);
        return $payment_id;
    }
    public function curency_to_int($tamp){
        if($tamp == 'IDR'){
            return 1;
        }else if ($tamp == 'USD'){
            return 2;
        }else if ($tamp == 'EUR'){
            return 3;
        }else{
            return 4;
        }
    }
    public function upload(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $name = $request->input('data.name');
        $reader = Reader::createFromPath(storage_path('Csv/'.$name), 'r');
        $reader->setHeaderOffset(0);
        $payment_id = '';
        foreach ($reader as $offset => $record) {
            /*if($record['Type'] == 'Payout')
            {
                $pb_ammount = floatval($record['Paid Out']);
                date_default_timezone_set('Asia/Kuala_Lumpur');
                $rawdate = date_create($record['Date']);
                $payment_date = date_format($rawdate, "Y-m-d");
                $payment_id = $this->new_payment_id();
                $payments = new Payment;
                $payments->payment_id = $payment_id;
                $payments->payment_date = $payment_date;
                $payments->payment_paid_out = floatval($record['Paid Out']);
                $payments->payment_account = $record['Details'];
                $payments->payment_reference = $record['Reference'];
                $payments->save();
            }else
            {
                $pbs = new PaymentBooking;
                $pbs->pb_id = $this->new_pb_id();
                if($payment_id == ''){
                    $pbs->payment_id = $request->input('data.payment_id');
                }else {
                    $pbs->payment_id = $payment_id;
                }
                $pbs->booking_id = $record['Confirmation Code'];
                $pbs->pb_amount = floatval($record['Amount']);
                $currency = $this->curency_to_int($record['Currency']);
                $pbs->pb_currency = $currency;
                $pbs->save();
            }
            */
            if($record['Type'] == 'Reservation')
            {
                $booking_id = $record['Confirmation Code'];
                $bookings = Bookings::where('booking_id', $booking_id)->get();
                if($bookings->isEmpty()){
                    $booking = new Bookings;
                    $booking_earned = floatval($record['Amount']);
                    $guest_name = $record['Guest'];
                    $currency = $this->curency_to_int($record['Currency']);
                    $tmpci = explode('/',$record['Start Date']);
                    $los = $record['Nights'];
                    $ci = $tmpci[2].'-'.$tmpci[0].'-'.$tmpci[1];
                    $co = date('Y-m-d', strtotime($ci. ' + '.$los.' days'));
                    
                    //$co = $tmpco->format('Y-m-d');
                    $tmplist = $record['Listing'];
                    $listings = Listing::where('listing_name', $tmplist)->get();
                    if($listings->isEmpty())
                    {
                        $booking->listing_id = 'L0000';
                        $booking->temp_column = $tmplist;
                    }else
                    {
                        $booking->listing_id = $listings[0]->listing_id;
                    }
                    $bstatus = 1;
                    $booking->booking_id = $booking_id;
                    $booking->booking_guest_name = $guest_name;
                    $booking->booking_check_in = $ci;
                    $booking->booking_check_out = $co;
                    $booking->booking_status = $bstatus;
                    $booking->booking_currency = $currency;
                    $booking->booking_earned = $booking_earned;
                    $booking->save();
                }else
                {
                    $booking = $bookings[0];
                    $bearned = floatval($record['Amount']);
                    $dbearned = $booking->booking_earned;
                    $bearned = $bearned+$dbearned;
                    $booking->booking_earned = $bearned;
                    $booking->save();
                }
            }
        }
        return 'Succeed';
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
