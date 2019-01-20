<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    //declare which table being used
    public $incrementing = false;
    protected $table='inventory';
    protected $primaryKey = 'item_id';
}
