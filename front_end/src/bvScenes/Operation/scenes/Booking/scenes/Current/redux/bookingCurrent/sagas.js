import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
const URL_AREA = 'http://localhost:8000/api/';
console.log(URL_AREA);

const onRenderRequest = async (param) =>
    await fetch(`${URL_AREA}booking/`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);
        
function* renderRequest({payload}){
    const {param} = payload;
    try{
        const renderResult = yield call(onRenderRequest,param);
        if(renderResult.data){
            yield put(
                actions.renderDataSuccessBc(renderResult.data)
            );
        }
    }catch(error){
        console.log("saga error");
    }
}
export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA_BC,renderRequest)]);
}
