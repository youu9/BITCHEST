<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Currency;
use App\User;
use App\Quotation;
use Carbon\Carbon;

class CurrencyController extends Controller
{
    public function index(){
        $currencies = Currency::all();
        $date = new Carbon();
        foreach($currencies as $currency){
            $currency->today_quotation = $currency->quotation($date->format('Y-m-d'))[0];
        }
        return response()->json($currencies);
    }

    public function show($id){
        $currency = Currency::find($id);
        
        return response()->json(['currency' => $currency, 'quotations' => $currency->quotations ]);
    }

}
