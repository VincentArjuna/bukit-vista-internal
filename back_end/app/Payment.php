<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    public $incrementing = false;
    protected $table = 'payment';
    protected $primaryKey = 'payment_id';
}
