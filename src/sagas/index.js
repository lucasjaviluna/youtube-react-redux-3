import {takeLatest} from 'redux-saga';
import {fork} from 'redux-saga/effects';
import {usersFetchList, usersAdd, usersEdit, usersDelete} from './users';

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'usersFetchList', usersFetchList),
    fork(takeLatest, 'usersAdd', usersAdd),
    fork(takeLatest, 'usersEdit', usersEdit),
    fork(takeLatest, 'usersDelete', usersDelete)
  ];
}
