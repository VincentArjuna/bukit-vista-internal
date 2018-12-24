import{all,takeLatest,put,call} from 'redux-saga/effects';
import actions from './actions';
import { stringify } from 'querystring';

const URL_AREA = 'https://internal.bukitvista.com/tools/api/';
//ini contoh perubahan
const onRenderRequestEmployee = async (param) =>
    await fetch(`${URL_AREA}employee?page=${param}`)
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
function* renderRequestEmployee({payload}){
    try{
        const param = payload.page;
        const renderResult = yield call(onRenderRequestEmployee,param);
        
        if(renderResult.data){
            console.log(renderResult.last_page);
            yield put(actions.renderDataEmployeeSuccess(renderResult.data,renderResult.total,renderResult.current_page));
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
function* pageCountRequestEmployee({payload}){
    try{
       
        const page =1;
        const renderResult = yield call(onRenderRequestEmployee,page);
        if(renderResult.data){
            console.log("page count employee");
            if(renderResult.last_page>0){
                console.log(renderResult.last_page);
                const total = renderResult.last_page;
                let i;
                for (i = 0; i <total; i++) { 
                    let pg = i+1;
                    let result = yield call(onRenderRequestEmployee,pg);
                    console.log(result.data);
                    yield put(actions.pageCountEmployeeSuccess(result.data));
                }
                yield put(actions.dataEmployeeRendered());
            }
        }
    }catch(error){
        console.log("saga error page count "+error);
    }
}



export default function* rootSaga() {
    yield all([takeLatest(actions.RENDER_DATA_EMPLOYEE,renderRequestEmployee)]);
    yield all([takeLatest(actions.EDIT_BOOKING_EMPLOYEE,editRequestBookingEmployee)]);
    yield all([takeLatest(actions.ADD_EMPLOYEE,addRequestEmployee)]);
    yield all([takeLatest(actions.EDIT_EMPLOYEE,editRequestEmployee)]);
    yield all([takeLatest(actions.PAGE_COUNT_EMPLOYEE,pageCountRequestEmployee)]);
}