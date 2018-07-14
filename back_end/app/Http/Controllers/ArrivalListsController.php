<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Support\Collection;
use App\Bookings;
use App\Listing;
use App\Unit;
use App\Properties;
use App\fnPaginate;
use DateTime;

class ArrivalListsController extends Controller
{
    public function showArrival($tgl, $area)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $rawcheckin = date_create($tgl);
        $check_in = date_format($rawcheckin,"Y-m-d");
        $ar = [];
        $properties = Properties::where('area_id', $area)->get();
        foreach($properties as $property){
            $units = Unit::where('property_id', $property->property_id)->get();
            foreach($units as $unit){
                $listings = Listing::where('unit_id', $unit->unit_id)->get();
                foreach ($listings as $listing){
                    $bookings = Bookings::where('listing_id',$listing->listing_id)->where('booking_check_in', $check_in)->get();
                    foreach ($bookings as $booking){
                        $collection = collect($booking);
                        $merged = $collection->merge($unit);
                        $collector = collect($merged);
                    }
                }                
            }
        }
        if(isset($collector) == false){
            return 'a';
        } else
        {
            return fnPaginate::pager($collector, $perPage = 20, $page = null, $options = []);
        }
    } 
}
