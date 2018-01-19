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
            $currency->today_quotation = $currency->quotation($date->format('Y-m-d'));
        }
        return response()->json(['success' => 'true', 'data' => $currencies]);
    }

    public function show($id){
        $currency = Currency::find($id);
        
        return response()->json(['success' => 'true', 'data' => ['currency' => $currency, 'quotations' => $currency->quotations ]]);
    }

}
