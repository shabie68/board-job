<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     // return $request->user();

// });




Route::post("add-job", [App\Http\Controllers\BoardJobController::class, 'store']);

Route::get("show-jobs", [App\Http\Controllers\BoardJobController::class, 'show']);

Route::get("single-job/{id}", [App\Http\Controllers\BoardJobController::class, 'getJob']);


