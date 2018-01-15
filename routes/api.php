<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Resources\UserResource;
use App\User;

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

Route::get('/user', function (Request $request) {
    return new UserResource(User::find(1));
});

// Route::middleware('auth:api')->post('/login', function (Request $request) {
//     return $request->user();
// });