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
use DateTime;

class ArrivalListsController extends Controller
{
    public function showArrival($area, $tgl, Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $ar = [];
        $arr = [];
        $properties = Properties::where('area_id', $area)->get();
        foreach($properties as $property){
            $units = Unit::where('property_id', $property->property_id)->get();
            foreach($units as $unit){
                $listings = Listing::where('unit_id', $unit->unit_id)->get();
                foreach ($listings as $listing){
                    $bookings = Bookings::where('listing_id',$listing->listing_id)->where('booking_check_in', $tgl)->get();
                    foreach ($bookings as $booking){
                        $profiles = Profiles::where('profile_id', $listing->profile_id)->get();
                        $profile = $profiles[0];
                        $merged = collect();
                        $merged = $merged->merge($booking);
                        $merged = $merged->merge($unit);
                        $merged = $merged->merge($profile);
                        $data['booking_los'] = $this->LoS($booking->booking_id);
                        $merged = $merged->merge($data);
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
    
    public function csvWriter($area, $tgl, Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $ar = [];
        $arr = [];
        $properties = Properties::where('area_id', $area)->get();
        foreach($properties as $property){
            $units = Unit::where('property_id', $property->property_id)->get();
            foreach($units as $unit){
                $listings = Listing::where('unit_id', $unit->unit_id)->get();
                foreach ($listings as $listing){
                    $bookings = Bookings::where('listing_id',$listing->listing_id)->where('booking_check_in', $tgl)->get();
                    foreach ($bookings as $booking){
                        $profiles = Profiles::where('profile_id', $listing->profile_id)->get();
                        $profile = $profiles[0];
                        $merged = collect();
                        $merged = $merged->merge($booking);
                        $merged = $merged->merge($unit);
                        $merged = $merged->merge($profile);
                        $data['booking_los'] = $this->LoS($booking->booking_id);
                        $merged = $merged->merge($data);
                        array_push($ar,$merged);
                    }
                }                
            }
        }
        try {
            $name = Areas::where('area_id',$area)->first()->area_name;
            $name = $name.'_'.$tgl.'.csv';
            $wr = Writer::createFromPath(storage_path('Csv/'.$name), 'w+');
            $wr->insertOne(['Booking Id',
                            'Guest Name',
                            'Check In',
                            'Check Out',
                            'Conversation Url',
                            'Unit Name',
                            'Profile',
                            'Length Of Stay']);
            foreach ($ar as $arr)
            {
                $prname = Profiles::where('profile_id', $arr['profile_id'])->first()->profile_name;
                $tmp = [$arr['booking_id'],
                        $arr['booking_guest_name'],
                        $arr['booking_check_in'],
                        $arr['booking_check_out'],
                        $arr['booking_conversation_url'],
                        $arr['unit_name'],
                        $prname,
                        $arr['booking_los']
                ];
                $wr->insertOne($tmp);
            }
        } catch (CannotInsertRecord $e) {
            $e->getRecords(); //returns [1, 2, 3]
        }
        return response()->download(storage_path('Csv/'.$name));
    }
}
