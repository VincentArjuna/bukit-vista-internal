import { all } from 'redux-saga/effects';
import table12 from '../redux/table12/sagas';

export default function* table12Saga() {
  yield all([table12()]);
}
