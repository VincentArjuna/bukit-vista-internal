<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    //declare which table being used
    public $incrementing = false;
    protected $table='listing';
    protected $primaryKey = 'listing_id';
}
