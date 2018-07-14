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
        $employees = employee::latest()->paginate(20);
        return $employees;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $employees = new employee;
        $employees->employee_id = $request->input('data.employee_id');
        $employees->employee_name = $request->input('data.employee_name');
        $employees->employee_address = $request->input('data.employee_address');
        $employees->employee_phone = $request->input('data.employee_phone');
        $employees->employee_status = $request->input('data.employee_status');
        $listings->created_at = new DateTime();
        $listings->updated_at = null;
        $listings->deleted_at = null;
        $listings->temp_column = null;
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
        $employees = employee::find($id)->first();
        $employees->employee_name = $request->input('data.employee_name');
        $employees->employee_address = $request->input('data.employee_address');
        $employees->employee_phone = $request->input('data.employee_phone');
        $employees->employee_status = $request->input('data.employee_status');
        $listings->updated_at = new DateTime();
        $listings->save();
        return 'New Data Added';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employees = employee::find($id)->first();
        $employees->updated_at = new DateTime();
        $employees->deleted_at = new DateTime();
        $employees->save();
        return 'Data Deleted';
    }
}
