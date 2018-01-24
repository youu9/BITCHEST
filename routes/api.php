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
header("Access-Control-Allow-Origin: *");
header('Access-Control-Expose-Headers: Authorization');
header('Access-Control-Allow-Headers:Access-Control-Allow-Origin, Authorization, Origin, Content-Type, X-Auth-Token');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

Route::group(['prefix' => 'v1'], function() {
    //Route::post('register', 'AuthController@register'); // A voir
    Route::post('login', 'AuthController@login'); // DONE
});
// Recover password
//Route::post('recover', 'AuthController@recover');

Route::group(['prefix' => 'v1','middleware' => ['jwt.auth']], function() {
    // Route::get('logout', 'AuthController@logout'); // A voir
    // User CRUD 

    Route::get('/users', "UserController@index"); // DONE
    Route::get('/user/{id}', "UserController@show"); // DONE
    Route::post('/user', "UserController@store"); // DONE
    Route::post('/user/{id}', "UserController@update"); // DONE
    Route::delete('/user/{id}', "UserController@destroy"); // DONE



    // Client
    Route::get('/wallet/', "UserController@wallet"); // porte feuille ?
    Route::get('/currency/{id}/transactions', "TransactionController@list"); // 
    Route::post('/transactions', "TransactionController@all"); // 
    
    Route::post('/sell/transaction/{id}', "TransactionController@sell"); // Vendre ?
    Route::post('/buy/currency/{id}', "TransactionController@buy"); // Achat ?
    
   

    // Currencies get and show
    Route::get('/currencies', "CurrencyController@index"); // DONE
    Route::get('/currency/{id}', "CurrencyController@show"); // DONE

    
});
