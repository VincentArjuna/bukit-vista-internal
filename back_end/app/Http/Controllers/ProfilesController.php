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
        $profiles = Profiles::orderBy('profile_name')->paginate(10);
        return $profiles;
    }

    public function newProfile_ID()
    {
        $ctr = Profiles::Latest()->count();
        $profile_id='PA'.sprintf("%04s", $ctr);
        return $profile_id;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $profiles = new Profiles;
        $profiles->profile_id = $this->newProfile_ID();
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

    public function sorterProfileList(Request $request, $profiles)
    {
        $sort_type = $request->input('data.sort_type');
        if($sort_type == 1){
            $profiles = $profiles->sortBy('profile_id');
        }else if($sort_type == 2){
            $profiles = $profiles->sortByDesc('profile_id');
        }else if($sort_type == 3){
            $profiles = $profiles->sortBy('profile_name');
        }else if($sort_type == 4){
            $profiles = $profiles->sortByDesc('profile_name');
        }
        $ar = $profiles->values()->toArray();
        $paginated = fnpaginate::pager($ar, $request);
        return $paginated;
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
        $profiles = Profiles::where('profile_name', $id)->paginate(10);
        return $profiles;
    }

    /**
     * filter_type = 0 --> default
     * filter_type = 1 --> profile_id
     * filter_type = 2 --> profile_name
     * filter_type = 3 --> profile_email
     * filter_type = 4 --> employee_phone
     * filterer = text for filter_type
     * per_page = data amount per page
     * sort_type = 0 --> default
     * sort_type = 1 --> employee_id ASC
     * sort_type = 2 --> employee_id DESC
     * sort_type = 3 --> employee_name ASC
     * sort_type = 4 --> employee_name DESC
     */

    public function profileList(Request $request)
    {
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        if($filter_type == 0){
            $profiles = Profiles::get();
            $profiles = $this->sorterProfileList($request, $profiles);
        }else if($filter_type == 1){
            $profiles = Profiles::where('profile_id', 'LIKE', '%'.$filterer.'%')
            ->get();
            $profiles = $this->sorterProfileList($request, $profiles);
        }else if($filter_type == 2){
            $profiles = Profiles::where('profile_name', 'LIKE', '%'.$filterer.'%')
            ->get();
            $profiles = $this->sorterProfileList($request, $profiles);
        }else if($filter_type == 3){
            $profiles = Profiles::where('profile_email', 'LIKE', '%'.$filterer.'%')
            ->get();
            $profiles = $this->sorterProfileList($request, $profiles);
        }
        return $profiles;
    }
    public function showDeleted()
    {
        $profiles = Profiles::onlyTrashed()->latest()->paginate(10);
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
    public function update(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $id = $request->input('data.profile_id');
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