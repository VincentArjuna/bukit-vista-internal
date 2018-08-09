import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
import {stringify} from 'querystring';
const URL_AREA = 'https://internal.bukitvista.com/tools/api/unit';

const onRenderRequestUnit = async (param) =>
await fetch(`${URL_AREA}`, {
    method: 'POST',
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
    },
    body:stringify( 
    {
      'data[filter_type]': param[0],
      'data[filterer]':param[1],
      'data[per_page]':param[2]
     })
}).then(res=>res.json())
.then(res=>res)
.catch(error => error);

function* renderRequestUnit({payload}){
    try{
        const param=[
            payload.filter_type,
            payload.filterer,
            payload.per_page
        ];
        const renderResult = yield call(onRenderRequestUnit,param);
        if(renderResult.data){
            yield put(
                actions.renderDataUnitSuccess(renderResult.data)
            );
        }else{
            console.log("sad");
        }
    }catch(error){
        console.log("saga error unit : "+error);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA_UNIT,renderRequestUnit)]);
}