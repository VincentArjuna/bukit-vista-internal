<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BookingEmployee extends Model
{
    use SoftDeletes;
    public $incrementing = false;
    protected $table = 'booking_employee';
    protected $primaryKey = 'be_id';
    protected $dates = ['deleted_at'];
}
