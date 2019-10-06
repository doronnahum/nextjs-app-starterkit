import { takeEvery } from 'redux-saga/effects';
import types from './types';

import calculateSavings from './workers/calculateSavings';

function* tablesWatcher() {
  yield takeEvery(types.CALCULATE_SAVINGS, calculateSavings);

}
export default tablesWatcher;
