<?php

use Illuminate\Database\Seeder;

class CurrenciesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        function getFirstCotation($cryptoname){
            return ord(substr($cryptoname,0,1)) + rand(0, 10);
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
        ]) );
    }


    
      
}
