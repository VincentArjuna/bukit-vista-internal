<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PropertyWorkflows extends Model
{
    use SoftDeletes;
    protected $table ='property_workflow';
    public $incrementing = false;
    protected $dates = ['deleted_at'];
}
