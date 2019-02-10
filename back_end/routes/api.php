<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

use Illuminate\Support\Facades\Cache;
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
//api
//test tokeet
Route::post('bookingcom', 'BookingComController@newBookingCom');

//Listing
//Display all 'listing'
Route::post('listing', 'ListingsController@listingList');
//Display all softdeleted listing
Route::get('listing/show_del', 'ListingsController@showDeleted');
//Display specified 'listing' by 'listing_id'
Route::get('listing/{id}','ListingsController@showId');
//Display specified 'listing' by 'unit_id'
Route::get('listing/unit/{id}','ListingsController@showUnit');
//Display speicified 'listing' by 'profile_id'
Route::get('listing/profile/{id}', 'ListingsController@showProfile');
//Add new 'Listing'
Route::post('listing/add','ListingsController@create');
//Update a 'Listing'
Route::post('listing/update','ListingsController@update');
//Delete from 'Listing'
Route::get('listing/delete/{id}','ListingsController@softDelete');
//Restore Softdeleted listing
Route::get('listing/restore/{id}', 'ListingsController@restore');

//Unit
//Display all 'Unit'
Route::post('unit','UnitController@unitList');
//Display softdeleted unit
Route::get('unit/show_del', 'UnitController@showDeleted');
//Add new 'Unit'
Route::post('unit/add','UnitController@create');
//Update a 'Unit'
Route::post('unit/update','UnitController@update');
//Delete from 'Unit'
Route::get('unit/delete/{id}','UnitController@softDelete');
//Restore deleted Unit
Route::get('unit/restore/{id}', 'UnitController@restore');

//employee
//Display all 'employee'
Route::post('employee','EmployeeController@employeeList');
//display all softdeleted employee
Route::get('employee/show_del', 'EmployeeController@showDeleted');
//Display specified 'employee' by 'employee_id'
Route::get('employee/{id}','EmployeeController@showId');
//Display specified 'employee' by 'employee_status'
Route::get('employee/{id}','EmployeeController@showStatus');
//Add new 'employee'
Route::post('employee/add','EmployeeController@create');
//Update a 'employee'
Route::post('employee/update','EmployeeController@update');
//Delete from 'employee'
Route::get('employee/delete/{id}','EmployeeController@softDelete');
//Restore deleted employee
Route::get('employee/restore/{id}', 'EmployeeController@restore');

//Booking
//Display all 'booking'
Route::post('booking','BookingsController@bookingList');
//Display all soft-deleted
Route::post('booking/show_del', 'BookingsController@showDeleted');
//Display all booking with unregistered listing
Route::post('booking/unreg_listing', 'BookingsController@bookingUnregisteredListing');
//Add 'booking'
Route::post('booking/add','BookingsController@create');
//Update 'booking'
Route::post('booking/update', 'BookingsController@update');
//soft delete 'booking'
Route::get('booking/delete/{id}', 'BookingsController@softDelete');
//restore softdeleted booking
Route::get('booking/restore/{id}', 'BookingsController@restore');
//Display booking per_prop, per_month
Route::post('booking/by_prop', 'BookingsController@monthlyBookProp');

//Properties
//Display all 'Properties'
Route::post('property', 'PropertiesController@propertyList');
//Display all sofdeleted properties
Route::get('property/show_del', 'PropertiesController@showDeleted');
//Add new 'Property'
Route::post('property/add','PropertiesController@create');
//Update/Edit 'Property'
Route::post('property/update', 'PropertiesController@update');
//SoftDelete 'Property'
Route::get('property/delete/{id}', 'PropertiesController@softDelete');
//Restore sofdeleted property
Route::get('property/restore/{id}', 'PropertiesController@restore');

//Area
//Display all 'Area'
Route::get('area', 'AreasController@index');
//Display all softdeleted
Route::get('area/show_del', 'AreasController@showDeleted');
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
//restore softdeleted area
Route::get('area/restore/{id}', 'AreasController@restore');

//Profile
//Display all 'Profile'
Route::post('profile', 'ProfilesController@profileList');
//Display all softdeleted profile
Route::get('profile/show_del', 'ProfilesController@showDeleted');
//Display 'Profile'specified by 'profile_id'
Route::get('profile/{id}', 'ProfilesController@showId');
//Display 'Profile'specified by 'profile_name'
Route::get('profile/name/{id}', 'ProfilesController@showName');
//Add new profile
Route::post('profile/add', 'ProfilesController@create');
//Update profile
Route::post('profile/update', 'ProfilesController@update');
//Delete profile
Route::get('profile/delete/{id}', 'ProfilesController@softDelete');
//Restore softdeleted profile
Route::get('profile/restore/{id}', 'ProfilesController@restore');

