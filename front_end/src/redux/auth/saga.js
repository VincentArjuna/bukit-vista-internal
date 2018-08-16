import { all, takeEvery, put, fork,call ,takeLatest} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getToken, clearToken } from '../../helpers/utility';
import {stringify} from 'querystring';
import actions from './actions';

const URL_LOGIN="https://internal.bukitvista.com/tools/api/"
const fakeApiCall = true; // auth0 or express JWT
const onLoginRequest= async(param)=>
  await fetch(`${URL_LOGIN}login`, {
      method: 'POST',
      headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencoded',
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
      },
      body:stringify( 
      {
        'data[user_email]':param[0],
        'data[user_password]':param[1]
      })
  }).then(res=>res.json())
  .then(res=>res)
  .catch(error=>error);

const onLogoutRequest =async(param)=>
  await fetch(`${URL_LOGIN}logout`, {
    method: 'POST',
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
    },
    body:stringify( 
    {
      'data[remember_token]':param
    })
  }).then(res=>res.json())
  .then(res=>res)
  .catch(error =>
     error);

const onDetailsRequest =async(param)=>
  await fetch(`${URL_LOGIN}user/details`, {
    method: 'POST',
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
    },
    body:stringify( 
    {
      'data[remember_token]':param
    })
  }).then(res=>res.json())
  .then(res=>res)
  .catch(error =>
    error);

export function* loginRequest() {
  yield takeEvery('LOGIN_REQUEST', function*({payload}) {
    clearToken();
    const param=[payload.username,payload.password];
    const renderData=yield call(onLoginRequest,param);
    if (renderData !== null) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: renderData.remember_token,
        profile: renderData.employee_id
      });
    }else {
      yield put({ type: actions.LOGIN_ERROR });
    }
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {
    if(payload.token === undefined ||  payload.token===null){
      console.log("null or undefined on login success : "+payload.token);
    }else{
      console.log("added token on login success : "+payload.token);
      yield localStorage.setItem('id_token', payload.token);
    }
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {
    
  });
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    const token = getToken().get('idToken');
    console.log("logout Token : "+token);
    yield call(onLogoutRequest,token);
    clearToken();
    yield put(push('/'));
  });
}
export function* checkAuthorization() {
  yield takeEvery(actions.CHECK_AUTHORIZATION, function*() {
    const token = getToken().get('idToken');
    if (token !== null && token !=='undefined') {
      console.log("token ada auth : "+token);
      const renderRequest = yield call(onDetailsRequest,token);
      if(renderRequest){
        yield put({
          type: actions.LOGIN_SUCCESS,
          token:token,
          profile:renderRequest.employee_id
        });
      }
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout)
  ]);
}
