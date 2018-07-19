<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class employee extends Model
{
    use SoftDeletes;
    public $incrementing = false;
    protected $table = 'employee';
    protected $primaryKey = 'employee_id';
    protected $dates = ['deleted_at'];
}
