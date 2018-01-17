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
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
});
// Recover password
//Route::post('recover', 'AuthController@recover');

Route::group(['prefix' => 'v1','middleware' => ['jwt.auth']], function() {
    Route::get('logout', 'AuthController@logout');
    // User action 
    Route::get('/user', "UserController@index");
    Route::get('/user/{id}', "UserController@show");
    Route::post('/user', "UserController@store");
    Route::post('/user/{id}', "UserController@update");
    Route::delete('/user/{id}', "UserController@destroy");
});
