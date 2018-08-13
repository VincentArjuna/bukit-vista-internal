import{all,takeEvery,put,call,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';
import { stringify } from 'querystring';
import moment from'moment';
const URL_BOOKING = 'https://internal.bukitvista.com/tools/api/booking';

const onRenderRequest = async (param) =>
    await fetch(`${URL_BOOKING}?page=${param[4]}`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        {
          'data[date]': param[0],
          'data[filterer]': param[1],
          'data[date_type]':param[2],
          'data[filter_type]': param[3]})
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);

const onAddBookingRequest=async(param)=>
    await fetch(`${URL_BOOKING}/add`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        {
            'data[booking_id]':param[0],
            'data[booking_guest_name]':param[1],
            'data[booking_status]':1,
            'data[booking_check_in]':param[2],
            'data[booking_check_out]':param[3],
            'data[booking_guest_number]':param[4],
            'data[booking_guest_phone]':param[5],
            'data[booking_guest_eta]':param[6],
            'data[booking_guest_status]':0,
            'data[booking_comm_channel]':param[7],
            'data[booking_earned]':param[8],
            'data[booking_currency]':param[9],
            'data[booking_source]':param[10],
            'data[booking_conversation_url]':param[11],
            'data[booking_received_timestamp]':moment().format('YYYY-MM-DD HH:mm:ss').toString(),
            'data[listing_id]':param[12],
        })
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);

const onEditRequestBooking = async(param)=>
    await fetch(`${URL_BOOKING}/update`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        { 'data[update_type]': param[0],
        'data[booking_id]': param[1],
        'data[booking_check_out]': param[2],
        'data[booking_guest_eta]':param[3],
        'data[booking_guest_status]': param[4],
        'data[booking_guest_phone]':param[5],
        'data[booking_comm_channel]':param[6],
        'data[booking_notes]':param[7]
     })
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);

    const onEditAllRequestBooking = async(param)=>
    await fetch(`${URL_BOOKING}/update`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        {
        'data[update_type]': param[0],
        'data[booking_id]': param[1],
        'data[booking_status]': param[2],
        'data[booking_guest_name]': param[3],
        'data[booking_check_in]': param[4],
        'data[booking_check_out]': param[5],
        'data[booking_guest_number]':param[6],
        'data[booking_guest_phone]':param[7],
        'data[booking_guest_eta]':param[8],
        'data[booking_comm_channel]':param[9],
        'data[booking_earned]':param[10],
        'data[booking_currency]':param[11],
        'data[booking_source]':param[12],
        'data[booking_conversation_url]':param[13],
        'data[listing_id]':param[14],
     })
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);
                
const onDownloadRequest=async(param)=>
    axios({
        url:`${URL_BOOKING}/${param}/download`,
        method: 'GET',
        responseType: 'blob', // important
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download',`CHECKIN_${param}.csv`);
        document.body.appendChild(link);
        link.click();
    });
  
function* downloadCsv({payload}){
    try{
        const param = payload.date;
        yield call(onDownloadRequest,param);
    }catch(error){
        console.log("Error Download : "+error)
    }
}
function* renderRequest({payload}){
    try{
        const param=[
            payload.date,
            payload.filterer,
            payload.date_type,
            payload.filter_type,
            payload.page
        ];
        const renderResults =yield call(onRenderRequest,param);
        if(renderResults.data){
            console.log(renderResults);
            yield put(
                actions.renderDataSuccessBc(
                    renderResults.data,
                    renderResults.total,
                    renderResults.current_page,
                )
            );
        }
    }catch(error){
        console.log("saga error");
    }
}

function* addBooking({payload}){
    try{
       
        const param=[
            payload.booking_id,
            payload.name,
            payload.check_in,
            payload.check_out,
            payload.number,
            payload.phone,
            payload.eta,
            payload.comm,
            payload.earned,
            payload.currency,
            payload.source,
            payload.conversation,
            payload.listing_id,
        ];
        console.log(param);
        const renderResults =yield call(onAddBookingRequest,param);
        console.log(renderResults);
        
    }catch(error){
        console.log("saga error : "+error);
    }
}
function* editRequestBooking({payload}){
    try{
        const param=[
            payload.updateType,
            payload.booking_id,
            payload.booking_check_out,
            payload.booking_guest_eta,
            payload.booking_guest_status,
            payload.booking_guest_phone,
            payload.booking_comm_channel,
            payload.booking_notes
        ];
        console.log(param);
        yield call(onEditRequestBooking,param);
    }catch(error){
        console.log("saga error");
    }
}
function* editAllRequestBooking({payload}){
    try{
        const param=[
            payload.updateType,
            payload.booking_id,
            payload.booking_status,
            payload.name,
            payload.check_in,
            payload.check_out,
            payload.number,
            payload.phone,
            payload.eta,
            payload.comm,
            payload.earned,
            payload.currency,
            payload.source,
            payload.conversation,
            payload.listing,
        ];
        console.log(param);
        yield call(onEditAllRequestBooking,param);
    }catch(error){
        console.log("saga error");
    }
}
export default function* rootSaga() {
    yield all([takeLatest(actions.EDIT_BOOKING,editRequestBooking)]);
    yield all([takeLatest(actions.EDIT_BOOKING_ALL,editAllRequestBooking)]);
    yield all([takeLatest(actions.RENDER_DATA_BC,renderRequest)]);
    yield all([takeLatest(actions.ADD_BOOKING,addBooking)]);
    yield all([takeLatest(actions.DOWNLOAD_CSV,downloadCsv)]);
}
