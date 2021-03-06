<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Users extends Model
{
    use SoftDeletes;
    public $incrementing = false;
    protected $table = 'user';
    protected $primaryKey = 'user_id';
    protected $dates = ['deleted_at'];
}
