import { all } from 'redux-saga/effects';
import table8 from '../redux/table8/sagas';

export default function* table8Saga() {
  yield all([table8()]);
}
