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
        DB::table('users')->insert([
            'name' => 'Jerome',
            'password' => Hash::make('root'),
            'email' => 'jerome@bitchest.com',
            'role' => 'Admin'
        ]);
    }
}
