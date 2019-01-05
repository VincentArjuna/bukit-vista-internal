<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Unit;
use App\Properties;
use App\fnPaginate;
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

    }
    public function new_unit_id()
    {
        $ctr = Unit::latest()->count();
        $log_id = 'UN'.sprintf("%04s", $ctr);
        return $log_id;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        try {
            $units = new Unit;
            $units->unit_id = $this->new_unit_id();
            $units->unit_name = $request->input('data.unit_name');
            $units->unit_capacity = $request->input('data.unit_capacity');
            $units->unit_number_room = $request->input('data.unit_number_room');
            $units->unit_swimming_pool = $request->input('data.unit_swimming_pool');
            $units->property_id = $request->input('data.property_id');
            $units->save();
            return 'TRUE';   
        } catch (Exception $e) {
            report($e);
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

    public function sorterUnitList(Request $request, $units)
    {
        $sort_type = $request->input('data.sort_type');
        if($sort_type == 1){
            $units = $units->sortBy('unit_capacity');
        }else if($sort_type == 2){
            $units = $units->sortByDesc('unit_capacity');
        }else if($sort_type == 3){
            $units = $units->sortBy('unit_number_room');
        }else if($sort_type == 4){
            $units = $units->sortByDesc('unit_number_room');
        }else if($sort_type == 5){
            $units = $units->sortBy('unit_swimming_pool');
        }else if($sort_type == 6){
            $units = $units->sortByDesc('unit_swimming_pool');
        }
        $ar = $units->values()->toArray();
        $paginated = fnpaginate::pager($ar, $request);
        return $paginated;
    }

    /**
     * filter_type = 0 --> default
     * filter_type = 1 --> unit_id
     * filter_type = 2 --> unit_name
     * filter_type = 3 --> property_id
     * filter_type = 4 --> property_name
     * filterer = text for filter_type
     * per_page = data amount per page
     * sort_type = 0 --> default
     * sort_type = 1 --> unit_capacity ASC
     * sort_type = 2 --> unit_capacity DESC
     * sort_type = 3 --> unit_number_room ASC
     * sort_type = 4 --> unit_number_room DESC
     * sort_type = 5 --> unit_swimming_pool ASC
     * sort_type = 6 --> unit_swimming_pool DESC
     */
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function unitList(Request $request)
    {
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        $per_page = $request->input('data.per_page');
        if($filter_type == 0)
        {
            $units = Unit::paginate($per_page);
            return $units;
        }else if ($filter_type == 1)
        {
            $units = Unit::where('unit_id', 'like', '%'.$filterer.'%')->get();
            $units = $this->sorterUnitList($request, $units);
        }else if ($filter_type == 2)
        {
            $units = Unit::where('unit_name', 'like', '%'.$filterer.'%')->get();
            $units = $this->sorterUnitList($request, $units);
        }else if ($filter_type == 3)
        {
            $units = Unit::where('property_id', 'like', '%'.$filterer.'%')->get();
            $units = $this->sorterUnitList($request, $units);
        }else if ($filter_type == 4)
        {
            $properties = Properties::where('property_name', 'like', '%'.$filterer.'%')->get();
            $collect = collect();
            foreach ($properties as $property)
            {
                $units = Unit::where('property_id', $property->property_id)->get();
                $collect = $collect->merge($units);
            }
            $units = $this->sorterUnitList($request, $collect);
        }else if ($filter_type == 5)
        {
            $units = Unit::where('unit_onboard_date', 'like', '%'.$filterer.'%')->get();
            $units = $this->sorterUnitList($request, $units);
        }
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
    public function update(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $id = $request->input('data.unit_id');
        $units = Unit::where('unit_id', $id)->first();
        if($units){
            $units->unit_name = $request->input('data.unit_name');
            $units->unit_capacity = $request->input('data.unit_capacity');
            $units->unit_number_room = $request->input('data.unit_number_room');
            $units->unit_swimming_pool = $request->input('data.unit_swimming_pool');
            $units->property_id = $request->input('data.property_id');
            $units->save();
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
