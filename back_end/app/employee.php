<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class employee extends Model
{
    public $incrementing = false;
    protected $table = 'employee';
    protected $primaryKey = 'employee_id';
}
