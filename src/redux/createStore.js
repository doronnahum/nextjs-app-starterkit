/* eslint-disable no-console */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { getToken as getTokenFromStorage, removeToken } from 'src/services/userToken';
import { getMe } from 'src/redux/auth/auth.actions';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// eslint-disable-next-line max-len
const HANDLE_TOKEN_IN_THE_BROWSER = true; // set to false if you want to handle token in server side;

// Create store
export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  if (process.browser === HANDLE_TOKEN_IN_THE_BROWSER) {
    const state = store.getState();
    const { token, loading, valid } = state.auth;
    if (!token && !loading && !valid) {
      const tokenFromStorage = getTokenFromStorage();
      if (tokenFromStorage) {
        getMe(store.dispatch, tokenFromStorage, removeToken);
      }
    }
  }
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
