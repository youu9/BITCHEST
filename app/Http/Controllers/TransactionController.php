<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;
use JWTAuth;
class TransactionController extends Controller
{
    public function wallet(){
        $user = JWTAuth::parseToken()->authenticate();
        // dump($user->transactions);
        return response()->json(['success'=> true, 'transactions'=> $user->transactions]);
    }

    public function sell(){

    }

    public function buy(){

    }
}
