import { all } from 'redux-saga/effects';
import table11 from '../redux/table11/sagas';

export default function* table11Saga() {
  yield all([table11()]);
}
