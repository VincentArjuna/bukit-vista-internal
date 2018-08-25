<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Workflows extends Model
{
    use SoftDeletes;
    protected $table ='workflow';
    public $incrementing = false;
    protected $dates = ['deleted_at'];
}
