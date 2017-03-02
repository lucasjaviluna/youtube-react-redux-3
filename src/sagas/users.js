import {call, put} from 'redux-saga/effects';
import ApiUsers from '../api/users';

export function* usersFetchList(action) {
  //call api to get users
  const users = yield call(ApiUsers.getList);

  //dispatch the success action with the users attached
  yield put({
    type: 'users.fetchListSuccess',
    users: users
  })
}

export function* usersAdd(action) {
  yield call(ApiUsers.add, action);
}

export function* usersEdit(action) {
  yield call(ApiUsers.edit, action);
}

export function* usersDelete(action) {
  yield call(ApiUsers.delete, action);
}
