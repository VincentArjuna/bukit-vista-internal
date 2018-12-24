import { all } from 'redux-saga/effects';
import property from './property/sagas'

export default function* propertySaga() {
  yield all([property()]);
}