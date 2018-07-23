import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
const URL_AREA = 'http://localhost:8000/api/booking/';

const onRenderRequest = async (param) =>
    await fetch(`${URL_AREA}`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);

const onRenderRequestFilter = async (param,filter) =>
        await fetch(`${URL_AREA}${encodeURIComponent(filter)}/${encodeURIComponent(param)}`)
            .then(res=>res.json())
            .then(res=>res)
            .catch(error => error);
        
function* renderRequest({payload}){
    const {param} = payload;
    try{
        const renderResult =yield call(onRenderRequest,param);
        if(renderResult.data){
            yield put(
                actions.renderDataSuccessBc(renderResult.data)
            );
        }
    }catch(error){
        console.log("saga error");
    }
}

function* filterRequest({payload}){
    try{
        const renderResult = yield call(onRenderRequestFilter,payload.param,payload.filter);
        console.log(payload.param + '-oi-'+payload.filter);
        if(renderResult.data){
            console.log(renderResult.data);
            yield put(
                actions.renderDataSuccessBc(renderResult.data)
            );
        }
    }catch(error){
        console.log("error filter");
    }
}
export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA_BC,renderRequest)]);
    yield all([takeEvery(actions.FILTER_DATA_BC,filterRequest)]);
}
