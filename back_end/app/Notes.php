<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notes extends Model
{
    public $incrementing = false;
    protected $table = 'notes';
    protected $primaryKey = 'notes_id';
}
