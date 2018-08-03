import { all } from 'redux-saga/effects';
import table20 from '../redux/table20/sagas';

export default function* table20Saga() {
  yield all([table20()]);
}
