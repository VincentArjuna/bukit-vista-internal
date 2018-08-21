import{all,takeLatest,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
import { stringify } from 'querystring';

const URL_AREA = 'https://internal.bukitvista.com/tools/api/notes/';

const onRenderRequestNotes = async (param) =>
    await fetch(`${URL_AREA}booking/${param}`)
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
  }).then(res=>res.json())
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
    if(renderResults){
      yield put(actions.addNotesSuccess());
    }else{
      yield put(actions.addNotesFail());
    }
  }catch(error){
    console.log("saga add notes error " + error);
    yield put(actions.addNotesFail());
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.RENDER_NOTES,renderRequestNotes)]);
  yield all([takeLatest(actions.ADD_NOTES,addRequestNotes)]);
}
