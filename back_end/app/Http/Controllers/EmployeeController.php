<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\employee;
use DateTime;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = employee::where('employee_status',1)->orderBy('employee_name')->paginate(30);
        return $employees;
    }
    
    public function newEmployee_ID()
    {
        $ctr = employee::Latest()->count();
        $employee_id='E'.sprintf("%04s", $ctr);
        return $employee_id;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $employees = new employee;
        $employees->employee_id = $this->newEmployee_ID();
        $employees->employee_name = $request->input('data.employee_name');
        $employees->employee_address = $request->input('data.employee_address');
        $employees->employee_phone = $request->input('data.employee_phone');
        $employees->employee_status = $request->input('data.employee_status');
        $employees->save();
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

    public function sorterEmployeeList(Request $request, $employees)
    {
        $sort_type = $request->input('data.sort_type');
        if($sort_type == 1){
            $employees = $employees->sortBy('employee_id');
        }else if($sort_type == 2){
            $employees = $employees->sortByDesc('employee_id');
        }else if($sort_type == 3){
            $employees = $employees->sortBy('employee_name');
        }else if($sort_type == 4){
            $employees = $employees->sortByDesc('employee_name');
        }
        $ar = $employees->values()->toArray();
        $paginated = fnpaginate::pager($ar, $request);
        return $paginated;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
    public function employeeList(Request $request)
    {
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        if($filter_type == 0){
            $employees = employee::where('employee_status',1)->get();
            $employees = $this->sorterEmployeeList($request,$employees);
        }else if($filter_type == 1){
            $employees = employee::where('employee_status',1)
            ->where('employee_id', 'LIKE', '%'.$filterer.'%')
            ->get();
            $employees = $this->sorterEmployeeList($request, $employees);
        }else if($filter_type == 2){
            $employees = employee::where('employee_status', 1)
            ->where('employee_name', 'LIKE', '%'.$filterer.'%')     
            ->get();
            $employees = $this->sorterEmployeeList($request, $employees);       
        }else if($filter_type == 3){
            $employees = employee::where('employee_status', 1)
            ->where('employee_address', 'LIKE', '%'.$filterer.'%')     
            ->get();
            $employees = $this->sorterEmployeeList($request, $employees);       
        }else if($filter_type == 4){
            $employees = employee::where('employee_status', 1)
            ->where('employee_phone', 'LIKE', '%'.$filterer.'%')     
            ->get();
            $employees = $this->sorterEmployeeList($request, $employees);       
        }
        return $employees;
    }

    public function showDeleted()
    {
        $employees = employee::onlyTrashed()->latest()->paginate(10);
        return $employees;
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
        $id = $request->input('data.employee_id');
        $employees = employee::where('employee_id', $id)->first();
        $employees->employee_name = $request->input('data.employee_name');
        $employees->employee_address = $request->input('data.employee_address');
        $employees->employee_phone = $request->input('data.employee_phone');
        $employees->employee_status = $request->input('data.employee_status');
        $employees->save();
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
        $employees = employee::where('employee_id', $id)->first();
        $employees->delete();
        return 'Data Deleted';
    }
    public function restore($id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        employee::onlyTrashed()->where('employee_id', $id)->restore();
        return 'Data Restored';
    }
}
