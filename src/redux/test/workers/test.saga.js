
import {
  put,
} from 'redux-saga/effects';
import ApiService, { httpRequest } from 'src/services/api';
import Router from 'next/router';
import { startLoading, stopLoading, LoaderTypes } from '../../loaders';

function* onCountChange(action) {
  const value = 4; // just example
  try {
    yield put(startLoading({ loaderType: LoaderTypes.ON_COUNT_CHNAGE }));
    const response = yield httpRequest(ApiService.onCountChange, value);
    // yield put(onCountEnd({ data: response.data }));
    yield put(stopLoading({ loaderType: LoaderTypes.ON_COUNT_CHNAGE }));
  } catch (error) {
    yield put(stopLoading({ loaderType: LoaderTypes.ON_COUNT_CHNAGE, error }));
  }
}

export default onCountChange;
