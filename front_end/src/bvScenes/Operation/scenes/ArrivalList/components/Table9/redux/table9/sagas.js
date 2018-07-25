import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';
const URL_AREA = 'https://internal.bukitvista.com/tools/api/booking/';
console.log(URL_AREA);

const onRenderRequest = async (area,date) =>
await fetch(`${URL_AREA}area/${encodeURIComponent(area)}/date/${encodeURIComponent(date)}`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);
        
function* renderRequest({payload}){
    const {area} = payload;
    try{
        const renderResult = yield call(onRenderRequest,payload.area,payload.date);
        if(renderResult.data){
            yield put(
                actions.renderDataSuccess9(renderResult.data)
            );
        }
    }catch(error){
        console.log("saga error");
    }
}
export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA9,renderRequest)]);
}