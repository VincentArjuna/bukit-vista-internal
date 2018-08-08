import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';

import arrivalTableSaga from '../bvScenes/Operation/scenes/ArrivalList/components/ArrivalTable/redux/sagas';

import bookingCurrentSaga from '../bvScenes/Operation/scenes/Booking/scenes/Current/redux/sagas';
import employeeSaga from '../bvScenes/ResourcesManagement/scenes/Employee/redux/sagas';
import listingSaga from '../bvScenes/MarketBuilding/scenes/Listing/redux/sagas';
import unitSaga from '../bvScenes/MarketBuilding/scenes/Unit/redux/sagas';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    arrivalTableSaga(),
    bookingCurrentSaga(),
    employeeSaga(),
    listingSaga(),
    unitSaga(),
  ]);
}
