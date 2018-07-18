<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    public $incrementing = false;
    protected $table = 'users';
    protected $primaryKey = 'user_id';
}
