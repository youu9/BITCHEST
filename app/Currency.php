<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Currency extends Model
{
    // protected $table = 'currencies';

    public function quotations(){
        return $this->hasMany('App\Quotation');
    }
    public function quotation($date){
        $quotation = DB::table('quotations')->where('date','=', $date)->where('currency_id','=', $this->id)->get();
        return $quotation;
    }

    public function transactions(){
        return $this->hasMany('App\Transaction');
    }
}
