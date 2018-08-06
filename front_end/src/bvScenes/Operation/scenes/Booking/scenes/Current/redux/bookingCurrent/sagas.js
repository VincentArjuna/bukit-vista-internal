import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
import { stringify } from 'querystring';

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

export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA_BC,renderRequest)]);
}
