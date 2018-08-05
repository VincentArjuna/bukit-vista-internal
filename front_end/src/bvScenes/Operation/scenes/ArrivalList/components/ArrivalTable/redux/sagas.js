import { all } from 'redux-saga/effects';
import arrivalTable from '../redux/arrivalTable/sagas';

export default function* arrivalTableSaga() {
  yield all([arrivalTable()]);
}
