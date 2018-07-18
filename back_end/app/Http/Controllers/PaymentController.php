<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use League\Csv\Reader;
use App\Payment;
use App\PaymentBooking;

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
        $name = $request->input('data.name');
        $reader = Reader::createFromPath(storage_path('Csv/'.$name), 'r');
        $reader->setHeaderOffset(0);
        $payment_id = '';
        foreach ($reader as $offset => $record) {
            if($record['Type'] == 'Payout')
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
