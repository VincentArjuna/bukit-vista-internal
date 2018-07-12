<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profiles extends Model
{
    public $incrementing = false;
    protected $table = 'profile';
    protected $primaryKey = 'profile_id';
}
