import { all } from 'redux-saga/effects';
import table16 from '../redux/table16/sagas';

export default function* table16Saga() {
  yield all([table16()]);
}
