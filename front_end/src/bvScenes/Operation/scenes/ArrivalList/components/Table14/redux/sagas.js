import { all } from 'redux-saga/effects';
import table14 from '../redux/table14/sagas';

export default function* table14Saga() {
  yield all([table14()]);
}
