<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;
use League\Csv\Writer;
use League\Csv\CannotInsertRecord;
use App\Bookings;
use App\Listing;
use App\Unit;
use App\Properties;
use App\fnPaginate;
use App\Profiles;
use App\Areas;
use App\BookingEmployee;
use DateTime;

class ArrivalListsController extends Controller
{
    public function showArrival(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $ar = [];
        $date_type = $request->input('data.date_type');
        $date = $request->input('data.date');
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        $area = $request->input('data.area');
        $properties = Properties::where('area_id', $area)->get();
        foreach($properties as $property){
            $units = Unit::where('property_id', $property->property_id)->get();
            if ($filter_type == 2)
            {
                $matcher_unit = ['property_id' => $property->property_id,
                                 'unit_name' => $filterer];
                $units = Unit::where($matcher_unit);
            }
            foreach($units as $unit){
                $listings = Listing::where('unit_id', $unit->unit_id)->get();
                if($filter_type == 3){
                    $profile_id = Profiles::where('profile_name', $filterer)->first()->profile_id;
                    $matcher_profile = ['unit_id'=>$unit->unit_id,
                                        'profile_id'=>$profile_id];
                    $listings = Listing::where($matcher_profile)->get(); 
                }
                foreach ($listings as $listing){
                    $matcher_booking =[];
                    $bookings = Bookings::where('listing_id',$listing->listing_id)->get();
                    if($filter_type == 1){
                        if($date_type == 0){
                            $matcher_booking = ['listing_id'=>$listing->listing_id,
                                                'booking_guest_name'=>$filterer,
                                                'booking_check_in'=>$date];
                        }else if ($date_type == 1)
                        {
                            $matcher_booking = ['listing_id'=>$listing->listing_id,
                                                'booking_guest_name'=>$filterer,
                                                'booking_check_out'=>$date];
                        }
                        $bookings = Bookings::where($matcher_booking)->get();   
                    }else
                    {
                        if($date_type == 0){
                            $matcher_booking = ['listing_id'=>$listing->listing_id,
                                                'booking_check_in'=>$date];
                        }else if ($date_type == 1)
                        {
                            $matcher_booking = ['listing_id'=>$listing->listing_id,
                                                'booking_check_out'=>$date];
                        }
                        $bookings = Bookings::where($matcher_booking)->get(); 
                    }
                    foreach ($bookings as $booking){
                        $profiles = Profiles::where('profile_id', $listing->profile_id)->get();
                        $profile = $profiles[0];
                        $bes = BookingEmployee::where('booking_id', $booking->booking_id)->get();
                        $merged = collect();
                        $merged = $merged->merge($booking);
                        $merged = $merged->merge($unit);
                        $merged = $merged->merge($profile);
                        $data['booking_los'] = $this->LoS($booking->booking_id);
                        $merged = $merged->merge($data);
                        foreach($bes as $bos)
                        {
                            $merged = $merged->merge($bos);
                        }
                        array_push($ar,$merged);
                    }
                }                
            }
        }
        $paginated = fnpaginate::pager($ar, $request);
        return $paginated;
    }
    public function LoS($id)
    {
        $bookings = Bookings::where('booking_id',$id)->first();
        $check_in = $bookings->booking_check_in;
        $check_out = $bookings->booking_check_out;
        $diff = abs(strtotime($check_out) - strtotime($check_in));
        $days = floor($diff / (60*60*24));
        $loss = $days;
        return $loss;
    }
    
    public function csvWriter($tgl)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $ar = [];
        $bookings = Bookings::where('booking_check_in', $tgl)->get();
        foreach($bookings as $booking){
            $listings = Listing::where('listing_id', $booking->listing_id)->first();
            $units = Unit::where('unit_id', $listings->unit_id)->first();
            $profiles = Profiles::where('profile_id', $listings->profile_id)->first();
            $merged = collect();
            $merged = $merged->merge($booking);
            $merged = $merged->merge($units);
            $merged = $merged->merge($profiles);
            $data['booking_los'] = $this->LoS($booking->booking_id);
            $merged = $merged->merge($data);
            array_push($ar, $merged);
        }
        try {
            $name = 'CHECK_IN-'.$tgl.'.csv';
            $wr = Writer::createFromPath(storage_path('Csv/'.$name), 'w+');
            $wr->insertOne(['Guest Name',
                            'Check In',
                            'Check Out',
                            'Unit Name',
                            'Profile']);
            foreach ($ar as $arr)
            {
                $prname = Profiles::where('profile_id', $arr['profile_id'])->first()->profile_name;
                $tmp = [$arr['booking_guest_name'],
                        $arr['booking_check_in'],
                        $arr['booking_check_out'],
                        $arr['unit_name'],
                        $prname
                ];
                $wr->insertOne($tmp);
            }
        } catch (CannotInsertRecord $e) {
            $e->getRecords(); //returns [1, 2, 3]
        }
        return response()->download(storage_path('Csv/'.$name));
    }
}
