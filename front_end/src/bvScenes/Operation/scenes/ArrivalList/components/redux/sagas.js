import { all } from 'redux-saga/effects';
import loadEmployee from '../redux/helperCells/sagas'

export default function* loadEmployeeSaga() {
  yield all([loadEmployee()]);
}
