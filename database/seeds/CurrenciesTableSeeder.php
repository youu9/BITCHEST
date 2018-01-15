<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class CurrenciesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        /**
        * Renvoie la valeur de mise sur le marché de la crypto monnaie
        * @param $cryptoname {string} Le nom de la crypto monnaie
        */
        function getFirstCotation($cryptoname){
            return ord(substr($cryptoname,0,1)) + rand(0, 10);
        }
        /**
         * Renvoie la variation de cotation de la crypto monnaie sur un jour
         * @param $cryptoname {string} Le nom de la crypto monnaie
         */
        function getCotationFor($cryptoname){	
            return ((rand(0, 99)>40) ? 1 : -1) * ((rand(0, 99)>49) ? ord(substr($cryptoname,0,1)) : ord(substr($cryptoname,-1))) * (rand(1,10) * .01);
        }

        DB::table('currencies')->insert(array([
            'name' => 'Bitcoin',
            'symbol' => 'BTC',
            'price' => getFirstCotation('Bitcoin'),
        ],
        [
            'name' => 'Ethereum',
            'symbol' => 'ETH',
            'price' => getFirstCotation('Ethereum'),
        ],
        [
            'name' => 'Ripple',
            'symbol' => 'XRP',
            'price' => getFirstCotation('Ripple'),
        ],
        [
            'name' => 'Bitcoin Cash',
            'symbol' => 'BCH',
            'price' => getFirstCotation('Bitcoin Cash'),
        ],
        [
            'name' => 'Cardano',
            'symbol' => 'ADA',
            'price' => getFirstCotation('Cardano'),
        ],
        [
            'name' => 'Litecoin',
            'symbol' => 'LTC',
            'price' => getFirstCotation('Litecoin'),
        ],
        [
            'name' => 'NEM',
            'symbol' => 'XEM',
            'price' => getFirstCotation('NEM'),
        ],
        [
            'name' => 'Stellar',
            'symbol' => 'XLM',
            'price' => getFirstCotation('Stellar'),
        ],
        [
            'name' => 'IOTA',
            'symbol' => 'IOT',
            'price' => getFirstCotation('IOTA'),
        ],
        [
            'name' => 'DASH',
            'symbol' => 'DASH',
            'price' => getFirstCotation('DASH'),
        ]));
        $currencies = App\Currency::all();

        $currencies->each(function($c){
            $firstCotation = getFirstCotation($c->name);
            for ($i=0; $i < 30; $i++) { 
                
                $quotation = new App\Quotation;
                $quotation->currency_id = $c->id;
               
                $quotation->rate = $i == 0 ? $firstCotation : getCotationFor($c->name) + $firstCotation;

                $date = new Carbon();
                $date->addDays(-$i);

                $quotation->date = $date;
                $quotation->save();
            }
        });
    }


    
      
}
