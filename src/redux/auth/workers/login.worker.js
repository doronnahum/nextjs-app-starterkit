import {
  put,
} from 'redux-saga/effects';
import ApiService, { httpRequest } from 'src/services/api';
import Router from 'next/router';
import { startLoading, stopLoading, LoaderTypes } from '../../loaders';

function* signIn(action) {
  const {
    email, mobile, password, nextRoute,
  } = action.payload;
  try {
    yield put(startLoading({ loaderType: LoaderTypes.LOGIN }));
    const response = yield httpRequest(ApiService.login, email, mobile, password);
    // eslint-disable-next-line no-console
    console.log({ response });
    yield put(stopLoading({ loaderType: LoaderTypes.LOGIN }));
    if (nextRoute && nextRoute.length) {
      Router.replace({ pathname: nextRoute });
    }
  } catch (error) {
    yield put(stopLoading({ loaderType: LoaderTypes.LOGIN, error }));
  }
}

export default signIn;
