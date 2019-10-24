import {
  put,
} from 'redux-saga/effects';
import ApiService, { httpRequest } from 'src/services/api';
import Router from 'next/router';
import { startLoading, stopLoading, LoaderTypes } from '../../loaders';

function* register(action) {
  const {
    email,
    mobile,
    password,
    nextRoute, /* firstName, lastName */
  } = action.payload;
  try {
    yield put(startLoading({ loaderType: LoaderTypes.REGISTER }));
    const response = yield httpRequest(
      ApiService.createUser,
      email,
      mobile,
      password, /* firstName, lastName */
    );
    if (response.data && response.data.verifiedRequired && !response.data.isVerified) {
      Router.replace({ pathname: '/verify-account', query: { email, mobile } });
      return;
    }
    yield put(stopLoading({ loaderType: LoaderTypes.REGISTER }));
    if (nextRoute && nextRoute.length) {
      Router.replace({ pathname: nextRoute });
    }
  } catch (error) {
    yield put(stopLoading({ loaderType: LoaderTypes.REGISTER, error }));
  }
}

export default register;
