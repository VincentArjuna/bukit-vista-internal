<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Areas extends Model
{
    public $incrementing = false;
    protected $table = 'area';
    protected $primaryKey = 'area_id';
}
