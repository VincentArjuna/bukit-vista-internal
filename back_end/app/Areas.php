<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Areas extends Model
{
    use SoftDeletes;
    public $incrementing = false;
    protected $table = 'area';
    protected $primaryKey = 'area_id';
    protected $dates = ['deleted_at'];
}
