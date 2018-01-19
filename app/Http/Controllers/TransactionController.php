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

    public function sell(Request $request, $id){
        $transaction = Transaction::findOrFail($id);
        if($transaction->state != 'sold'){
            // todo update
            $transaction->state = 'sold';
            $transaction->save();
            return response()->json(['success'=> true, 'message'=> 'Vendu !']);
        }else{
            return response()->json(['success'=> false, 'message'=> 'Déjà vendu !']);
        }
        
    }

    public function buy(){

    }
}
