import { all } from 'redux-saga/effects';
import arrivalList from './arrivalList/sagas';

export default function* arrivalListSaga() {
  yield all([arrivalList()]);
}
