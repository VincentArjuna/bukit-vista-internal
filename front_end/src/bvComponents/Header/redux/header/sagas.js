import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';

const URL_AREA = 'https://internal.bukitvista.com/tools/api/booking/';


const onRenderRequest = async (date) =>
    await fetch(`${URL_AREA}${date}/download`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);

function* renderRequest({payload}){
    try{
        const renderResult = yield call(onRenderRequest,payload.date);
        // if(renderResult.data){
        //     yield put(
        //         actions.renderDataSuccess1(renderResult.data)
        //     );
        // }
    }catch(error){
        console.log("saga error");
    }
}
export default function* rootSaga() {
    yield all([takeEvery(actions.GET_CSV,renderRequest)]);
}
        