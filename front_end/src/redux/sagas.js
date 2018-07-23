import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import contactSagas from './contacts/saga';
import invoicesSagas from './invoice/saga';
import mailSagas from './mail/saga';
import notesSagas from './notes/saga';
import todosSagas from './todos/saga';
import ecommerceSaga from './ecommerce/saga';
import cardsSagas from './card/saga';
import chatSagas from './chat/sagas';
import youtubeSearchSagas from './youtubeSearch/sagas';
import devSagas from '../customApp/redux/sagas';
import articles from './articles/sagas';
import investors from './investors/sagas';

import table1Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table1/redux/sagas';
import table2Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table2/redux/sagas';
import table3Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table3/redux/sagas';
import table4Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table4/redux/sagas';
import table5Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table5/redux/sagas';
import bookingCurrentSaga from '../bvScenes/Operation/scenes/Booking/scenes/Current/redux/sagas';
import loadEmployeeSaga from '../bvScenes/Operation/scenes/ArrivalList/components/redux/sagas';
//import arrivalListSaga from '../bvScenes/Operation/scenes/ArrivalList/redux/sagas';import table1Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table1/redux/sagas';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    contactSagas(),
    mailSagas(),
    notesSagas(),
    todosSagas(),
    ecommerceSaga(),
    cardsSagas(),
    invoicesSagas(),
    chatSagas(),
    youtubeSearchSagas(),
    devSagas(),
    articles(),
    investors(),
    table1Saga(),
    table2Saga(),
    table3Saga(),
    table4Saga(),
    table5Saga(),
    bookingCurrentSaga(),
    loadEmployeeSaga(),
    //arrivalListSaga(),
  ]);
}
