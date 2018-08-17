<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Users;
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
        $users = Users::Latest()->paginate(20);
        return $users;
    }
    public function validator(Request $request)
    {
        $users = Users::where('user_email', $request->input('data.user_email'))->first();
        if($user){
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
            return respond('Wrong Email/Password',403);
        }else
        {
            $users = Users::where('user_email', $request->input('data.user_email'))->first();
            $users->remember_token = Str::random(60);
            $users->save();
            return $users->remember_token;
        }
    }
    public function logout(Request $request)
    {
        $users = Users::where('remember_token', $request->input('data.remember_token'))->first();
        $users->remember_token = NULL;
        $user->save();
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
            return 'User Registered';
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
