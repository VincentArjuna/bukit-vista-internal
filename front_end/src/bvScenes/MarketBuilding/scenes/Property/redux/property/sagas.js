import{all,takeLatest,put,call,takeEvery} from 'redux-saga/effects';
import actions from './actions';
import {stringify} from 'querystring';
const URL_AREA = 'https://internal.bukitvista.com/tools/api/property';

const onRenderRequestProperty = async (param) =>
await fetch(`${URL_AREA}?page=${param[3]}`, {
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

const onAddPropertyRequest=async(param)=>
await fetch(`${URL_AREA}/add`, {
    method: 'POST',
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
    },
    body:stringify( 
    {
        'data[property_name]':param[0],
        'data[property_type]':param[1],
        'data[property_status]':param[2],
        'data[property_package]':param[3],
        'data[property_design]':param[4],
        'data[property_proximity]':param[5],
        'data[property_life_support]':param[6],
        'data[property_service]':param[7],
        'data[property_owner_group_link]':param[8],
        'data[area_id]':param[9],
        'data[employee_id]':param[10],
     })
}).then(res=>res.json())
.then(res=>res)
.catch(error => error);

const onEditPropertyRequest=async(param)=>
await fetch(`${URL_AREA}/update`, {
    method: 'POST',
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
    },
    body:stringify( 
    {
        'data[property_name]':param[0],
        'data[property_type]':param[1],
        'data[property_status]':param[2],
        'data[property_package]':param[3],
        'data[property_design]':param[4],
        'data[property_proximity]':param[5],
        'data[property_life_support]':param[6],
        'data[property_service]':param[7],
        'data[property_owner_group_link]':param[8],
        'data[area_id]':param[9],
        'data[employee_id]':param[10],
        'data[property_id]':param[11]
     })
}).then(res=>res.json())
.then(res=>res)
.catch(error => error);

function* renderRequestProperty({payload}){
    try{
        const param=[
            payload.filter_type,
            payload.filterer,
            payload.per_page,
            payload.page
        ];
        console.log(param);
        const renderResult = yield call(onRenderRequestProperty,param);
        if(renderResult.data){
            yield put(
                actions.renderDataPropertySuccess(renderResult.data,renderResult.total,renderResult.current_page)
            );
        }else{
            console.log("sad");
        }
    }catch(error){
        console.log("saga error property : "+error);
    }
}
function* addProperty({payload}){
    try{
        const param=[
            payload.name,
            payload.type,
            payload.status,
            payload.prop_package,
            payload.design,
            payload.proximity,
            payload.life_support,
            payload.service,
            payload.owner_group_link,
            payload.area_id,
            payload.employee_id
        ];
        console.log(param);
        const renderResults=yield call(onAddPropertyRequest,param);
        console.log(renderResults);

    }catch(error){
        console.log("saga error add listing: "+error)
    }
}
function* editProperty({payload}){
    try{
        const param=[
            payload.name,
            payload.type,
            payload.status,
            payload.prop_package,
            payload.design,
            payload.proximity,
            payload.life_support,
            payload.service,
            payload.owner_group_link,
            payload.area_id,
            payload.employee_id,
            payload.property_id
        ];
        console.log(param);
        const renderResults=yield call(onEditPropertyRequest,param);
        console.log(renderResults);

    }catch(error){
        console.log("saga error add listing: "+error)
    }
}
export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA_PROPERTY,renderRequestProperty)]);
    yield all([takeLatest(actions.ADD_PROPERTY,addProperty)]);
    yield all([takeLatest(actions.EDIT_PROPERTY,editProperty)]);
}