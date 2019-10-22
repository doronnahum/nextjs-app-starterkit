import {
  takeEvery,
} from 'redux-saga/effects';
import { actionsType } from './auth.actions';
import login from './workers/login.worker';
import register from './workers/register.worker';
import sendVerifyAccount from './workers/sendVerifyAccount.worker';

export default function* authWatcher() {
  yield takeEvery(actionsType.LOGIN, login);
  yield takeEvery(actionsType.REGISTER, register);
  yield takeEvery(actionsType.SEND_VERIFY_ACCOUNT, sendVerifyAccount);
}
