<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Areas;
use DateTime;

class AreasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $areas = Areas::paginate(20);
        return $areas;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $areas = new Areas;
        $areas->area_id = $request->input('data.area_id');
        $areas->area_name = $request->input('data.area_name');
        $areas->save();
        return 'Data Created';
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
        $areas = Areas::where('area_id', $id)->first();
        return $areas;
    }
    public function showName($id)
    {
        $areas = Areas::where('area_name', $id)->paginate(20);
        return $areas;
    }
    public function showDeleted()
    {
        $areas = Areas::onlyTrashed()->latest()->paginate(20);
        return $areas;
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
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
        $areas = Areas::where('area_id', $id)->first();
        $areas->area_name = $request->input('data.area_name');
        $areas->save();
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
        $areas = Areas::where('area_id', $id)->first();
        $areas->delete();
        return 'Data SoftDeleted';
    }

    public function restore($id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        Areas::onlyTrashed()->where('area_id', $id)->restore();
        return 'Data Restored';
    }
}
