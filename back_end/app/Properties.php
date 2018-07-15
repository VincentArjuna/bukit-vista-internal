<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Properties extends Model
{
    public $incrementing = false;
    protected $table = 'property';
    protected $primaryKey = 'property_id';
}
