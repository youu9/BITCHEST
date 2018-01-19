<?php

use Faker\Generator as Faker;
use Carbon\Carbon;
use App\User;
use App\Currency;

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Transaction::class, function (Faker $faker) {
    $date = new Carbon();
    $users = User::pluck('id')->all();
    $currencies = Currency::pluck('id')->all();
    return [
        'quantity' => $faker->numberBetween($min = 1, $max = 100),
        'date' => $date->addDays('-'.$faker->numberBetween(0,29))->format('Y-m-d'),
        'user_id' => $faker->randomElement($users),
        'currency_id' => $faker->randomElement($currencies),
    ];
});
