import { all, call } from 'redux-saga/effects';
import { crudReduxSaga } from 'net-provider';
import example from './example/example.saga';


import global from './global/global.saga';
import auth from './auth/auth.saga';

// Add your saga here
const rootSaga = function* rootSaga() {
  yield all([
    call(crudReduxSaga, 'crudReduxSaga'),
    call(example, 'exampleWatcher'),
    call(global, 'global'),
    call(auth, 'authWatcher'),
  ]);
};

export default rootSaga;
