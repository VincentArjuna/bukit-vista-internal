import { all } from 'redux-saga/effects';
import bookingCurrent from './bookingCurrent/sagas';

export default function* bookingCurrentSaga() {
  yield all([bookingCurrent()]);
}
