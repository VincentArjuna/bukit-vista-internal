<?php

namespace App\Http\Controllers;

use App\Role;
use App\User_Role;
use Illuminate\Http\Request;

class RoleController extends Controller
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

    public function bookingList_view($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->bookingList_view){
                $checker = true;
                break;
            }
        }
        return $checker;
    }

    public function bookingList_modify($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->bookingList_modify){
                $checker = true;
                break;
            }
        }
        return $checker;
    }

    public function extraInfo_view($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->extraInfo_view){
                $checker = true;
                break;
            }
        }
        return $checker;
    }

    public function extraInfo_modify($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->extraInfo_modify){
                $checker = true;
                break;
            }
        }
        return $checker;
    }

    public function ownerBooking_view($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->ownerBooking_view){
                $checker = true;
                break;
            }
        }
        return $checker;
    }

    public function marketBuilding_view($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->marketBuilding_view){
                $checker = true;
                break;
            }
        }
        return $checker;
    }

    public function marketBuilding_modify($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->marketBuilding_modify){
                $checker = true;
                break;
            }
        }
        return $checker;
    }


    public function propDetails_view($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->propDetails_view){
                $checker = true;
                break;
            }
        }
        return $checker;
    }

    public function ressources_view($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->ressources_view){
                $checker = true;
                break;
            }
        }
        return $checker;
    }

    public function ressources_modify($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->ressources_modify){
                $checker = true;
                break;
            }
        }
        return $checker;
    }

    public function financeBoard_view($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->financeBoard_view){
                $checker = true;
                break;
            }
        }
        return $checker;
    }

    public function financeBoard_modify($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->financeBoard_modify){
                $checker = true;
                break;
            }
        }
        return $checker;
    }

    public function ownerFinanceBoard_view($user_id)
    {
        $user_roles = User_Role::where('user_id', $user_id)->get();
        $checker = false;
        foreach ($user_roles as $user_role) {
            $role = Role::where('role_name', $user_role->role)->first();
            if($role->ownerFinanceBoard_view){
                $checker = true;
                break;
            }
        }
        return $checker;
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $role_name = $request->input('data.role_name');
        $role = Role::where('role_name', $role_name)->first();
        if(!$role){
            $role = new Role;
            $role->role_name = $role_name;
            $role->bookingList_view= $request->input('data.bookingList_view');
            $role->bookingList_modify= $request->input('data.bookingList_modify');
            $role->extraInfo_view= $request->input('data.extraInfo_view');
            $role->extraInfo_modify= $request->input('data.extraInfo_modify');
            $role->ownerBooking_view= $request->input('data.ownerBooking_view');
            $role->marketBuilding_view= $request->input('data.marketBuilding_view');
            $role->marketBuilding_modify= $request->input('data.marketBuilding_modify');
            $role->ressources_view= $request->input('data.ressources_view');
            $role->ressources_modify= $request->input('data.ressources_modify');
            $role->propDetails_view= $request->input('data.propDetails_view');
            $role->financeDashboard_view= $request->input('data.financeDashboard_view');
            $role->financeDashboard_modify= $request->input('data.financeDashboard_modify');
            $role->ownerFinanceDashboard_view= $request->input('data.ownerFinanceDashboard_view');
            $role->save();
            return 'TRUE';        
        }else {
            return 'FALSE';
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function roleDetails($id)
    {
        $role = Role::where('role_name', $id)->first();
        return $role;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $role = Role::where('role_name', $request->input('data.role_name'))->first();
        if($role){
            $role->role_name = $request->input('data.role_name');
            $role->bookingList_view= $request->input('data.bookingList_view');
            $role->bookingList_modify= $request->input('data.bookingList_modify');
            $role->extraInfo_view= $request->input('data.extraInfo_view');
            $role->extraInfo_modify= $request->input('data.extraInfo_modify');
            $role->ownerBooking_view= $request->input('data.ownerBooking_view');
            $role->marketBuilding_view= $request->input('data.marketBuilding_view');
            $role->marketBuilding_modify= $request->input('data.marketBuilding_modify');
            $role->ressources_view= $request->input('data.ressources_view');
            $role->ressources_modify= $request->input('data.ressources_modify');
            $role->propDetails_view= $request->input('data.propDetails_view');
            $role->financeDashboard_view= $request->input('data.financeDashboard_view');
            $role->financeDashboard_modify= $request->input('data.financeDashboard_modify');
            $role->ownerFinanceDashboard_view= $request->input('data.ownerFinanceDashboard_view');
            $role->save();
            return 'TRUE';
        }else{
            return 'FALSE';
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        //
    }
}
