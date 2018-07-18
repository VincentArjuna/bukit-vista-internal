<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Support\Collection;
use Illuminate\Pagination\Paginator;
use App\Bookings;
use App\Listing;
use App\Unit;
use App\Properties;
use App\fnPaginate;
use DateTime;

class ArrivalListsController extends Controller
{
    public function showArrival($area, $tgl)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $rawcheckin = date_create($tgl);
        $check_in = date_format($rawcheckin,"Y-m-d");
        $ar = [];
        $arr = [];
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
                        array_push($ar,$merged);
                    }
                }                
            }
        }
        $paginated = new Paginator($ar, 20);
        $paginated->setPath('http://localhost:8000/api/booking/area/'.$area.'//date/'.$tgl);
        return $paginated;
    } 
}
