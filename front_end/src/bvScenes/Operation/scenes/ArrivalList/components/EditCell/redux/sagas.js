import { all } from 'redux-saga/effects';
import editCell from './editCell/sagas'

export default function* editCellSaga() {
  yield all([editCell()]);
}
