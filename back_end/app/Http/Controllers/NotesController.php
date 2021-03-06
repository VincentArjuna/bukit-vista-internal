<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DateTime;
use App\Notes;
use App\Users;
use App\employee;
use App\fnPaginate;

class NotesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notes = Notes::where('deleted_at', null)->paginate(20);
        return $notes;
    }

    public function new_note_id()
    {
        $notes = Notes::Latest()->first();
        $id = substr($notes->note_id,1);
        $ctr = intval($id)+1;
        $note_id = 'N'.sprintf("%04s", $ctr);
        return $note_id;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $notes = new Notes;
        $notes->note_id = $this->new_note_id();
        $notes->booking_id = $request->input('data.booking_id');
        $notes->user_id = $request->input('data.user_id');
        $notes->note_text = $request->input('data.note_text');
        $notes->save();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showId($id)
    {
        $notes = Notes::where('note_id', $id)->first();
        return $notes;
    }
    public function showBooking(Request $request)
    {
        $id = $request->input('data.booking_id');
        $notes = Notes::where('booking_id', $id)->get();
        $ar = [];
        foreach($notes as $note)
        {
            $users = Users::where('user_id', $note->user_id)->first();
            $employees = employee::where('employee_id', $users->employee_id)->first();
            $collect = collect();
            $collect = $collect->merge($note);
            $collect = $collect->merge($employees);
            array_push($ar,$collect);
        }
        $paginated = fnpaginate::pager($ar, $request);
        return $paginated;
    }
    public function showUser($id)
    {
        $notes = Notes::where('user_id', $id)->paginate(20);
        return $notes;
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
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $notes = Notes::where('note_id',$id)->first();
        $notes->booking_id = $request->input('data.booking_id');
        $notes->user_id = $request->input('data.user_id');
        $notes->note_text = $request->input('data.note_text');
        $notes->save();
        return 'Data Updated';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function softDelete($id)
    {
        date_default_timezone_set('Asia/Kuala_Lumpur');
        $notes = Notes::where('note_id', $id)->first();
        $notes->delete();
        return 'Data SoftDeleted';
    }
}
