import { all } from 'redux-saga/effects';
import table15 from '../redux/table15/sagas';

export default function* table15Saga() {
  yield all([table15()]);
}
