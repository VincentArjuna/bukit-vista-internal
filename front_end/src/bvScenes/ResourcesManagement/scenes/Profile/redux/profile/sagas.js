import{all,takeLatest,put,call} from 'redux-saga/effects';
import actions from './actions';
import { stringify } from 'querystring';

const URL_AREA = 'https://internal.bukitvista.com/tools/api/';

const onRenderRequestProfile = async () =>
    await fetch(`${URL_AREA}profile`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);

const onAddRequestProfile = async (param) =>
    await fetch(`${URL_AREA}profile/add`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        {   
            'data[profile_name]': param[0],
            'data[profile_email]': param[1],
        })
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);

const onEditRequestProfile = async (param) =>
    await fetch(`${URL_AREA}profile/update`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        {   
            'data[profile_name]': param[0],
            'data[profile_email]': param[1],
            'data[profile_id]': param[2],
        })
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);

function* renderRequestProfile({}){
    try{
        const renderResult = yield call(onRenderRequestProfile);
        if(renderResult.data){
            yield put(actions.renderDataProfileSuccess(renderResult.data));
        }
    }catch(error){
        console.log("saga error");
    }
}

function* addRequestProfile({payload}){
    try{
        const param=[payload.name,payload.email];
        yield call(onAddRequestProfile,param);
    }catch(error){
        console.log("saga error add profile");
    }
}
function* editRequestProfile({payload}){
    try{
        const param=[payload.name,payload.email,payload.id];
        yield call(onEditRequestProfile,param);
    }catch(error){
        console.log("saga error add profile");
    }
}


export default function* rootSaga() {
    yield all([takeLatest(actions.RENDER_DATA_PROFILE,renderRequestProfile)]);
    yield all([takeLatest(actions.ADD_PROFILE,addRequestProfile)]);
    yield all([takeLatest(actions.EDIT_PROFILE,editRequestProfile)]);
}