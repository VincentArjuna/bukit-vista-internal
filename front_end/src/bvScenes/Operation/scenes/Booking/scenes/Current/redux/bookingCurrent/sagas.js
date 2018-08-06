import{all,takeEvery,put,call} from 'redux-saga/effects';

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
            'data[booking_received_timestamp]':moment().format('YYYY-MM-DD').toString(),
            'data[listing_id]':param[12],
        })
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);

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
        const renderResults =yield call(onAddBookingRequest,param);
        console.log(renderResults);
        
    }catch(error){
        console.log("saga error : "+error);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA_BC,renderRequest)]);
    yield all([takeEvery(actions.ADD_BOOKING,addBooking)]);
}
