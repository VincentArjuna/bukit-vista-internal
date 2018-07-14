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
Route::get('listing/{id}','ListingsController@showId');
//Display specified 'listing' by 'unit_id'
Route::get('listing/unit/{id}','ListingsController@showUnit');
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
Route::get('unit/{id}','UnitController@showId');
//Display specified 'unit' by 'property_id'
Route::get('unit/property/{id}','UnitController@showProperty');
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
Route::get('employee/{id}','UnitController@showId');
//Display specified 'employee' by 'employee_status'
Route::get('employee/{id}','UnitController@showStatus');
//Add new 'employee'
Route::post('employee/add','EmployeeController@create');
//Update a 'employee'
Route::post('employee/update/{id}','EmployeeController@update');
//Delete from 'employee'
Route::post('employee/delete/{id}','EmployeeController@softDelete');

//Booking
//Display all 'booking'
Route::get('booking','BookingsController@index');
//Display 'booking' specified by 'booking_id'
Route::get('booking/{id}', 'BookingsController@showId');
//Display 'booking' specified by 'guest_name'
Route::get('booking/guest/{id}', 'BookingsController@showGuest');
//Display 'booking' specified by 'booking_source'
Route::get('booking/source/{id}', 'BookingsController@showSource');
//Display 'booking' specified by 'check_in'
Route::get('booking/check_in/{id}', 'BookingsController@showCheckIn');
//Display 'booking' specified by 'check_out'
Route::get('booking/check_out/{id}', 'BookingsController@showCheckOut');
//Display specified by 'profile_id'
Route::get('booking/profile/{id}', 'BookingsController@showProfile');
//Display specified by 'listing_id'
Route::get('booking/listing/{id}', 'BookingsController@showListing');
//Display specified by 'area_id'
Route::get('booking/area/{id}', 'BookingsController@showArea');
//Add 'booking'
Route::post('booking/add','BookingsController@create');
//Update 'booking'
Route::post('booking/update/{id}', 'BookingsController@update');
//soft delete 'booking'
Route::post('booking/delete/{id}', 'BookingsController@softDelete');

//Properties
//Display all 'Properties'
Route::get('property', 'PropertiesController@index');
//Display 'Properties' specified by 'property_id'
Route::get('property/{id}', 'PropertiesController@showId');
//Display 'Properties' specified by 'property_name'
Route::get('property/name/{id}', 'PropertiesController@showName');
//Display 'Properties' specified by 'property_type'
Route::get('property/type/{id}', 'PropertiesController@showType');
//Display 'Properties' specified by 'property_Status'
Route::get('property/status/{id}', 'PropertiesController@showStatus');
//Display 'Properties' specified by 'property_package'
Route::get('property/package/{id}', 'PropertiesController@showPackage');
//Display 'Properties' specified by 'property_design'
Route::get('property/design/{id}', 'PropertiesController@showDesign');
//Display 'Properties' specified by 'property_proximity'
Route::get('property/proximity/{id}', 'PropertiesController@showProximity');
//Display 'Properties' specified by 'property_life_support'
Route::get('property/LS/{id}', 'PropertiesController@showLS');
//Display 'Properties' specified by 'property_service'
Route::get('property/service/{id}', 'PropertiesController@showService');
//Display 'Properties' specified by 'property_area'
Route::get('property/area/{id}', 'PropertiesController@showArea');
//Display 'Properties' specified by 'property_employee'
Route::get('property/employee/{id}', 'PropertiesController@showEmployee');
//Add new 'Property'
Route::post('property/add','PropertiesController@create');
//Update/Edit 'Property'
Route::post('property/update/{id}', 'PropertiesController@update');
//SoftDelete 'Property'
Route::post('property/delete/{id}', 'PropertiesController@softDelete');

//Area
//Display all 'Area'
Route::get('area', 'AreasController@index');
//Display 'Area' specified by 'area_id'
Route::get('area/{id}', 'AreasController@showId');
//Display 'Area' specified by 'area_name'
Route::get('area/name/{id}', 'AreasController@showName');
//Add new area
Route::post('area/add', 'AreasController@create');
//Update area
Route::post('area/update/{id}', 'AreasController@update');
//Softdelete area
Route::get('area/delete/{id}', 'AreasController@softDelete');

//Profile
//Display all 'Profile'
Route::get('profile', 'ProfilesController@index');
//Display 'Profile'specified by 'profile_id'
Route::get('profile/{id}', 'ProfilesController@showId');
//Display 'Profile'specified by 'profile_name'
Route::get('profile/name/{id}', 'ProfilesController@showName');
//Add new profile
Route::post('profile/add', 'ProfilesController@create');
//Update profile
Route::post('profile/update/{id}', 'ProfilesController@update');
//Delete profile
Route::post('profile/delete/{id}', 'ProfilesController@softDelete');

//ArrivalList
//Display arrival (check_in and area)
Route::get('arrival/{tgl}&{area}', 'ArrivalListsController@showArrival');
