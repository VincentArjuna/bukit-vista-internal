import{all,takeEvery,put,call} from 'redux-saga/effects';
import actions from './actions';

const URL_AREA = 'https://internal.bukitvista.com/tools/api/listing';

const onRenderRequestListing = async () =>
    await fetch(`${URL_AREA}`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(error => error);
                
function* renderRequestListing({}){
    try{
        console.log("Hello");
        const renderResult = yield call(onRenderRequestListing);
        console.log(renderResult);
        if(renderResult.data){
            yield put(
                actions.renderDataListingSuccess(renderResult.data)
            );
        }else{
            console.log("sad");
        }
    }catch(error){
        console.log("saga error");
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actions.RENDER_DATA_LISTING,renderRequestListing)]);
}