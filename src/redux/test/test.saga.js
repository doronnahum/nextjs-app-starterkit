
import {
  takeEvery,
} from 'redux-saga/effects';
import { actionsType } from './test.actions';
import { getCount } from './test.selectors';
import { startLoading, stopLoading, LoaderTypes } from '../loaders';
import onCountChange from './workers/onCountChange';

export default function* testWatcher() {
  yield takeEvery(actionsType.INCREMENT, onCountChange);
  yield takeEvery(actionsType.DECREMENT, onCountChange);
}
