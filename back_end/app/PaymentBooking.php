<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentBooking extends Model
{
    public $incrementing = false;
    protected $table = 'payment_booking';
    protected $primaryKey = 'pb_id';
}
