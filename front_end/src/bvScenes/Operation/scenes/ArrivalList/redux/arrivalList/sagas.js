import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';
import apiUrl from '../../../../../../settings';

const URL_AREA = apiUrl + '/booking/area/';

const onRenderRequest = async (area) =>
    await fetch(`${URL_AREA}booking/area/${area}`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);
        
function* renderRequest({payload}){
    const {area} = payload;
    try{
        const renderResult = yield call(onRenderRequest,area);
        if(renderResult){
            yield put(
                actions.parseArea(
                    renderResult.data
                )
            );
        }
    }catch(error){
        console.log("saga error");
    }
}
export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_AREA,actions.LOAD_AREA,renderRequest)]);
}