import { all } from 'redux-saga/effects';
import table19 from '../redux/table19/sagas';

export default function* table19Saga() {
  yield all([table19()]);
}
