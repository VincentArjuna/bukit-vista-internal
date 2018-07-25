import { all } from 'redux-saga/effects';
import table9 from '../redux/table9/sagas';

export default function* table9Saga() {
  yield all([table9()]);
}
