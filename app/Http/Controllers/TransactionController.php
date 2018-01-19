<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;
use JWTAuth;
class TransactionController extends Controller
{
    public function wallet(){
        $user = JWTAuth::parseToken()->authenticate();

        return response()->json(['success'=> true, 'wallet'=> $user->getWallet($user->id)]);
    }

    public function sell(){

    }

    public function buy(){

    }
}
