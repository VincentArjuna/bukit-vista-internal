import { all } from 'redux-saga/effects';
import table13 from '../redux/table13/sagas';

export default function* table13Saga() {
  yield all([table13()]);
}
