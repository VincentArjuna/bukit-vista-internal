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
        $employees = employee::where('employee_status',1)->orderBy('employee_name')->paginate(50);
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showId($id)
    {
        $employees = employee::where('employee_id',$id)->get();
        return $employees;
    }
    public function showStatus($id)
    {
        $employees = employee::where('employee_status',$id)->paginate(20);
        return $employees;
    }
    public function showDeleted()
    {
        $employees = employee::onlyTrashed()->latest()->paginate(20);
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
        $listings->save();
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
