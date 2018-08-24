import { all } from 'redux-saga/effects';
import invoice from './invoice/saga';

export default function* invoiceSaga() {
  yield all([invoice()]);
}