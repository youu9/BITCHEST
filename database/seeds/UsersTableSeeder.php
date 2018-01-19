<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 10)->create();
        DB::table('users')->insert(array([
            'name' => 'Jerome',
            'password' => Hash::make('root'),
            'email' => 'jerome@bitchest.com',
            'role' => 'Admin',
            'is_verified' => 1,
            'remember_token' => str_random(30),
        ],
        [
            'name' => 'Eric',
            'password' => Hash::make('root'),
            'email' => 'eric@eric.fr',
            'role' => 'Client',
            'is_verified' => 1,
            'remember_token' => str_random(30),
        ]));
    }
}
