import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
import { stringify } from 'querystring';

const URL_AREA = 'https://internal.bukitvista.com/tools/api/arrival';
const delay = (ms) => new Promise(res => setTimeout(res, ms))

const onRenderRequest = async (param) =>
    await fetch(`${URL_AREA}?page=${param[5]}`, {
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
        const param=[
            payload.area,
            payload.date,
            payload.filter_type,
            payload.filterer,
            payload.date_type,
            payload.page
        ];
        const renderResult = yield call(onRenderRequest,param);
        if(renderResult.data){  
            yield put(
                actions.renderDataSuccess(
                    payload.index,
                    renderResult.data,
                    renderResult.total,
                    renderResult.current_page)
            );
        }else{
            console.log('error'+renderResult);
        }
    }catch(error){
        console.log("error message : "+ error);
    }
}

function* renderRequestSingle({payload}){
    try{
        const param=[
            payload.area,
            payload.date,
            payload.filter_type,
            payload.filterer,
            payload.date_type,
            payload.page,
            payload.index
        ];
        console.log("single :"+param);
        const renderResult = yield call(onRenderRequest,param);
        if(renderResult.data){
            yield put(
                actions.renderDataSingleSuccess(
                    param[6],
                    renderResult.data,
                    renderResult.current_page)
            );
        }else{
           
        }
    }catch(error){
        console.log("error message : "+ error);
    }
}


export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA,renderRequest)]);
    yield all([takeEvery(actions.RENDER_DATA_SINGLE,renderRequestSingle)]);
}