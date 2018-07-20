import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
import apiUrl from '../../../../../../settings';
import axios from 'axios';
const URL_AREA = 'http://localhost:8000/api/';
console.log(URL_AREA);

const onRenderRequest = async (area) =>
    await fetch(`${URL_AREA}booking/area/${area}`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);
        
function* renderRequest({payload}){
    const {area} = payload;
    try{
        const renderResult = yield call(onRenderRequest,area);
        if(renderResult.data){
            yield put(
                actions.renderDataSuccess(renderResult.data)
            );
        }
    }catch(error){
        console.log("saga error");
    }
}
export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA,renderRequest)]);
}