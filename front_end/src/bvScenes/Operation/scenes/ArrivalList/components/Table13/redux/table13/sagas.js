import{all,takeEvery,put,call} from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';
import { stringify } from 'querystring';

const URL_AREA = 'https://internal.bukitvista.com/tools/api/arrival';

const onRenderRequest = async (param) =>
    await fetch(`${URL_AREA}`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        { 'data[area]': param[0],
          'data[date]': param[1],
          'data[filter_type]': param[2],
          'data[filterer]':param[3],
          'data[date_type]': param[4] })
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);

function* renderRequest({payload}){
    try{
        console.log(payload);
        const param=[
            payload.area,
            payload.date,
            payload.filter_type,
            payload.filterer,
            payload.date_type
        ];
        const renderResult = yield call(onRenderRequest,param);
        if(renderResult.data){
            console.log(renderResult.data);
            yield put(
                actions.renderDataSuccess13(renderResult.data)
            );
        }else{
            console.log('error'+renderResult);
        }
    }catch(error){
        console.log("error message : "+ error);
    }
}


export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA13,renderRequest)]);
}