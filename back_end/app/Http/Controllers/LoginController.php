<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
class LoginController extends Controller
{
    public function validate(Request $request)
    {
        var_dump($request);
        $users = Users::where('user_email', $request->input('data.user_email'))->first();
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
