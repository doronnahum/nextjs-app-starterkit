import { all, call } from 'redux-saga/effects';
import tablesWatcher from 'src/store/tables/watcher';

function* rootSaga() {
  yield all([
    call(tablesWatcher, 'tablesWatcher')
  ]);
}

export default rootSaga;
