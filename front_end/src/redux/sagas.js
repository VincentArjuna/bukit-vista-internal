import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';

import table1Saga from '../bvScenes/Operation/scenes/ArrivalList/components/ArrivalTable/redux/sagas';

import bookingCurrentSaga from '../bvScenes/Operation/scenes/Booking/scenes/Current/redux/sagas';
import editCellSaga from '../bvScenes/Operation/scenes/ArrivalList/components/EditCell/redux/sagas';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    table1Saga(),
    bookingCurrentSaga(),
    editCellSaga(),
  ]);
}
