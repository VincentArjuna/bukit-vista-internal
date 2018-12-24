import{all,takeEvery,put,call,takeLatest} from 'redux-saga/effects';
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
          'data[date_type]': param[4],
          'data[sort_type]':param[6]
         })
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
            payload.page,
            payload.sort
        ];
        const renderResult = yield call(onRenderRequest,param);
        if(renderResult.data){  
            yield put(
                actions.renderDataSuccess(
                    payload.index,
                    renderResult.data,
                    renderResult.total,
                    renderResult.current_page,
                    param[6]
                )
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
            payload.sort,
            payload.index,
        ];
        console.log(param);
        const renderResult = yield call(onRenderRequest,param);
        if(renderResult.data){
            yield put(
                actions.renderDataSingleSuccess(
                    param[7],
                    renderResult.data,
                    renderResult.current_page,
                    param[6]
                )
            );
        }else{
           
        }
    }catch(error){
        console.log("error message : "+ error);
    }
}


export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA,renderRequest)]);
    yield all([takeLatest(actions.RENDER_DATA_SINGLE,renderRequestSingle)]);
}