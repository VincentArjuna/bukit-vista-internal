<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bookings extends Model
{
    public $incrementing = false;
    protected $table = 'booking';
    protected $primaryKey = 'booking_id';
}
