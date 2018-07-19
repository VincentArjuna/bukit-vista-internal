<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Unit;
use DateTime;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $units = Unit::latest()->paginate(20);
        return $units;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $rawonboard = date_create($request->input('data.unit_onboard_date'));
        $onboard_date = date_format($rawonboard,"Y-m-d");
        $units = new Listing;
        $units->unit_id = $request->input('data.unit_id');
        $units->unit_name = $request->input('data.unit_name');
        $units->unit_onboard_date = $onboard_date;
        $units->unit_base_price = $request->input('data.unit_base_price');
        $units->unit_currency = $request->input('data.unit_currency');
        $units->unit_capacity = $request->input('data.unit_capacity');
        $units->unit_number_room = $request->input('data.unit_number_room');
        $units->unit_swimming_pool = $request->input('data.unit_swimming_pool');
        $units->unit_percentage_owner = $request->input('data.unit_percentage_owner');
        $units->unit_percentage_bv = $request->input('data.unit_percentage_bv');
        $units->property_id = $request->input('data.property_id');
        $units->save();
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showId($id)
    {
        $units = Unit::where('unit_id',$id)->get();
        return $units;
    }
    public function showProperty($id){
        $units = Unit::where('property_id',$id)->paginate(20);
        return $units;
    }
    public function showDeleted()
    {
        $units = Unit::onlyTrashed()->latest()->paginate(20);
        return $units;
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
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $rawonboard = date_create($request->input('data.unit_onboard_date'));
        $onboard_date = date_format($rawonboard,"Y-m-d");
        $units = Unit::where('unit_id', $id)->first();
        $units->unit_name = $request->input('data.unit_name');
        $units->unit_onboard_date = $onboard_date;
        $units->unit_base_price = $request->input('data.unit_base_price');
        $units->unit_currency = $request->input('data.unit_currency');
        $units->unit_capacity = $request->input('data.unit_capacity');
        $units->unit_number_room = $request->input('data.unit_number_room');
        $units->unit_swimming_pool = $request->input('data.unit_swimming_pool');
        $units->unit_percentage_owner = $request->input('data.unit_percentage_owner');
        $units->unit_percentage_bv = $request->input('data.unit_percentage_bv');
        $units->property_id = $request->input('data.property_id');
        $units->save();
        return 'Data Updated';
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
        $units = Unit::where('unit_id', $id)->first();
        $units->delete();
        return 'Data Deleted';
    }
    public function restore($id)
    {
        Unit::onlyTrashed()->where('unit_id', $id)->restore();
        return 'Data Restored';
    }
}
