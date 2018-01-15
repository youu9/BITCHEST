<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    public function quotations(){
        return $this->hasMany('App\Quotation');
    }

    public function transactions(){
        return $this->hasMany('App\Purchase');
    }
}
