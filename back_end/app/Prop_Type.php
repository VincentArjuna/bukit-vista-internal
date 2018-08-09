<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Prop_Type extends Model
{
    use SoftDeletes;
    public $incrementing = false;
    protected $table = 'prop_property_type';
    protected $primaryKey = 'property_type';
    protected $dates = ['deleted_at'];
}
