<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Properties;
use DateTime;

class PropertiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $properties = Properties::Latest()->paginate(20);
        return $properties;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $properties = new Properties;
        $properties->property_id = $request->input('data.property_id');
        $properties->property_name = $request->input('data.property_name');
        $properties->property_type = $request->input('data.property_type');
        $properties->property_status = $request->input('data.property_status');
        $properties->property_package = $request->input('data.property_package');
        $properties->property_design = $request->input('data.property_design');
        $properties->property_proximity = $request->input('data.property_proximity');
        $properties->property_life_support = $request->input('data.property_life_support');
        $properties->property_service = $request->input('data.property_service');
        $properties->property_owner_group_link = $request->input('data.property_owner_group_link');
        $properties->area_id = $request->input('data.area_id');
        $properties->employee_id = $request->input('data.employee_id');
        $properties->updated_at = null;
        $properties-save();
        return 'Data added';
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
        $properties = Properties::where('property_id',$id)->get();
        return $properties;
    }
    public function showName($id)
    {
        $properties = Properties::where('property_name',$id)->get();
        return $properties;
    }
    public function showType($id)
    {
        $properties = Properties::where('property_type',$id)->get();
        return $properties;
    }
    public function showStatus($id)
    {
        $properties = Properties::where('property_status',$id)->get();
        return $properties;
    }
    public function showPackage($id)
    {
        $properties = Properties::where('property_package',$id)->get();
        return $properties;
    }
    public function showDesign($id)
    {
        $properties = Properties::where('property_design',$id)->get();
        return $properties;
    }
    public function showProximity($id)
    {
        $properties = Properties::where('property_proximity',$id)->get();
        return $properties;
    }
    public function showLS($id)
    {
        $properties = Properties::where('property_life_support',$id)->get();
        return $properties;
    }
    public function showService($id)
    {
        $properties = Properties::where('property_service',$id)->get();
        return $properties;
    }
    public function showArea($id)
    {
        $properties = Properties::where('area_id',$id)->get();
        return $properties;
    }
    public function showEmployee($id)
    {
        $properties = Properties::where('employee_id',$id)->get();
        return $properties;
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
        $properties = Properties::find($id)->first();
        $properties->property_name = $request->input('data.property_name');
        $properties->property_type = $request->input('data.property_type');
        $properties->property_status = $request->input('data.property_status');
        $properties->property_package = $request->input('data.property_package');
        $properties->property_design = $request->input('data.property_design');
        $properties->property_proximity = $request->input('data.property_proximity');
        $properties->property_life_support = $request->input('data.property_life_support');
        $properties->property_service = $request->input('data.property_service');
        $properties->property_owner_group_link = $request->input('data.property_owner_group_link');
        $properties->area_id = $request->input('data.area_id');
        $properties->employee_id = $request->input('data.employee_id');
        $properties->updated_at = null;
        $properties->save();
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
        $properties = Properties::find($id)->first();
        $properties->updated_at = new DateTime();
        $properties->deleted_at = new DateTime();
        $properties->save();
        return 'Data Deleted';
    }
}
