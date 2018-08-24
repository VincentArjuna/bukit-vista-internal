import{all,takeLatest,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
import { stringify } from 'querystring';

const URL_AREA = 'https://internal.bukitvista.com/tools/api/notes/';

const onRenderRequestNotes = async (param) =>
  await fetch(`${URL_AREA}booking`, {
  method: 'POST',
  headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
  },
  body:stringify( 
  { 
    'data[booking_id]': param,
    })
})
.then(res=>res.json())
.then(res=>res)
.catch(error => error);

const onAddRequestNotes = async (param) =>
  await fetch(`${URL_AREA}add`, {
      method: 'POST',
      headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencoded',
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
      },
      body:stringify( 
      { 'data[user_id]': param[0],
        'data[booking_id]': param[1],
        'data[note_text]': param[2],
        })
  })
  .then(res=>res)
  .catch(error => error);

  const onEditRequestNotes = async (param) =>
  await fetch(`${URL_AREA}update/${param[3]}`, {
      method: 'POST',
      headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencoded',
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
      },
      body:stringify( 
      { 'data[user_id]': param[0],
        'data[booking_id]': param[1],
        'data[note_text]': param[2],
        })
  })
  .then(res=>res)
  .catch(error => error);

const onDeleteRequestNotes = async (param) =>
  await fetch(`${URL_AREA}softdelete/${param}`)
  .then(res=>res)
  .catch(error => error);

function* renderRequestNotes({payload}){
  try{
    console.log(payload.bookingId);
    const renderResults = yield call(onRenderRequestNotes,payload.bookingId);
    console.log(renderResults);
    if(renderResults.data){
      yield put(actions.renderNotesSuccess(renderResults.data));
    }
  }catch(error){
    console.log("saga notes error " + error);
  }
}

function* addRequestNotes({payload}){
  try{
    const param=[
      payload.userId,
      payload.bookingId,
      payload.text
    ];
    console.log(param);
    const renderResults=yield call(onAddRequestNotes,param);
    console.log(renderResults);
    if(renderResults.status === 200){
      yield put(actions.addNotesSuccess());
    }else{
      yield put(actions.addNotesFail());
    }
  }catch(error){
    console.log("saga add notes error " + error);
    yield put(actions.addNotesFail());
  }
}



function* deleteRequestNotes({payload}){
  try{
    const renderResults=yield call(onDeleteRequestNotes,payload.id);
    console.log(renderResults.status);
    if(renderResults.status === 200){
      yield put(actions.deleteNotesSuccess());
    }else{
      yield put(actions.deleteNotesFail());
    }
  }catch(error){
    console.log("saga delete notes error " + error);
    yield put(actions.deleteNotesFail());
  }
}

function* editRequestNotes({payload}){
  try{
    const param=[
      payload.userId,
      payload.bookingId,
      payload.text,
      payload.notesId
    ];
    console.log(param);
    const renderResults=yield call(onEditRequestNotes,param);
    console.log(renderResults.status);
    if(renderResults.status === 200){
      yield put(actions.editNotesSuccess());
    }else{
      yield put(actions.editNotesFail());
    }
  }catch(error){
    console.log("saga edit notes error " + error);
    yield put(actions.deleteNotesFail());
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.RENDER_NOTES,renderRequestNotes)]);
  yield all([takeLatest(actions.ADD_NOTES,addRequestNotes)]);
  yield all([takeLatest(actions.DELETE_NOTES,deleteRequestNotes)]);
  yield all([takeLatest(actions.EDIT_NOTES,editRequestNotes)]);
}
