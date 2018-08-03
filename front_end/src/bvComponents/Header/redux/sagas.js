import { all } from 'redux-saga/effects';
import header from './header/sagas';

export default function* headerSaga() {
  yield all([header()]);
}
