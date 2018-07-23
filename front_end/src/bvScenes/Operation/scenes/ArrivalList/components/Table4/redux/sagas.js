import { all } from 'redux-saga/effects';
import table4 from '../redux/table4/sagas';

export default function* table4Saga() {
  yield all([table4()]);
}
