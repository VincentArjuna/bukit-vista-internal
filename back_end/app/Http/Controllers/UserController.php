<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $ctr = Users::Latest()->count();
        if($ctr>10){
            $user_id = 'U000'.$ctr;
        }else if($ctr>100)
        {
            $user_id = 'U00'.$ctr;
        }else if ($ctr>1000)
        {
            $user_id = 'U0'.$ctr;
        }else
        {
            $user_id = 'U'.$ctr;
        }
        $users = new Users;
        $users->user_id = $user_id;
        $users->user_email = $request->input('data.user_email');
        $users->user_password = $request->input('data.user_email');
        $users->employee_id = $request->input('data.employee_id');
        $users->save();
        return 'User Created';
    }
    
    public function validate(Request $request){
        $users->Users::where('user_email', $request->input('data.user_email'))->first();
        if($users->user_password == $request->input('data.user_password'))
        {
            return true;
        }else
        {
            return false;
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
