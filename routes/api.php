<?php

use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['prefix' => 'v1'], function() {
    Route::post('register', 'AuthController@register'); // A voir
    Route::post('login', 'AuthController@login'); // DONE
});
// Recover password
//Route::post('recover', 'AuthController@recover');

Route::group(['prefix' => 'v1','middleware' => ['jwt.auth']], function() {
    Route::get('logout', 'AuthController@logout'); // A voir
    // User CRUD 
    Route::get('/user', "UserController@index"); // DONE
    Route::get('/user/{id}', "UserController@show"); // DONE
    Route::post('/user', "UserController@store"); // DONE
    Route::post('/user/{id}', "UserController@update"); // DONE
    Route::delete('/user/{id}', "UserController@destroy"); // DONE

    // Wallet of client ex1
    // Route::get('/user/{id}/wallet/', "TransactionController@wallet"); // porte feuille ?
    // Route::post('/user/{id}/wallet/{id}', "TransactionController@sell"); // Vendre ?
    // Route::post('/user/{id}/currency/{id}', "TransactionController@buy"); // Achat ?

    // Wallet of client ex2
    Route::get('/wallet/', "TransactionController@wallet"); // porte feuille ?
    Route::post('/sell/currency/{id}', "TransactionController@sell"); // Vendre ?
    Route::post('/buy/currency/{id}', "TransactionController@buy"); // Achat ?
    
    // Wallet of client ex3
    // Route::get('/user/{id}/wallet/', "TransactionController@wallet"); // porte feuille ?
    // Route::post('/user/{id}/buy/{id}', "TransactionController@sell"); // Vendre ?
    // Route::post('/user/{id}/sell/{id}', "TransactionController@buy"); // Achat ?

    // Currencies get and show
    Route::get('/currencies', "CurrencyController@index"); // DONE
    Route::get('/currency/{id}', "CurrencyController@show"); // DONE

    
});
