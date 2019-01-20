<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use League\Csv\Reader;
use App\Payment;
use App\PaymentBooking;
use App\Bookings;
use App\Listing;
use DB;
use DateTime;

class PaymentController extends Controller
{
    public function new_payout_id()
    {
        $payments = Payment::Latest()->first();
        if($payments){
            $id = substr($payments->payout_bundle,2);
            $ctr = intval($id)+1;
        }else{
            $ctr = 1;
        }
        $po_id = 'PO'.sprintf("%04s", $ctr);
        return $po_id;
    }
    
    public function convert_currency($cur){
        if($cur == 'Rp'){
            return 1;
        }else if($cur == '$'){
            return 2;
        }else if($cur == 'EUR' || $cur == '€'){
            return 3;
        }else if($cur == '$AUD'){
            return 4;
        }else{
            return 5;
        }
    }

    public function integromatPayload(Request $request)
    {
        $text = $request->input('string');
        $findme = "Column 6";
        $replacer = "tmp";
        $findme2 = "Column 7";
        $replacer2 = "tmp2";
        $findme3 = "Column 8";
        $replacer3 = "tmp3";
        $text = str_replace($findme,$replacer,$text);
        $text = str_replace($findme2,$replacer2,$text);
        $text = str_replace($findme3,$replacer3,$text);
        $data = json_decode($text);
        $input = $data[0];
        $host_name = $input->host_name;
        $total_payout = $input->Totalpayout;
        $bundle_currency = preg_replace('/[^A-Za-z?!$€]/','',$total_payout);
        $bundle_amount = (float)preg_replace('/[^\-\d.]*(\-?\d.*).*/','$1',$total_payout);
        $payout_eta = $input->ETA;
        $payout_bundle = $input->Payout_Bundle;
        $po_bundle_id = $this->new_payout_id();
        foreach ($payout_bundle as $payout) {
            $check_in = $payout->Check_In;
            $check_out = $payout->Check_Out;
            $booking_id = $payout->Booking_ID;
            if($check_out == 'Resolution Adjustment'){
                $listing_name = $check_out;
                $check_out = NULL;
                $transfer_amount = '-'.$payout->Guest_Name;
                $guest_name = NULL;
            }else{
                if(Arr::exists($payout,$replacer)){
                    if(Arr::exists($payout,$replacer2)){
                        if(Arr::exists($payout,$replacer3)){
                            if(isset($payout->tmp3)){
                                if(isset($payout->tmp2)){
                                    $transfer_amount = $payout->tmp3;
                                    $guest_name = $guest_name.'-'.$payout->Listing_name;
                                    $listing_name = $payout->Transfer_amount.' - '.$payout->tmp.' - '.$payout->tmp2;
                                }else{
                                    $transfer_amount = '-'.$payout->tmp3;
                                    $guest_name = $guest_name.'-'.$payout->Listing_name;
                                    $listing_name = $payout->Transfer_amount.' - '.$payout->tmp;
                                }
                            }else{
                                if(isset($payout->tmp2)){
                                    if(isset($payout->tmp)){
                                        $transfer_amount = $payout->tmp2;
                                        $guest_name = $guest_name.'-'.$payout->Listing_name;
                                        $listing_name = $payout->Transfer_amount.' - '.$payout->tmp;
                                    }else{
                                        $transfer_amount = '-'.$payout->tmp2;
                                        $listing_name = $payout->Listing_name.' - '.$payout->Transfer_amount; 
                                    }                       
                                }else{
                                    if(isset($payout->tmp)){
                                        $listing_name = $payout->Listing_name.' - '.$payout->Transfer_amount;
                                        $transfer_amount = $payout->tmp;
                                    }else{
                                        $listing_name = $payout->Listing_name;
                                        $transfer_amount = $payout->Transfer_amount;
                                    }
                                }    
                            }
                        }else{
                            if(isset($payout->tmp2)){
                                if(isset($payout->tmp)){
                                    $transfer_amount = $payout->tmp2;
                                    $guest_name = $guest_name.'-'.$payout->Listing_name;
                                    $listing_name = $payout->Transfer_amount.' - '.$payout->tmp;
                                }else{
                                    $transfer_amount = '-'.$payout->tmp2;
                                    $listing_name = $payout->Listing_name.' - '.$payout->Transfer_amount; 
                                }                       
                            }else{
                                if(isset($payout->tmp)){
                                    $listing_name = $payout->Listing_name.' - '.$payout->Transfer_amount;
                                    $transfer_amount = $payout->tmp;
                                }else{
                                    $listing_name = $payout->Listing_name;
                                    $transfer_amount = $payout->Transfer_amount;
                                }
                            }
                        }
                    }else{
                        if(isset($payout->tmp)){
                            if(isset($payout->Transfer_amount)){
                                $listing_name = $payout->Listing_name.' - '.$payout->Transfer_amount;
                                $transfer_amount = $payout->tmp;
                            }else{
                                $listing_name = $payout->Listing_name;
                                $transfer_amount = '-'.$payout->tmp;
                            }
                        }else{
                            $listing_name = $payout->Listing_name;
                            $transfer_amount = $payout->Transfer_amount;
                        }
                    }
                }else{
                    $listing_name = $payout->Listing_name;
                    $transfer_amount = $payout->Transfer_amount;
                }
            }
            $payout_currency = preg_replace('/[^A-Za-z?!$€]/','',$transfer_amount);
            $payout_amount = (float)preg_replace('/[^\-\d.]*(\-?\d.*).*/','$1',$transfer_amount);
            $payment = new Payment;
            $payment->payout_bundle = $po_bundle_id;
            $payment->payout_eta = $payout_eta;
            $payment->booking_id = $booking_id;
            $payment->payout_booking_checkin = $check_in;
            $payment->payout_booking_checkout = $check_out;
            $payment->payout_listing_name = $listing_name;
            $payment->payout_currency = $this->convert_currency($payout_currency);
            $payment->payout_amount = $payout_amount;
            $payment->bundle_currency = $this->convert_currency($bundle_currency);
            $payment->bundle_amount = $bundle_amount;
            $payment->payout_date = $input->ReceivedDate;
            $payment->save();
        }
    }

