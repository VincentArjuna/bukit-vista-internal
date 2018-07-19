<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Properties extends Model
{
    use SoftDeletes;
    public $incrementing = false;
    protected $table = 'property';
    protected $primaryKey = 'property_id';
    protected $dates = ['deleted_at'];
}
