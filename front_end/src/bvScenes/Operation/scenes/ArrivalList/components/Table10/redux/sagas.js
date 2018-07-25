import { all } from 'redux-saga/effects';
import table10 from '../redux/table10/sagas';

export default function* table10Saga() {
  yield all([table10()]);
}
