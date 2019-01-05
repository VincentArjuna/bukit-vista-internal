<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $table = 'payout';
    protected $primaryKey = 'payout_id';
}
