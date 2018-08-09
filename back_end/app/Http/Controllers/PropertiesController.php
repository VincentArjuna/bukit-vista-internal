<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Properties;
use App\Areas;
use App\employee;
use App\fnPaginate;
use App\Prop_Type;
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
        date_default_timezone_set('Asia/Kuala_Lumpur');
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
    public function propertyList(Request $request)
    {
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        if ($filter_type == 0)
        {
            $properties = Properties::paginate(10);
            return $properties;
        }else if ($filter_type == 1)
        {
            $properties = Properties::where('property_id', 'like', '%'.$filterer.'%')->paginate(10);
            return $properties;
        }else if ($filter_type == 2)
        {
            $properties = Properties::where('property_name', 'like', '%'.$filterer.'%')->paginate(10);
            return $properties;
        }else if ($filter_type == 3)
        {
            $areas = Areas::where('area_name', 'like', '%'.$filterer.'%')->get();
            $collect = collect();
            foreach ($areas as $area)
            {
                $properties = Properties::where('area_id', $area->area_id)->get();
                $collect = $collect->merge($properties);
            }
            $paginated = fnPaginate::pager($collect, $request);
            return $paginated;
        }else if ($filter_type == 4){
            $prop_types = Prop_Type::where('type_desc', 'like', '%'.$filtere.'%')->get();
            $collect = collect();
            foreach ($prop_types as $prop_type)
            {
                $properties = Properties::where('property_type', $prop_type->property_type)->get();
                $collect = $collect->merge($properties);
            }
            $paginated = fnPaginate::pager($collect, $request);
            return $paginated;
        }else if ($filter_type == 5)
        {
            $employees = employee::where('employee_name', 'like', '%'.$filterer.'%')->get();
            $collect = collect();
            foreach($employees as $employee)
            {
                $properties = Properties::where('employee_id', $employee->employee_id)->get();
                $collect = $collect->merge($properties);
            }
            $paginated = fnPaginate::pager($collect, $request);
            return $paginated;
        }
    }
    public function showDeleted()
    {
        $properties = Properties::onlyTrashed()->latest()->paginate(20);
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
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $properties = Properties::where('property_id', $id)->first();
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
        $properties = Properties::where('property_id', $id)->first();
        $properties->delete();
        return 'Data Deleted';
    }
    public function restore($id)
    {
        Properties::onlyTrashed()->where('property_id', $id)->restore();
        return 'Data restored';
    }
}
