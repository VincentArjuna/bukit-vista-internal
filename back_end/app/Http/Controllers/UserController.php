<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Users;
use App\fnPaginate;
use DateTime;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = Users::Latest()->paginate(10);
        return $users;
    }
    public function validator(Request $request)
    {
        $users = Users::where('user_email', $request->input('data.user_email'))->first();
        if($users){
            if(Hash::check($request->input('data.user_password'),$users->user_password))
            {
                $users->save();
                return true;
            }else
            {
                return false;
            }
        }
    }
    public function login(Request $request)
    {
        if($this->validator($request) == false)
        {
            return response('Wrong Email/Password',403)
                    ->header('Content-Type', 'text/plain');
        }else
        {
            $users = Users::where('user_email', $request->input('data.user_email'))->first();
            $users->remember_token = Str::random(60);
            $users->save();
            return response($users,200);
        }
    }
    public function logout(Request $request)
    {
        $users = Users::where('remember_token', $request->input('data.remember_token'))->first();
        $users->remember_token = NULL;
        $users->save();
        return 'Succeed';
    }
    
    public function details(Request $request)
    {
        $users = Users::select('user_id', 'user_email', 'employee_id')
        ->where('remember_token', $request->input('data.remember_token'))->first();
        return $users;
    }

    public function newUser_ID()
    {
        $ctr = Users::Latest()->count();
        $user_id='U'.sprintf("%04s", $ctr);
        return $user_id;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $users = Users::where('user_email', $request->input('data.user_email'))->first();
        if($users)
        {
            return 'User Exist';
        }else{
            $users = new Users;
            $users->user_id = $this->newUser_ID();
            $password = Hash::make($request->input('data.user_password'));
            $users->user_email = $request->input('data.user_email');
            $users->user_password = $password;
            $users->employee_id = $request->input('data.employee_id');
            $users->save();
            return 'User Created';
        }
    }

    public function sorterUserList(Request $request, $users)
    {
        $sort_type = $request->input('data.sort_type');
        if($sort_type == 1){
            $users = $users->sortBy('user_id');
        }else if($sort_type == 2){
            $users = $users->sortByDesc('user_id');
        }else if($sort_type == 3){
            $users = $users->sortBy('employee_id');
        }else if($sort_type == 4){
            $users = $users->sortByDesc('employee_id');
        }
        $ar = $users->values()->toArray();
        $paginated = fnpaginate::pager($ar, $request);
        return $paginated;
    }
     /**
     * filter_type = 0 --> default
     * filter_type = 1 --> user_email
     * filter_type = 2 --> employee_id
     * filterer = text for filter_type
     * per_page = data amount per page
     * sort_type = 0 --> default
     * sort_type = 1 --> user_id ASC
     * sort_type = 2 --> user_id DESC
     * sort_type = 3 --> employee_id ASC
     * sort_type = 4 --> employee_id DESC
     */

    public function userList(Request $request)
    {
        $filter_type = $request->input('data.filter_type');
        $filterer = $request->input('data.filterer');
        if($filter_type == 0){
            $users = Users::get();
            $users = $this->sorterUserList($request, $users);
        }else if($filter_type == 1){
            $users = Users::where('user_email', 'LIKE', '%'.$filterer.'%')->get();
            $users = $this->sorterUserList($request, $users);
        }else if($filter_type == 2){
            $users = Users::where('employee_id', 'LIKE', '%'.$filterer.'%')->get();
            $users = $this->sorterUserList($request, $users);
        }
        return $users;
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
    public function showID($id)
    {
        $users = Users::find($id)->first();
        return $users;
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
    
    public function resetPassword(Request $request)
    {
        $id = $request->input('data.user_id');
        $email = $request->input('data.user_email');
        $users = Users::where('user_email', $email)->first();
        if($users)
        {
            $password = Hash::make($request->input('data.user_password'));
            $users->user_password = $password;
            $users->save();
            return 'TRUE';
        }else
        {
            return 'FALSE';
        }
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
