import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';

const URL_AREA = 'http://localhost:8000/api/';

const onRenderRequest = async (area) =>
    await fetch(`${URL_AREA}booking/area/${area}`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);
        
function* renderRequest({payload}){
    try{
        const renderResult = yield call(onRenderRequest,payload.area);
        console.log('payload : '+ payload.area);
        if(renderResult.results.data){
            yield put(
                actions.renderDataSuccess1(renderResult.results.data)
            );
        }else{
            console.log(renderResult);
        }
    }catch(error){
        console.log("saga error");
    }
}
export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA1,renderRequest)]);
}