import { all } from 'redux-saga/effects';
import table2 from '../redux/table2/sagas';

export default function* table2Saga() {
  yield all([table2()]);
}
