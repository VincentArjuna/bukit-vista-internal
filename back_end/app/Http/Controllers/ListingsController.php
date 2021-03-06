<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use App\Unit;
use App\Properties;
use App\Profiles;
use App\fnPaginate;
use App\employee;
use App\Bookings;
use DateTime;
use DB;

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
        $id = $request->input('data.listing_id');
        $listings = Listing::where('listing_id', $id)->first();
        if (!$listings){
            $rawpublish = date_create($request->input('data.publish_date'));
            $publish_date = date_format($rawpublish,"Y-m-d");
            $listings = new Listing;
            $listings->listing_id = $id;
            $listings->listing_name = $request->input('data.listing_name');
            $listings->listing_publish_date = $publish_date;
            $listings->listing_status = $request->input('data.listing_status');
            $listings->listing_instant_book = $request->input('data.listing_instant_book');
            $listings->listing_account_owner = $request->input('data.listing_account_owner');
            $listings->listing_account_bv = $request->input('data.listing_account_bv');
            $listings->listing_remark = $request->input('data.listing_remark');
            $listings->unit_id = $request->input('data.unit_id');
            $listings->profile_id = $request->input('data.profile_id');
            $listings->employee_id = $request->input('data.employee_id');
            $listings->save();
            $bookings = Bookings::where('temp_column', $id)->update(['listing_id' => $id, 'temp_column' => NULL]);
            return 'TRUE';
        }else {
            return 'FALSE';
        }
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

    public function showId($id)
    {
        $listings = Listing::where('listing_id', 'like', '%'.$id.'%');
        return $listings;
    }

    public function sorterlistingList(Request $request, $listings)
    {
        $sort_type = $request->input('data.sort_type');
        if($sort_type == 1){
            $listings = $listings->sortBy('created_at');
        }else if($sort_type == 2){
            $listings = $listings->sortByDesc('created_at');
        }else if($sort_type == 3){
            $listings = $listings->sortBy('unit_name');
        }else if($sort_type == 4){
            $listings = $listings->sortByDesc('unit_name');
        }
        $ar = $listings->values()->toArray();
        $paginated = fnpaginate::pager($ar, $request);
        return $paginated;
    }

    /**
     * filter_type = 0 --> default
     * filter_type = 1 --> listing_id
     * filter_type = 2 --> listing_name
     * filter_type = 3 --> unit_id
     * filter_type = 4 --> unit_name
     * filter_type = 5 --> profile_name
     * filter_type = 6 --> employee_name
     * filter_type = 7 --> listing_onboard_date
     * filter_type = 8 --> listing_account_owner      
     * filter_type = 9 --> listing_account_bv
     * filter_type = 10 --> listing_remark
     * filter_type = 11 --> area_id
     * filterer = text for filter_type     
     * per_page = data amount per page
     * sort_type = 0 --> default
     * sort_type = 1 --> created_at ASC
     * sort_type = 2 --> created_at DESC
     * sort_type = 3 --> unit_name ASC
     * sort_type = 4 --> unit_name DESC
     */

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
        $searcher = ['listing.*',
                    DB::raw('(select unit_name from unit u where u.unit_id=listing.unit_id) 
                            as unit_name'),
                    DB::raw('(select profile_name from profile p where p.profile_id=listing.profile_id)
                            as profile_name')];
        if($filter_type == 0)
        {
            $listings = DB::table('listing')->select($searcher)->latest()
            ->get();
            $listings = $this->sorterlistingList($request, $listings);
        }else if ($filter_type == 1)
        {
            $listings = DB::table('listing')->select($searcher)
            ->where('listing_id', 'like', '%'.$filterer.'%')->latest()
            ->get();
            $listings = $this->sorterlistingList($request, $listings);
        }else if ($filter_type == 2)
        {
            $listings = DB::table('listing')->select($searcher)
            ->where('listing_name', 'like', '%'.$filterer.'%')->latest()
            ->get();
            $listings = $this->sorterlistingList($request, $listings);
        }else if ($filter_type == 3)
        {
            $listings = DB::table('listing')->select($searcher)
            ->where('unit_id', 'like', '%'.$filterer.'%')->latest()
            ->get();
            $listings = $this->sorterlistingList($request, $listings);
        }else if($filter_type == 4)
        {
            $units = Unit::where('unit_name', 'like', '%'.$filterer.'%')->latest()->get();
            $collect = collect();
            foreach($units as $unit)
            {
                $listings = DB::table('listing')->select($searcher)
                ->where('unit_id', $unit->unit_id)->get();
                $collect = $collect->merge($listings);
            }
            $listings = $this->sorterlistingList($request, $collect);            
        }else if($filter_type == 5)
        {
            $profiles = Profiles::where('profile_name', 'like', '%'.$filterer.'%')->latest()->get();
            $collect = collect();
            foreach($profiles as $profile)
            {
                $listings = DB::table('listing')->select($searcher)
                ->where('profile_id', $profiles->profile_id)->get();
                $collect = $collect->merge($listings);
            }
            $listings = $this->sorterlistingList($request, $collect);            
        }else if($filter_type == 6)
        {
            $employees = employee::where('employee_name', 'like', '%'.$filterer.'%')->latest()->get();
            $collect = collect();
            foreach($employees as $employee)
            {
                $listings = DB::table('listing')->select($searcher)
                ->where('employee_id', $employee->employee_id)->get();
                $collect = $collect->merge($listings);
            }
            $listings = $this->sorterlistingList($request, $collect);            
        }else if($filter_type == 7)
        {
            $listings = DB::table('listing')->select($searcher)
            ->where('listing_onboard_date', 'like', '%'.$filterer.'%')->latest()
            ->get();
            $listings = $this->sorterlistingList($request, $listings);
        }else if($filter_type == 8)
        {
            $listings = DB::table('listing')->select($searcher)
            ->where('listing_account_owner', 'like', '%'.$filterer.'%')->latest()
            ->get();
            $listings = $this->sorterlistingList($request, $listings);
        }else if($filter_type == 9)
        {
            $listings = DB::table('listing')->select($searcher)
            ->where('listing_account_bv', 'like', '%'.$filterer.'%')->latest()
            ->get();
            $listings = $this->sorterlistingList($request, $listings);
        }else if ($filter_type == 10)
        {
            $listings = DB::table('listing')->select($searcher)
            ->where('listing_remark', $filterer)->latest()
            ->get();
            $listings = $this->sorterlistingList($request, $listings);
        }else if ($filter_type == 11)
        {
            $properties = Properties::where('area_id', $filterer)->get();
            $collect = collect();
            foreach ($properties as $property)
            {
                $units = Unit::where('property_id', $property->property_id)->get();
                foreach ($units as $unit)
                {
                    $listings = DB::table('listing')->select($searcher)
                    ->where('unit_id', $unit->unit_id)->latest()
                    ->get();
                    $collect = $collect->merge($listings);
                }
            }
            $listings = $this->sorterlistingList($request, $collect);            
        }
        return $listings;
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
    public function update(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $rawpublish = date_create($request->input('data.publish_date'));
        $publish_date = date_format($rawpublish,"Y-m-d");
        $id = $request->input('data.listing_id');
        $listings = Listing::where('listing_id', $id)->first();
        if($listings){
            $listings->listing_name = $request->input('data.listing_name');
            $listings->listing_publish_date = $publish_date;
            $listings->listing_status = $request->input('data.listing_status');
            $listings->listing_instant_book = $request->input('data.listing_instant_book');
            $listings->listing_account_owner = $request->input('data.listing_account_owner');
            $listings->listing_account_bv = $request->input('data.listing_account_bv');
            $listings->listing_remark = $request->input('data.listing_remark');
            $listings->unit_id = $request->input('data.unit_id');
            $listings->profile_id = $request->input('data.profile_id');
            $listings->employee_id = $request->input('data.employee_id');
            $listings->save();
            return 'TRUE';
        }else {
            return 'FALSE';
        }
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
