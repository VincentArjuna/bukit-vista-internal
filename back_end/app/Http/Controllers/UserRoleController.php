<?php

namespace App\Http\Controllers;

use App\User_Role;
use Illuminate\Http\Request;

class UserRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $role_name = $request->input('data.role_name');
        $user_id = $request->input('data.user_id');
        $user_Role = User_Role::where('user_id', $user_id)
                    ->where('role_name', $role_name)->first();
        if(!$user_Role){
            $user_Role = new User_Role;
            $user_Role->role_name = $role_name;
            $user_Role->user_id = $user_id;
            $user_Role->save();
            return 'TRUE';
        }else {
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

    /**
     * Display the specified resource.
     *
     * @param  \App\User_Role  $user_Role
     * @return \Illuminate\Http\Response
     */
    public function show(User_Role $user_Role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User_Role  $user_Role
     * @return \Illuminate\Http\Response
     */
    public function editRole(Request $request)
    {
        $role_name = $request->input('data.role_name');
        $user_id = $request->input('data.user_id');
        $user_Role = User_Role::where('user_id', $user_id)
                    ->where('role_name', $role_name)->first();
        if($user_Role){
            $user_Role->role_name = $role_name;
            $user_Role->save();
            return 'TRUE';
        }else {
            return 'FALSE';
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User_Role  $user_Role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User_Role $user_Role)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User_Role  $user_Role
     * @return \Illuminate\Http\Response
     */
    public function destroy(User_Role $user_Role)
    {
        //
    }
}
