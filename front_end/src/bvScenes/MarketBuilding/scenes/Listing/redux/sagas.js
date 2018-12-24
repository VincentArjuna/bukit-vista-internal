import { all } from 'redux-saga/effects';
import listing from './listing/sagas'

export default function* listingSaga() {
  yield all([listing()]);
}