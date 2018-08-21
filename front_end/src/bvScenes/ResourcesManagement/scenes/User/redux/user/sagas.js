import{all,takeLatest,put,call} from 'redux-saga/effects';
import actions from './actions';
import { stringify } from 'querystring';

const URL_AREA = 'https://internal.bukitvista.com/tools/api/';

const onRenderRequestUser = async () =>
    await fetch(`${URL_AREA}user`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);

const onAddRequestUser = async (param) =>
    await fetch(`${URL_AREA}register`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        {   
            'data[user_email]': param[0],
            'data[user_password]': param[1],
            'data[employee_id]': param[2],
        })
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);

const onResetPasswordRequestUser = async (param) =>
    await fetch(`${URL_AREA}user/reset_pass`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        {   
            'data[user_email]': param[0],
            'data[user_password]': param[1],
            'data[user_id]': param[2],
        })
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);
function* renderRequestUser({}){
    try{
        const renderResult = yield call(onRenderRequestUser);
        if(renderResult.data){
            yield put(actions.renderDataUserSuccess(renderResult.data));
        }
    }catch(error){
        console.log("saga error");
    }
}
function* addRequestUser({payload}){
    try{
        const param=[payload.email,payload.password,payload.employee];
        yield call(onAddRequestUser,param);
    }catch(error){
        console.log("saga error");
    }
}
function* resetPasswordRequestUser({payload}){
    try{
        const param=[payload.email,payload.password,payload.id];
        yield call(onResetPasswordRequestUser,param);
    }catch(error){
        console.log("saga error");
    }
}

export default function* rootSaga() {
    yield all([takeLatest(actions.RENDER_DATA_USER,renderRequestUser)]);
    yield all([takeLatest(actions.ADD_USER,addRequestUser)]);
    yield all([takeLatest(actions.RESET_PASSWORD_USER,resetPasswordRequestUser)]);
}