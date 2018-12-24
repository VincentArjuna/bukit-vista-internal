import{all,takeEvery,put,call, takeLatest} from 'redux-saga/effects';
import actions from './actions';
import {stringify} from 'querystring';
const URL_AREA = 'https://internal.bukitvista.com/tools/api/listing';

const onRenderRequestListing = async(param) =>
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

const onAddListingRequest=async(param)=>
    await fetch(`${URL_AREA}/add`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        {
            'data[listing_id]':param[0],
            'data[listing_name]':param[1],
            'data[listing_onboard_date]':param[2],
            'data[listing_status]':param[3],
            'data[listing_instant_book]':param[4],
            'data[listing_account_owner]':param[5],
            'data[listing_account_bv]':param[6],
            'data[listing_remark]':param[7],
            'data[unit_id]':param[8],
            'data[profile_id]':param[9],
            'data[employee_id]':param[10],
        })
    })
    .then(res=>res)
    .catch(error => error);

const onEditListingRequest=async(param)=>
    await fetch(`${URL_AREA}/update`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        {
            'data[listing_name]':param[1],
            'data[listing_onboard_date]':param[2],
            'data[listing_status]':param[3],
            'data[listing_instant_book]':param[4],
            'data[listing_account_owner]':param[5],
            'data[listing_account_bv]':param[6],
            'data[listing_remark]':param[7],
            'data[unit_id]':param[8],
            'data[profile_id]':param[9],
            'data[employee_id]':param[10],
            'data[listing_id]':param[0]
        })
    })
    .then(res=>res)
    .catch(error => error);

function* renderRequestListing({payload}){
    try{
        const param=[
            payload.filter_type,
            payload.filterer,
            payload.per_page,
            payload.page
        ];
        console.log(param);
        const renderResult = yield call(onRenderRequestListing,param);
        if(renderResult.data){
            yield put(
                actions.renderDataListingSuccess(renderResult.data,renderResult.total,renderResult.current_page)
            );
        }else{
            console.log("sad");
        }
    }catch(error){
        console.log("saga error listing : "+error);
    }
}
function* addListing({payload}){
    try{
        const param=[
            payload.id,
            payload.name,
            payload.date,
            payload.status,
            payload.instant_book,
            payload.accO,
            payload.accB,
            payload.remark,
            payload.unit,
            payload.profile,
            payload.employee
        ];
        console.log(param);
        const renderResults=yield call(onAddListingRequest,param);
        if(renderResults.status===200){
            yield put(actions.addListingResponse("success"));
        }else{
            yield put(actions.addListingResponse("error"));
        }
        console.log(renderResults);

    }catch(error){
        console.log("saga error add listing: "+error)
    }
}

function* editListing({payload}){
    try{
        const param=[
            payload.id,
            payload.name,
            payload.date,
            payload.status,
            payload.instant_book,
            payload.accO,
            payload.accB,
            payload.remark,
            payload.unit,
            payload.profile,
            payload.employee
        ];
        console.log(param);
        const renderResults= yield call(onEditListingRequest,param);
        if(renderResults.status===200){
            yield put(actions.editListingResponse("success"));
        }else{
            yield put(actions.editListingResponse("error"));
        }
        console.log(renderResults);

    }catch(error){
        console.log("saga error add listing: "+error)
    }    
}
export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA_LISTING,renderRequestListing)]);
    yield all([takeLatest(actions.ADD_LISTING,addListing)]);
    yield all([takeLatest(actions.EDIT_LISTING,editListing)]);
}