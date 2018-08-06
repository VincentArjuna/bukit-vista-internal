import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
import { stringify } from 'querystring';

const URL_AREA = 'https://internal.bukitvista.com/tools/api/';

const onRenderRequestEmployee = async () =>
    await fetch(`${URL_AREA}employee`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);

const onEditRequestBookingEmployee = async (param) =>
        await fetch(`${URL_AREA}be_store`, {
            method: 'POST',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
            },
            body:stringify( 
            { 'data[booking_id]': param[0],
              'data[employee_id]': param[1],
              'data[be_role]': param[2],
            })
        }).then(res=>res.json())
        .then(res=>res)
        .catch(error => error);

const onEditRequestBooking = async(param)=>
    await fetch(`${URL_AREA}booking/update`, {
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
        'data[booking_guest_status]': param[4] })
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);
                

function* editRequestBooking({payload}){
    try{
        const param=[
            payload.updateType,
            payload.booking_id,
            payload.booking_check_out,
            payload.booking_guest_eta,
            payload.booking_guest_status,
        ];
        yield call(onEditRequestBooking,param);
    }catch(error){
        console.log("saga error");
    }
}
function* editRequestBookingEmployee({payload}){
    try{
        const param=[
            payload.booking_id,
            payload.employee_id,
            payload.be_role
        ];
        yield call(onEditRequestBookingEmployee,param);
        
    }catch(error){
        console.log("saga error");
    }
}
function* renderRequestEmployee({}){
    try{
        const renderResult = yield call(onRenderRequestEmployee);
        if(renderResult.data){
            yield put(
                actions.renderDataEmployeeSuccess(renderResult.data)
            );
        }
    }catch(error){
        console.log("saga error");
    }
}



export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA_EMPLOYEE,renderRequestEmployee)]);
    yield all([takeEvery(actions.EDIT_BOOKING,editRequestBooking)]);
    yield all([takeEvery(actions.EDIT_BOOKING_EMPLOYEE,editRequestBookingEmployee)]);
}