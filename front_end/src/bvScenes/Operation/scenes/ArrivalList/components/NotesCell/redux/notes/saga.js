import { all, takeEvery, fork } from 'redux-saga/effects';
import actions from './actions';

function* changedTodo() {
  yield takeEvery(actions.CHANGE_TODO, function*() {});
}
export default function* rootSaga() {
  yield all([fork(changedTodo)]);
}
