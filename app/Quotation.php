<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quotation extends Model
{
    public function currency(){
        return $this->belongsTo('App\Currency');
    }
}
