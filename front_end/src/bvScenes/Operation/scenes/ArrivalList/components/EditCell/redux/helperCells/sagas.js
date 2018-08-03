import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';

const URL_AREA = 'https://internal.bukitvista.com/tools/api/employee';

const onRenderRequest = async () =>
    await fetch(`${URL_AREA}`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);
        
function* renderRequest({}){
    try{
        const renderResult = yield call(onRenderRequest);
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
    yield all([takeEvery(actions.RENDER_DATA_EMPLOYEE,renderRequest)]);
}