import { all, call } from 'redux-saga/effects';
// import { logoutWatcher } from 'src/store/user/saga';

function* rootSaga() {
  yield all([
    // call(logoutWatcher, 'logout')
  ]);
}

export default rootSaga;
