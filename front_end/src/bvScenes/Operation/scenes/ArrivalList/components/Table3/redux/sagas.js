import { all } from 'redux-saga/effects';
import table3 from '../redux/table3/sagas';

export default function* table3Saga() {
  yield all([table3()]);
}
