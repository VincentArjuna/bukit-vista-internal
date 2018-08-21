import{all,takeLatest,put,call} from 'redux-saga/effects';
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

const onAddRequestEmployee = async (param) =>
    await fetch(`${URL_AREA}employee/add`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        {   
            'data[employee_name]': param[0],
            'data[employee_address]': param[1],
            'data[employee_phone]': param[2],
            'data[employee_status]': param[3],
        })
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);

const onEditRequestEmployee = async (param) =>
    await fetch(`${URL_AREA}employee/update`, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        body:stringify( 
        {   
            'data[employee_name]': param[0],
            'data[employee_address]': param[1],
            'data[employee_phone]': param[2],
            'data[employee_status]': param[3],
            'data[employee_id]':param[4]
        })
    }).then(res=>res.json())
    .then(res=>res)
    .catch(error => error);
    
function* editRequestBookingEmployee({payload}){
    try{
        const param=[
            payload.booking_id,
            payload.employee_id,
            payload.be_role
        ];
        const renderResult=yield call(onEditRequestBookingEmployee,param);
        if(renderResult){
            yield put(actions.editBookingEmployeeResponse("success",payload.type));
        }
        
    }catch(error){
        console.log("saga error");
    }
}
function* renderRequestEmployee({}){
    try{
        const renderResult = yield call(onRenderRequestEmployee);
        if(renderResult.data){
            yield put(actions.renderDataEmployeeSuccess(renderResult.data));
        }
    }catch(error){
        console.log("saga error");
    }
}
function* addRequestEmployee({payload}){
    try{
        const param=[
            payload.name,
            payload.address,
            payload.phone,
            payload.status
        ];
        yield call(onAddRequestEmployee,param);

    }catch(error){
        console.log("saga add employee error");
    }
}
function* editRequestEmployee({payload}){
    try{
        const param=[
            payload.name,
            payload.address,
            payload.phone,
            payload.status,
            payload.id
        ];
        yield call(onEditRequestEmployee,param);

    }catch(error){
        console.log("saga edit employee error");
    }
}



export default function* rootSaga() {
    yield all([takeLatest(actions.RENDER_DATA_EMPLOYEE,renderRequestEmployee)]);
    yield all([takeLatest(actions.EDIT_BOOKING_EMPLOYEE,editRequestBookingEmployee)]);
    yield all([takeLatest(actions.ADD_EMPLOYEE,addRequestEmployee)]);
    yield all([takeLatest(actions.EDIT_EMPLOYEE,editRequestEmployee)]);
}