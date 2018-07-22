import { all } from 'redux-saga/effects';
import table1 from '../redux/table1/sagas';

export default function* table1Saga() {
  yield all([table1()]);
}
