<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Log;
use DateTime;

class LogsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $logs = Logs::Latest()->paginate(20);
        return $logs;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $logs = new Logs;
        $ctr = Logs::Latest()->count();
        if($ctr>10){
            $log_id = 'LH000'.$ctr;
        }else if($ctr>100)
        {
            $log_id = 'LH00'.$ctr;
        }else if ($ctr>1000)
        {
            $log_id = 'LH0'.$ctr;
        }else
        {
            $log_id = 'LH'.$ctr;
        }
        $logs->log_id = $log_id;
        $logs->user_id = $request->input('data.user_id');
        $logs->db_name = $request->input('data.db_name');
        $logs->table_name = $request->input('data.table.name');
        $logs->column_name = $request->input('data.column.name');
        $logs->event = $request->input('data.event');
        $logs->before_data = $request->input('data.before_data');
        $logs->after_data = $request->input('data.after_data');
        $logs->save();
        return 'Data Added';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
