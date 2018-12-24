import { all } from 'redux-saga/effects';
import notes from '../redux/notes/saga';

export default function* notesSaga() {
  yield all([notes()]);
}
