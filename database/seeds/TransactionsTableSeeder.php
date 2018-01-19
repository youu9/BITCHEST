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
        $users = User::all();
        // foreach($users as $user){
        //     $transaction = new Transaction;
        //     $transaction->user_id =  $user->id;
        //     $transaction->type = 'CB';
        //     $transaction->state = 'own';
            
        //     $user->transactions->attach($transaction);
        // }
    }
}