//ArrivalList
//Display arrival (check_in and area)
Route::post('arrival', 'ArrivalListsController@showArrival');
//Download as CSV
Route::get('booking/{tgl}/download','ArrivalListsController@csvWriter');
//Download as CSV monthly property
Route::get('by_prop/{id}/{tgl}/download','ArrivalListsController@csvMonthly');

//Log
//Display all log
Route::get('log', 'LogsController@index');
//Create new log
Route::post('log/add', 'LogsController@create');

//Users
Route::post('user', 'UserController@userList');
//add user
Route::post('register', 'UserController@create');
//login
Route::post('login', 'UserController@login');
//details
Route::post('user/details', 'UserController@details');
//logout
Route::post('logout', 'UserController@logout');
//resetpassword
Route::post('user/reset_pass', 'UserController@resetPassword');

//Payment
//payoutList
Route::post('payout','PaymentController@payoutList');
//integromat payload
Route::post('integ_payload', 'PaymentController@integromatPayload');
//Upload csv
Route::post('payment/upload/new', 'PaymentController@upload');
Route::post('payment/listings/new', 'PaymentController@uplisting');
//Show all payment
Route::get('payment', 'PaymentController@index');

//Payment_Booking
//Show All payment_booking
Route::get('pb', 'PBController@index');
//show pb on payment_id
Route::get('pb/payment/{id}', 'PBController@showPayment');
//show pb on profile_id
Route::get('pb/profile/{id}', 'PBController@showProfile');

//Notes
Route::get('notes' , 'NotesController@index');
//show based booking_id
Route::post('notes/booking','NotesController@showBooking');
//show based note_id
Route::get('notes/{id}', 'NotesController@showId');
//show based user_id
Route::get('notes/user/{id}', 'NotesController@showUser');
//add new note
Route::post('notes/add', 'NotesController@create');
//update/edit note
Route::post('notes/update/{id}', 'NotesController@update');
//softdelete note
Route::get('notes/softdelete/{id}', 'NotesController@softDelete');

//Booking_Employee
//Store
Route::post('be_store', 'BEController@store');

//integromat
Route::get('integromat/{id}', 'ListingsController@integromat');
//bookingcancelation
Route::get('integromatcancelation/{id}', 'BookingsController@integromatcancelation');

//role
//check roles permission (will return or false)
//bookingList_view
Route::get('permission/bookingList_view/{id}', 'RoleController@bookingList_view');
//bookingList_modify
Route::get('permission/bookingList_modify/{id}', 'RoleController@bookingList_modify');
//extraInfo_view
Route::get('permission/extraInfo_view/{id}', 'RoleController@extraInfo_view');
//extraInfo_modify
Route::get('permission/extraInfo_modify/{id}', 'RoleController@extraInfo_modify');
//ownerBooking_view
Route::get('permission/ownerBooking_view/{id}', 'RoleController@ownerBooking_view');
//marketBuilding_view
Route::get('permission/marketBuilding_view/{id}', 'RoleController@marketBuilding_view');
//marketBuilding_modify
Route::get('permission/marketBuilding_modify/{id}', 'RoleController@marketBuilding_modify');
//ressources_view
Route::get('permission/ressources_view/{id}', 'RoleController@ressources_view');
//ressources_modify
Route::get('permission/ressources_modify/{id}', 'RoleController@ressources_modify');
//propDetails_view
Route::get('permission/propDetails_view/{id}', 'RoleController@propDetails_view');
//financeBoard_view
Route::get('permission/financeBoard_view/{id}', 'RoleController@financeBoard_view');
//financeBoard_modify
Route::get('permission/financeBoard_modify/{id}', 'RoleController@financeBoard_modify');
//ownerFinanceBoard_view
Route::get('permission/ownerFinanceBoard_view/{id}', 'RoleController@ownerFinanceBoard_view');
//create new role
Route::post('role/create', 'RoleController@create');
//update role
Route::post('role/update', 'RoleController@update');
//show role details for specific role
Route::get('role/details/{id}', 'RoleController@roleDetails');

//User_Role
//create new user_role
Route::post('user_role/create', 'UserRoleController@create');
//edit user_role
Route::post('user_role/edit', 'UserRoleController@editRole');