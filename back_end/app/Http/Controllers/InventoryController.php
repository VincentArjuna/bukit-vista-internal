<?php

namespace App\Http\Controllers;

use App\Inventory;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function new_inventory_id()
    {
        $inventories = Inventory::Latest()->first();
        $id = substr($inventories->item_id,2);
        $ctr = intval($id)+1;
        $item_id = 'HA'.sprintf("%04s", $ctr);
        return $item_id;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $invetories = new Inventory;
        $inventories->item_id = $this->new_inventory_id();
        $inventories->hardware_type = $request->input('data.hardware_type');
        $inventories->maker = $request->input('data.maker');
        $inventories->product_type = $request->input('data.product_type');
        $inventories->year = $request->input('data.year');
        $inventories->serial_number = $request->input('data.serial_number');
        $inventories->holder = $request->input('data.holder');
        $inventory->save();
        return "Success";        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inventory $inventory)
    {
        //
    }
}
