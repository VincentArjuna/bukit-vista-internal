<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use App\Unit;
use App\Profiles;
use App\fnPaginate;
use App\employee;
use DateTime;

class ListingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }
    public function integromat($id)
    {
        $listings = Listing::where('listing_id',$id)->first();
        $profiles = Profiles::where('profile_id', $listings->profile_id)->first();
        $units = Unit::where('unit_id', $listings->unit_id)->first();
        $merged = collect();
        $merged = $merged->merge($profiles);
        $merged = $merged->merge($units);
        return $merged;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $listings = new Listing;
        $listings->listing_id = $request->input('data.listing_id');
        $listings->listing_name = $request->input('data.listing_name');
        $listings->listing_onboard_date = $request->input('data.listing_onboard_date');
        $listings->listing_status = $request->input('data.listing_status');
        $listings->listing_instant_book = $request->input('data.listing_instant_book');
        $listings->listing_account_owner = $request->input('data.listing_account_owner');
        $listings->listing_account_bv = $request->input('data.listing_account_bv');
        $listings->listing_remark = $request->input('data.listing_remark');
        $listings->unit_id = $request->input('data.unit_id');
        $listings->profile_id = $request->input('data.profile_id');
        $listings->employee_id = $request->input('data.employee_id');
        $listings->save();
        return 'New Data Added';
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
     * Display the specified listing.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function listingList(Request $request)
    {
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        $per_page = $request->input('data.per_page');
        if($filter_type == 0)
        {
            $listings = Listing::Latest()->paginate($per_page);
            return $listings;
        }else if($filter_type == 1)
        {
            $listings = Listing::where('listing_id', 'like', '%'.$filterer.'%')->paginate($per_page);
            return $listings;
        }else if($filter_type == 2)
        {
            $listings = Listing::where('listing_name', 'like', '%'.$filterer.'%')->paginate($per_page);
            return $listings;
        }else if($filter_type == 3)
        {
            $listings = Listing::where('unit_id', 'like', '%'.$filterer.'%')->paginate($per_page);
            return $listings;
        }else if($filter_type == 4)
        {
            $units = Unit::where('unit_name', 'like', '%'.$filterer.'%')->get();
            $collect = collect();
            foreach($units as $unit)
            {
                $listings = Listing::where('unit_id', $unit->unit_id)->get();
                $collect = $collect->merge($listings);
            }
            $paginated = fnPaginate::pager($collect, $request);
            return $paginated;
        }else if($filter_type == 5)
        {
            $profiles = Profiles::where('profile_name', 'like', '%'.$filterer.'%')->get();
            $collect = collect();
            foreach($profiles as $profile)
            {
                $listings = Listing::where('profile_id', $profile->profile_id)->get();
                $collect = $collect->merge($listings);
            }
            $paginated = fnPaginate::pager($collect, $request);
            return $paginated;
        }else if($filter_type == 6)
        {
            $employees = employee::where('employee_name', 'like', '%'.$filterer.'%')->get();
            $collect = collect();
            foreach($employees as $employee)
            {
                $listings = Listing::where('employee_id', $employee->employee_id)->get();
                $collect = $collect->merge($listings);
            }
            $paginated = fnPaginate::pager($collect, $request);
            return $paginated;
        }else if($filter_type == 7)
        {
            $listings = Listing::where('listing_onboard_date', 'like', '%'.$filterer.'%')->paginate($per_page);
            return $listings;
        }
    }
    public function showDeleted()
    {
        $listings = Listing::onlyTrashed()->latest()->paginate(20);
        return $listings;
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
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $rawonboard = date_create($request->input('data.onboard_date'));
        $onboard_date = date_format($rawonboard,"Y-m-d");
        $listings = Listing::where('listing_id', $id)->first();
        $listings->listing_name = $request->input('data.listing_name');
        $listings->listing_onboard_date = $onboard_date;
        $listings->listing_status = $request->input('data.listing_status');
        $listings->listing_instant_book = $request->input('data.listing_instant_book');
        $listings->listing_account_owner = $request->input('data.listing_account_owner');
        $listings->listing_account_bv = $request->input('data.listing_account_bv');
        $listings->listing_remark = $request->input('data.listing_remark');
        $listings->unit_id = $request->input('data.unit_id');
        $listings->profile_id = $request->input('data.profile_id');
        $listings->employee_id = $request->input('data.employee_id');
        $listings->save();
        return "Data Updated";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function softDelete($id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $listings = Listing::where('listing_id', $id)->first();
        $listings->delete();
        return 'Data Deleted';
    }
    public function restore($id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        Listing::onlyTrashed()->where('listing_id', $id)->restore();
        return 'Data Restored';
    }
}
