<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class LoginController extends Controller
{
    public function validate(Request $request)
    {
        $users = Users::where('user_email', $request->input('data.user_email'))->first();
        if($users->user_password == $request->input('data.user_password'))
        {
            return true;
        }else
        {
            return false;
        }
    }
}
