import { all } from 'redux-saga/effects';
import table17 from '../redux/table17/sagas';

export default function* table17Saga() {
  yield all([table17()]);
}
