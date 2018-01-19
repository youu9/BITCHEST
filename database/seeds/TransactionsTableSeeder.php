<?php

use Illuminate\Database\Seeder;
use App\Currency;
use App\User;

class TransactionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Transaction::class, 50)->create();
        // factory(App\Transaction::class, 20)->create()->each(function($transaction){
        //     $currencies = Currency::pluck('id')->all();
        //     $users = User::pluck('id')->all();
            
        //     $randomKeys = array_rand( $currencies, rand(1, count($currencies)) );
        //     $selectCurrencies = [];
            
        //     if(is_array($randomKeys)){
        //         for ($i=0; $i < count($randomKeys); $i++) { 
        //             array_push($selectCurrencies, $currencies[ $randomKeys[$i] ]);
        //         }
        //     }
        //     else{
        //         $selectCurrencies[] = $currencies[$randomKeys]; 
        //     }

        //     foreach($selectedCurrencies as $selectedCurrency){
        //         $transaction->currency_id = $selectedCurrency->id;
        //         $transaction->date = $selectedCurrency->id;
        //         $transaction->user_id = $selectedCurrency->id;
        //     }
            


        // });
    }
}
