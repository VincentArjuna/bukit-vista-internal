<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Unit extends Model
{
    use SoftDeletes;
    protected $table ='unit';
    public $incrementing = false;
    protected $primaryKey = 'unit_id';
    protected $dates = ['deleted_at'];
}
