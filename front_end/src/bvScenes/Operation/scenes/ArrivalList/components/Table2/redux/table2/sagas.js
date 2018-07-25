import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
const URL_AREA = 'https://internal.bukitvista.com/tools/api/booking/';

const onRenderRequest = async (area,date) =>
    await fetch(`${URL_AREA}area/${encodeURIComponent(area)}/date/${encodeURIComponent(date)}`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);
const onRenderRequestFilter = async (param,filter) =>
    await fetch(`${URL_AREA}${encodeURIComponent(filter)}/${encodeURIComponent(param)}`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);
function* renderRequest({payload}){
    const {area} = payload;
    try{
        const renderResult = yield call(onRenderRequest,payload.area,payload.date);
        console.log('payload : '+ payload.area+'-'+payload.date);
        if(renderResult.data){
            yield put(
                actions.renderDataSuccess2(renderResult.data)
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
                actions.renderDataSuccess2(renderResults.data)
            );
        }
    }catch(error){
        console.log("error filter");
    }
}
export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA2,renderRequest)]);
    yield all([takeEvery(actions.FILTER_DATA_AL2,filterRequest)]);
}