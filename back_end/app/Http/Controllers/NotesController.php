<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DateTime;
use App\Notes;

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
        $ctr = Notes::Latest()->count();
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
    public function showBooking($id)
    {
        $notes = Notes::where('booking_id', $id)->paginate(20);
        return $notes;
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
        $notes = Notes::find($id)->first();
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
        $notes = Notes::find($id)->first();
        $notes->deleted_at = new DateTime();
        $notes->save();
        return 'Data SoftDeleted';
    }
}
