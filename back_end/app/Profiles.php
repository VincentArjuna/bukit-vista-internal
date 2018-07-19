<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Profiles extends Model
{
    use SoftDeletes;
    public $incrementing = false;
    protected $table = 'profile';
    protected $primaryKey = 'profile_id';
    protected $dates = ['deleted_at'];
}
