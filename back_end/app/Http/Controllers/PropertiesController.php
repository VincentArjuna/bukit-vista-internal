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
    public function new_prop_id()
    {
        $props = Properties::Latest()->first();
        $id = substr($props->property_id,2);
        $ctr = intval($id)+1;
        $prop_id = 'PR'.sprintf("%04s", $ctr);
        return $prop_id;
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
            $properties = new Properties;
            $properties->property_id = $this->new_prop_id();
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

    public function sorterPropertyList(Request $request, $units)
    {
        $sort_type = $request->input('data.sort_type');
        if($sort_type == 1){
            $properties = $properties->sortBy('property_type');
        }else if($sort_type == 2){
            $properties = $properties->sortByDesc('property_type');
        }else if($sort_type == 3){
            $properties = $properties->sortBy('property_status');
        }else if($sort_type == 4){
            $properties = $properties->sortByDesc('property_status');
        }else if($sort_type == 5){
            $properties = $properties->sortBy('property_package');
        }else if($sort_type == 6){
            $properties = $properties->sortByDesc('property_package');
        }else if($sort_type == 7){
            $properties = $properties->sortBy('property_package');
        }else if($sort_type == 8){
            $properties = $properties->sortByDesc('property_package');
        }else if($sort_type == 9){
            $properties = $properties->sortBy('property_design');
        }else if($sort_type == 10){
            $properties = $properties->sortByDesc('property_design');
        }else if($sort_type == 11){
            $properties = $properties->sortBy('property_proximity');
        }else if($sort_type == 12){
            $properties = $properties->sortByDesc('property_proximity');
        }else if($sort_type == 13){
            $properties = $properties->sortBy('property_life_support');
        }else if($sort_type == 14){
            $properties = $properties->sortByDesc('property_life_support');
        }
        $ar = $properties->values()->toArray();
        $paginated = fnpaginate::pager($ar, $request);
        return $paginated;
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
            $properties = Properties::get();
            $properties = $this->sorterPropertyList($request, $properties);
        }else if ($filter_type == 1)
        {
            $properties = Properties::where('property_id', 'like', '%'.$filterer.'%')->get();
            $properties = $this->sorterPropertyList($request, $properties);
        }else if ($filter_type == 2)
        {
            $properties = Properties::where('property_name', 'like', '%'.$filterer.'%')->get();
            $properties = $this->sorterPropertyList($request, $properties);
        }else if ($filter_type == 3)
        {
            $areas = Areas::where('area_name', 'like', '%'.$filterer.'%')->get();
            $collect = collect();
            foreach ($areas as $area)
            {
                $properties = Properties::where('area_id', $area->area_id)->get();
                $collect = $collect->merge($properties);
            }
            $properties = $this->sorterPropertyList($request, $collect);
        }else if ($filter_type == 4){
            $prop_types = Prop_Type::where('type_desc', 'like', '%'.$filtere.'%')->get();
            $collect = collect();
            foreach ($prop_types as $prop_type)
            {
                $properties = Properties::where('property_type', $prop_type->property_type)->get();
                $collect = $collect->merge($properties);
            }
            $properties = $this->sorterPropertyList($request, $collect);
        }else if ($filter_type == 5)
        {
            $employees = employee::where('employee_name', 'like', '%'.$filterer.'%')->get();
            $collect = collect();
            foreach($employees as $employee)
            {
                $properties = Properties::where('employee_id', $employee->employee_id)->get();
                $collect = $collect->merge($properties);
            }
            $properties = $this->sorterPropertyList($request, $collect);
        }
        return $properties;
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
    public function update(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $id = $request->input('data.property_id');
        $properties = Properties::where('property_id', $id)->first();
        if($properties){
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
