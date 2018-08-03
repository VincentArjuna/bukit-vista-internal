import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';

import table1Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table1/redux/sagas';
import table2Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table2/redux/sagas';
import table3Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table3/redux/sagas';
import table4Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table4/redux/sagas';
import table5Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table5/redux/sagas';
import table6Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table6/redux/sagas';
import table7Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table7/redux/sagas';
import table8Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table8/redux/sagas';
import table9Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table9/redux/sagas';
import table10Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table10/redux/sagas';
import table11Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table11/redux/sagas';
import table12Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table12/redux/sagas';
import table13Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table13/redux/sagas';
import table14Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table14/redux/sagas';
import table15Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table15/redux/sagas';
import table16Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table16/redux/sagas';
import table17Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table17/redux/sagas';
import table18Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table18/redux/sagas';
import table19Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table19/redux/sagas';
import table20Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table20/redux/sagas';
import table21Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table21/redux/sagas';

import bookingCurrentSaga from '../bvScenes/Operation/scenes/Booking/scenes/Current/redux/sagas';
import loadEmployeeSaga from '../bvScenes/Operation/scenes/ArrivalList/components/redux/sagas';
import headerSaga from '../bvComponents/Header/redux/sagas';
//import arrivalListSaga from '../bvScenes/Operation/scenes/ArrivalList/redux/sagas';import table1Saga from '../bvScenes/Operation/scenes/ArrivalList/components/Table1/redux/sagas';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    table1Saga(),
    table2Saga(),
    table3Saga(),
    table4Saga(),
    table5Saga(),
    table6Saga(),
    table7Saga(),
    table8Saga(),
    table9Saga(),
    table10Saga(),
    table11Saga(),
    table12Saga(),
    table13Saga(),
    table14Saga(),
    table15Saga(),
    table16Saga(),
    table17Saga(),
    table18Saga(),
    table19Saga(),
    table20Saga(),
    table21Saga(),
    bookingCurrentSaga(),
    loadEmployeeSaga(),
    //arrivalListSaga(),
  ]);
}
