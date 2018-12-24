import { all } from 'redux-saga/effects';
import employee from './employee/sagas';

export default function* employeeSaga() {
  yield all([employee()]);
}