<?php

use Faker\Generator as Faker;
use Carbon\Carbon;
use App\User;
use App\Currency;
use App\Quotation;

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Transaction::class, function (Faker $faker) {

    $currencies = Currency::pluck('id')->all();
    $currencyId = $faker->randomElement($currencies);

    $date = new Carbon();
    $date = $date->addDays('-'.$faker->numberBetween(0,29))->format('Y-m-d');
    $quotation = Quotation::where('date', '=', $date)->where('currency_id', '=', $currencyId)->first();
    
    $users = User::where('role','=','Client')->get();
    $users = $users->pluck('id')->all();
    
    
    return [
        'quantity' => $faker->numberBetween($min = 1, $max = 100),
        'date' => $date,
        'user_id' => $faker->randomElement($users),
        'state' => $faker->randomElement(['own', 'sold']),
        'currency_id' => $currencyId,
        'quotation_id' => $quotation->id,
    ]; 
});
