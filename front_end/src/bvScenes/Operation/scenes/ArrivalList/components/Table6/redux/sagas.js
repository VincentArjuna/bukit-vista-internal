import { all } from 'redux-saga/effects';
import table6 from '../redux/table6/sagas';

export default function* table6Saga() {
  yield all([table6()]);
}
