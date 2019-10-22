import { all, call } from 'redux-saga/effects';
import test from './test/test.saga';

import global from './global/global.saga';
import auth from './auth/auth.saga';

// Add your saga here
const rootSaga = function* rootSaga() {
  yield all([
    call(test, 'testWatcher'),
    call(global, 'global'),
    call(auth, 'authWatcher'),
  ]);
};

export default rootSaga;
