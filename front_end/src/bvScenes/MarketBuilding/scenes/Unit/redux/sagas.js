import { all } from 'redux-saga/effects';
import unit from './unit/sagas'

export default function* unitSaga() {
  yield all([unit()]);
}