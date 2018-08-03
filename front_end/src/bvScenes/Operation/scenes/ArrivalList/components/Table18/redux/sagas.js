import { all } from 'redux-saga/effects';
import table18 from '../redux/table18/sagas';

export default function* table18Saga() {
  yield all([table18()]);
}
