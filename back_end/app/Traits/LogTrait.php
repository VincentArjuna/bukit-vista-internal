<?php

namespace App\Traits;

use App\Logs;

/**
 * 
 */
trait LogTrait
{
    public function new_log_id()
    {
        $logs = Logs::latest()->first();
        $id = substr($logs->log_id,2);
        $ctr = intval($id)+1;
        $log_id = 'LH'.sprintf("%04s", $ctr);
        return $log_id;
    }

    public function createLog($data)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $logs = new Logs;
        $logs->log_id = $this->new_log_id();
        $logs->user_id = $data['user_id'];
        $logs->db_name = $data['db_name'];
        $logs->table_name = $data['table.name'];
        if (array_key_exists('column_name', $data))
        {
            $logs->column_name = $data['column_name'];
        }
        $logs->event = $data['event'];
        if (array_key_exists('before_data', $data))
        {
            $logs->before_data = $data['before_data'];
        }
        if (array_key_exists('after_data', $data))
        {
            $logs->after_data = $data['after_data'];
        }
        $logs->save();
    }
}
