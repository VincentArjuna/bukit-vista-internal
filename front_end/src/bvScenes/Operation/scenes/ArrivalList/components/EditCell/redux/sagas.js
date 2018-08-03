import { all } from 'redux-saga/effects';
import loadEmployee from './helperCells/sagas'

export default function* loadEmployeeSaga() {
  yield all([loadEmployee()]);
}