    /**
     * date_type = 0 --> no type
     * date_type = 1 --> payout_date    
     * date_type = 2 --> payout_eta  
     * date_type = 3 --> payout_booking_check_in 
     * date_type = 4 --> payout_booking_check_out
     * filter_type = 0 --> no filter
     * filter_type = 1 --> payout_bundle
     * filter_type = 2 --> booking_id
     * filter_type = 3 --> payout_listing_name
     * filter_type = 4 --> payout_amount
     * filter_type = 5 --> bundle_amount
     * date = the date for date_filter
     * filterer = the text for filter_type
     * sort_type = 0 -> no sort
     * sort_type = 1 -> payout_listing_name ASC
     * sort_type = 2 -> payout_listing_name DESC
    */

    public function sorterPayoutList(Request $request, $payouts)
    {
        $sort_type = $request->input('data.sort_type');
        if($sort_type == 1){
            $payouts = $payouts->sortBy('payout_listing_name');
        }else if($sort_type == 2){
            $bookings = $bookings->sortByDesc('payout_listing_name');
        }
        $ar = $payouts->values()->toArray();
        $paginated = fnpaginate::pager($ar, $request);
        return $paginated;
    }
    
    public function payoutList(Request $request)
    {
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        $date_type = $request->input('data.date_type');
        $date = $request->input('data.date');
        if($date_type == 0){
            if($filter_type == 0){
                $payouts = Payment::get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 1){
                $payouts = Payment::where('payout_bundle','like','%'.$filterer.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 2){
                $payouts = Payment::where('booking_id','like','%'.$filterer.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 3){
                $payouts = Payment::where('payout_listing_name','like','%'.$filterer.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 4){
                $payouts = Payment::where('payout_amount','like','%'.$filterer.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 5){
                $payouts = Payment::where('bundle_amount','like','%'.$filterer.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }
        }else if($date_type == 1){
            if($filter_type == 0){
                $payouts = Payment::where('payout_date','like','%'.$date.'%')->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 1){
                $payouts = Payment::where('payout_bundle','like','%'.$filterer.'%')
                ->where('payout_date','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 2){
                $payouts = Payment::where('booking_id','like','%'.$filterer.'%')
                ->where('payout_date','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 3){
                $payouts = Payment::where('payout_listing_name','like','%'.$filterer.'%')
                ->where('payout_date','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 4){
                $payouts = Payment::where('payout_amount','like','%'.$filterer.'%')
                ->where('payout_date','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 5){
                $payouts = Payment::where('bundle_amount','like','%'.$filterer.'%')
                ->where('payout_date','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }
        }else if($date_type == 2){
            if($filter_type == 0){
                $payouts = Payment::where('payout_eta','like','%'.$date.'%')->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 1){
                $payouts = Payment::where('payout_bundle','like','%'.$filterer.'%')
                ->where('payout_eta','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 2){
                $payouts = Payment::where('booking_id','like','%'.$filterer.'%')
                ->where('payout_eta','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 3){
                $payouts = Payment::where('payout_listing_name','like','%'.$filterer.'%')
                ->where('payout_eta','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 4){
                $payouts = Payment::where('payout_amount','like','%'.$filterer.'%')
                ->where('payout_eta','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 5){
                $payouts = Payment::where('bundle_amount','like','%'.$filterer.'%')
                ->where('payout_eta','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }
        }else if($date_type == 3){
            if($filter_type == 0){
                $payouts = Payment::where('payout_booking_check_in','like','%'.$date.'%')->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 1){
                $payouts = Payment::where('payout_bundle','like','%'.$filterer.'%')
                ->where('payout_booking_check_in','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 2){
                $payouts = Payment::where('booking_id','like','%'.$filterer.'%')
                ->where('payout_booking_check_in','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 3){
                $payouts = Payment::where('payout_listing_name','like','%'.$filterer.'%')
                ->where('payout_booking_check_in','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 4){
                $payouts = Payment::where('payout_amount','like','%'.$filterer.'%')
                ->where('payout_booking_check_in','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 5){
                $payouts = Payment::where('bundle_amount','like','%'.$filterer.'%')
                ->where('payout_booking_check_in','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }
        }else if($date_type == 4){
            if($filter_type == 0){
                $payouts = Payment::where('payout_booking_check_out','like','%'.$date.'%')->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 1){
                $payouts = Payment::where('payout_bundle','like','%'.$filterer.'%')
                ->where('payout_booking_check_out','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 2){
                $payouts = Payment::where('booking_id','like','%'.$filterer.'%')
                ->where('payout_booking_check_out','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 3){
                $payouts = Payment::where('payout_listing_name','like','%'.$filterer.'%')
                ->where('payout_booking_check_out','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 4){
                $payouts = Payment::where('payout_amount','like','%'.$filterer.'%')
                ->where('payout_booking_check_out','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }else if($filter_type == 5){
                $payouts = Payment::where('bundle_amount','like','%'.$filterer.'%')
                ->where('payout_booking_check_out','like','%'.$date.'%')
                ->get();
                $payouts = $this->sorterPayoutList($request,$payouts);
            }
        }
        return $payouts;
    }

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
            $booking_id = $record['booking_id'];
            $guest_name = $record['booking_guest_name'];
            $booking_status = 1;
            $ci = $record['booking_check_in'];
            $co = $record['booking_check_out'];
            $booking_earned = $record['booking_earned'];
            $booking_currency = $record['booking_currency'];
            $listing_id = $record['listing_id'];
            $bookings = Bookings::withTrashed()->where('booking_id', 'HMCJ2CPW3W')->first();
            print_r($bookings);
            if($bookings){
                return 1;
                $listing = Listing::where('listing_id', $listing_id)->first();
                $bookings->booking_id = $booking_id;
                $bookings->booking_guest_name = $guest_name;
                $bookings->booking_check_in = $ci;
                $bookings->booking_check_out = $co;
                $bookings->booking_status = $booking_status;
                $bookings->booking_currency = $booking_currency;
                $bookings->booking_earned = $booking_earned;
                if($listing){
                    $bookings->listing_id = $listing_id;
                    $bookings->save();
                }else{
                    $bookings->listing_id = 'UNREGISTERED';
                    $bookings->temp_column = $listing_id;
                    $bookings->save();
                }
            }else{
                return 2;
                $bookings = new Bookings;
                $bookings = $bookings[0];
                $listing = Listing::where('listing_id', $listing_id)->first();
                $bookings->booking_id = $booking_id;
                $bookings->booking_guest_name = $guest_name;
                $bookings->booking_check_in = $ci;
                $bookings->booking_check_out = $co;
                $bookings->booking_status = $booking_status;
                $bookings->booking_currency = $booking_currency;
                $bookings->booking_earned = $booking_earned;
                if($listing){
                    $bookings->listing_id = $listing_id;
                    $bookings->save();
                }else{
                    $bookings->listing_id = 'UNREGISTERED';
                    $bookings->temp_column = $listing_id;
                    $bookings->save();
                }
            }
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
            /*
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
            */
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
