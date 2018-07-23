<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Profiles;
use DateTime;

class ProfilesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $profiles = Profiles::Latest()->paginate(20);
        return $profiles;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $profiles = new Profiles;
        $profiles->profile_id = $request->input('data.profile_id');
        $profiles->profile_name = $request->input('data.profile_name');
        $profiles->profile_email = $request->input('data.profile_email');
        $profiles->save();
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
        $profiles = Profiles::where('profile_id', $id)->get();
        return $profiles;
    }
    public function showName($id)
    {
        $profiles = Profiles::where('profile_name', $id)->paginate(20);
        return $profiles;
    }
    public function showDeleted()
    {
        $profiles = Profiles::onlyTrashed()->latest()->paginate(20);
        return $profiles;
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
        $profiles = Profiles::where('profile_id', $id)->first();
        $profiles->profile_name = $request->input('data.profile_name');
        $profiles->profile_email = $request->input('data.profile_email');
        $profiles->save();
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
        $profiles = Profiles::where('profile_id', $id)->first();
        $profiles->delete();
        return 'Data SoftDeleted';
    }
    public function restore($id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        Profiles::onlyTrashed()->where('profile_id', $id)->restore();
        return 'Data Restored';
    }
}