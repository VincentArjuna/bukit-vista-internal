import { all } from 'redux-saga/effects';
import table7 from '../redux/table7/sagas';

export default function* table7Saga() {
  yield all([table7()]);
}
