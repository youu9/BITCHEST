<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Currency;
use App\User;
use App\Quotation;
use Carbon\Carbon;
/**
 * @resource Currency
 *
 * currency endpoint 
 * 
 */
class CurrencyController extends Controller
{
    /**
     * Currencies
     * 
     * Return a list of currencies with the latest quotation
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $currencies = Currency::all();
        
        foreach($currencies as $currency){
            $date = new Carbon();
            
            $currency->today_quotation = $currency->quotation($date->format('Y-m-d'))[0];
            
            $yesterday_quotation = $currency->quotation($date->addDays(-1)->format('Y-m-d'))[0];
            
            $currency->today_quotation->diff = $currency->today_quotation->rate - $yesterday_quotation->rate;
        }
        return response()->json($currencies);
    }

    /**
     * Currency
     * 
     * Return a specific currency with quotations 30 days before 
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id){
        $currency = Currency::find($id);
        
        return response()->json(['currency' => $currency, 'quotations' => $currency->quotations ]);
    }

}
