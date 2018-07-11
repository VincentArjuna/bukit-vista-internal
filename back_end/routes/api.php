<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Listing

//Display all 'listing'
Route::get('listing', 'ListingsController@index');

//Display specified 'listing' by 'listing_id'
Route::get('listing/{id}','ListingsController@showid');

//Display specified 'listing' by 'unit_id'
Route::get('listing/unit/{id}','ListingsController@showunit');

//Add new 'Listing'
Route::post('listing/add','ListingsController@create');

//Update a 'Listing'
Route::post('listing/update/{id}','ListingsController@update');

//Delete from 'Listing'
Route::post('listing/delete/{id}','ListingsController@softDelete');

//Unit

//Display all 'Unit'
Route::get('unit','UnitController@index');

//Display specified 'unit' by 'unit_id'
Route::get('unit/{id}','UnitController@showunit');

//Display specified 'unit' by 'property_id'
Route::get('unit/property/{id}','UnitController@showprop');

//Add new 'Unit'
Route::post('unit/add','UnitController@create');

//Update a 'Unit'
Route::post('unit/update/{id}','UnitController@update');

//Delete from 'Unit'
Route::post('unit/delete/{id}','UnitController@softDelete');

//employee

//Display all 'employee'
Route::get('employee','EmployeeController@index');

//Display specified 'employee' by 'employee_id'
Route::get('employee/{id}','UnitController@showemployee');

//Add new 'employee'
Route::post('employee/add','EmployeeController@create');

//Update a 'employee'
Route::post('employee/update/{id}','EmployeeController@update');

//Delete from 'employee'
Route::post('employee/delete/{id}','EmployeeController@softDelete');

