<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bookings extends Model
{
    use SoftDeletes;
    public $incrementing = false;
    protected $table = 'booking';
    protected $primaryKey = 'booking_id';
    protected $dates = ['deleted_at'];
}
