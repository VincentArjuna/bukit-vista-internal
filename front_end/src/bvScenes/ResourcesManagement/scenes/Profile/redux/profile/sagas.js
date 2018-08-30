import{all,takeLatest,put,call} from 'redux-saga/effects';
import actions from './actions';
import { stringify } from 'querystring';

const URL_AREA = 'https://internal.bukitvista.com/tools/api/';

const onRenderRequestProfile = async (param) =>
    await fetch(`${URL_AREA}profile?page=${param}`)
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

function* renderRequestProfile({payload}){
    try{
        const param =payload.page;
        const renderResult = yield call(onRenderRequestProfile,param);
        if(renderResult.data){
            yield put(actions.renderDataProfileSuccess(renderResult.data,renderResult.total,renderResult.current_page));
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

function* pageCountRequestProfile({payload}){
    try{
       console.log("page count profile");
        const page =1;
        const renderResult = yield call(onRenderRequestProfile,page);
        if(renderResult.data){
            if(renderResult.last_page>0){
                const total = renderResult.last_page;
                let i;
                for (i = 0; i <total; i++) { 
                    let pg = i+1;
                    let result = yield call(onRenderRequestProfile,pg);
                    yield put(actions.pageCountProfileSuccess(result.data));
                }
                yield put(actions.dataProfileRendered());
            }
        }
    }catch(error){
        console.log("saga error page count "+error);
    }
}


export default function* rootSaga() {
    yield all([takeLatest(actions.RENDER_DATA_PROFILE,renderRequestProfile)]);
    yield all([takeLatest(actions.ADD_PROFILE,addRequestProfile)]);
    yield all([takeLatest(actions.EDIT_PROFILE,editRequestProfile)]);
    yield all([takeLatest(actions.PAGE_COUNT,pageCountRequestProfile)]);
}