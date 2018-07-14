<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class LoginController extends Controller
{
    public function check(Request $request)
    {
        $email = $request->input('user_email');
        $password = $request->input('user_password');
        $users = User::where('user_email', $email)->first();
        if ($users->password == $password)
        {

        }else
        {
            
        }
    }
}
