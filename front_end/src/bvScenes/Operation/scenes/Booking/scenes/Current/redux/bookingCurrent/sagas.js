import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
const URL_AREA = 'https://internal.bukitvista.com/tools/api/booking/';

const onRenderRequest = async () =>
    await fetch(`${URL_AREA}`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);

const onRenderRequestFilter = async (param,filter) =>
        await fetch(`${URL_AREA}${encodeURIComponent(filter)}/${encodeURIComponent(param)}`)
            .then(res=>res.json())
            .then(res=>res)
            .catch(error => error);
        
function* renderRequest(){
    try{
        const renderResults =yield call(onRenderRequest);
        if(renderResults.data){
            yield put(
                actions.renderDataSuccessBc(renderResults.data)
            );
        }
    }catch(error){
        console.log("saga error");
    }
}

function* filterRequest({payload}){
    try{
        const {param,filter}=payload;
        const renderResults = yield call(onRenderRequestFilter,param,filter);
        console.log(renderResults);
        if(renderResults.data){
            console.log(renderResults.data);
            yield put(
                actions.renderDataSuccessBc(renderResults.data)
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
