<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    public function currency(){
        return $this->hasOne('App\Currency');
    }

    public function user(){
        return $this->belongsTo('App\User');
    }
}
