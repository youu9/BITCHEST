<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;
use App\Currency;
use JWTAuth;
use Carbon\Carbon;
use App\Quotation;
use Validator;
use DB;

class TransactionController extends Controller
{
    public function __construct(){
        $user = JWTAuth::parseToken()->authenticate();

        if($user->role == 'Admin'){
            return response()->json(['success'=> false, 'message'=> 'Vous êtes Admin']);
        }
    }
    public function wallet(){
        $user = JWTAuth::parseToken()->authenticate();

        return response()->json(['success'=> true, 'wallet'=> $user->getWallet($user->id)]);
    }

    public function list($id){
        $user = JWTAuth::parseToken()->authenticate();

        $transactions = $user->getTransactionByCurrencyId($id);
        
        return response()->json( $transactions );
    }
    public function all(Request $request){
        $user = JWTAuth::parseToken()->authenticate();
        $rules = [
            'state' => 'required',
        ];

        $input = $request->only(
            'state'
        );

        $validator = Validator::make($input, $rules);

        if($validator->fails()) {
            $error = $validator->messages()->toJson();
            return response()->json(['success'=> false, 'error'=> $error]);
        }

        $transactions =  DB::table('transactions')
        ->join('currencies', 'currencies.id', '=', 'transactions.currency_id')
        ->join('users', 'users.id', '=', 'transactions.user_id')
        ->join('quotations', 'quotations.id', '=', 'transactions.quotation_id')
        ->select("currencies.*", "transactions.*","quotations.rate")
        ->where('transactions.state', '=', $request->state)
        ->where('users.id', '=', $user->id)
        ->get();

        
        $transactions = $transactions->all();
        
        $date = new Carbon();
        
        
        foreach($transactions as $transaction){
            
            $currency = Currency::find($transaction->currency_id);
            $quotationToday = $currency->quotation($date->format('Y-m-d'));
            $transaction->diff = $quotationToday[0]->rate - $transaction->rate;
        }
        return response()->json( $transactions );
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

    public function buy(Request $request, $id){
        $user = JWTAuth::parseToken()->authenticate();
        
        $rules = [
            'quantity' => 'required|integer|min:1',
            
        ];

        $input = $request->only(
            'quantity'
        );

        $validator = Validator::make($input, $rules);

        if($validator->fails()) {
            $error = $validator->messages()->toJson();
            return response()->json(['success'=> false, 'error'=> $error]);
        }
        
        $currency = Currency::findOrFail($id);

        if($currency){
            $date = new Carbon();
            $quotation = Quotation::where('date', '=', $date->format('Y-m-d'))->where('currency_id', '=', $currency->id)->first();
            $transaction = new Transaction;
            $transaction->user_id = $user->id;
            $transaction->quantity = $request->quantity;
            $transaction->date = $date->format('Y-m-d');
            $transaction->currency_id = $currency->id;
            $transaction->quotation_id = $quotation->id;
            $transaction->save();


            return response()->json(['success'=> true, 'message'=> 'Acheté !']);
        }else{
            return response()->json(['success'=> false, 'message'=> "La crypto monnaie demandée n'existe pas"]);
        }
    }
}
