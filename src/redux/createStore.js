/* eslint-disable no-console */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { getToken as getTokenFromStorage } from 'src/services/userToken';
import { reAuthenticate } from 'src/redux/auth/auth.actions';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// eslint-disable-next-line max-len
const HANDLE_TOKEN_IN_THE_BROWSER = true; // set to false if you want to handle token in server side;

// Create store
export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production' && process.browser) {
    // eslint-disable-next-line global-require
    const { createLogger } = require('redux-logger');
    const logger = createLogger({
      collapsed: true,
    });

    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  if (process.browser === HANDLE_TOKEN_IN_THE_BROWSER) {
    const state = store.getState();
    const { token, loading, valid } = state.auth;
    if (!token && !loading && !valid) {
      const tokenFromStorage = getTokenFromStorage();
      if (tokenFromStorage) {
        reAuthenticate(store.dispatch, tokenFromStorage);
      }
    }
  }
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
