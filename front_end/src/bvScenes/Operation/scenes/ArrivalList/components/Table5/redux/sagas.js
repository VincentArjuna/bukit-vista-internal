import { all } from 'redux-saga/effects';
import table5 from '../redux/table5/sagas';

export default function* table5Saga() {
  yield all([table5()]);
}
