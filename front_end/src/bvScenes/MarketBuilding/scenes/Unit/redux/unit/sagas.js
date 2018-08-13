import{all,takeLatest,put,call,takeEvery} from 'redux-saga/effects';
import actions from './actions';
import {stringify} from 'querystring';
const URL_AREA = 'https://internal.bukitvista.com/tools/api/unit';

const onRenderRequestUnit = async (param) =>
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

const onAddUnitRequest=async(param)=>
await fetch(`${URL_AREA}/add`, {
    method: 'POST',
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
    },
    body:stringify( 
    {
        'data[unit_name]':param[0],
        'data[unit_onboard_date]':param[1],
        'data[unit_base_price]':param[2],
        'data[unit_currency]':param[3],
        'data[unit_capacity]':param[4],
        'data[unit_number_room]':param[5],
        'data[unit_swimming_pool]':param[6],
        'data[unit_percentage_owner]':param[7],
        'data[unit_percentage_bv]':param[8],
        'data[property_id]':param[9],
     })
}).then(res=>res.json())
.then(res=>res)
.catch(error => error);

const onEditUnitRequest=async(param)=>
await fetch(`${URL_AREA}/update/${param[10]}`, {
    method: 'POST',
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
    },
    body:stringify( 
    {
        'data[unit_name]':param[0],
        'data[unit_onboard_date]':param[1],
        'data[unit_base_price]':param[2],
        'data[unit_currency]':param[3],
        'data[unit_capacity]':param[4],
        'data[unit_number_room]':param[5],
        'data[unit_swimming_pool]':param[6],
        'data[unit_percentage_owner]':param[7],
        'data[unit_percentage_bv]':param[8],
        'data[property_id]':param[9],
     })
}).then(res=>res.json())
.then(res=>res)
.catch(error => error);

function* renderRequestUnit({payload}){
    try{
        const param=[
            payload.filter_type,
            payload.filterer,
            payload.per_page,
            payload.page
        ];
        const renderResult = yield call(onRenderRequestUnit,param);
        if(renderResult.data){
            yield put(
                actions.renderDataUnitSuccess(renderResult.data,renderResult.total,renderResult.current_page)
            );
        }else{
            console.log("sad");
        }
    }catch(error){
        console.log("saga error unit : "+error);
    }
}

function* addUnit({payload}){
    try{
        const param=[
            payload.name,
            payload.onboard_date,
            payload.base_price,
            payload.currency,
            payload.capacity,
            payload.number_room,
            payload.swimming_pool,
            payload.pOwner,
            payload.pBv,
            payload.property_id,
        ];
        console.log(param);
        const renderResults=yield call(onAddUnitRequest,param);
        console.log(renderResults);

    }catch(error){
        console.log("saga error add unit: "+error)
    }
}
function* editUnit({payload}){
    try{
        const param=[
            payload.name,
            payload.onboard_date,
            payload.base_price,
            payload.currency,
            payload.capacity,
            payload.number_room,
            payload.swimming_pool,
            payload.pOwner,
            payload.pBv,
            payload.property_id,
            payload.unit_id
        ];
        console.log(param);
        const renderResults=yield call(onEditUnitRequest,param);
        console.log(renderResults);

    }catch(error){
        console.log("saga error add unit: "+error)
    }
}
export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA_UNIT,renderRequestUnit)]);
    yield all([takeLatest(actions.ADD_UNIT,addUnit)]);    
    yield all([takeLatest(actions.EDIT_UNIT,editUnit)]);    
}