<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Listing extends Model
{
    use SoftDeletes;
    //declare which table being used
    public $incrementing = false;
    protected $table='listing';
    protected $primaryKey = 'listing_id';
    protected $dates = ['deleted_at'];
}
