import { all } from 'redux-saga/effects';
import table21 from '../redux/table21/sagas';

export default function* table21Saga() {
  yield all([table21()]);
}
