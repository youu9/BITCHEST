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
    
    public function getTransactionByState($state, $id){
        $transactions = DB::table('transactions')
        ->join('currencies', 'currencies.id', '=', 'transactions.currency_id')
        ->join('users', 'users.id', '=', 'transactions.user_id')
        ->select("transactions.*, currencies.*")
        ->where('transactions.state', '=', $state)
        ->where('users.id', '=', $id)
        ->get();

        return $transactions;
    }
}
