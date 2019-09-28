import { takeEvery } from 'redux-saga/effects';
import types from './types';

import updateTablesValues from './workers/updateTablesValues';

function* tablesWatcher() {
  yield takeEvery(types.UPDATE_TABLES_VALUES, updateTablesValues);

}
export default tablesWatcher;
