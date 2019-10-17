import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';

// Import saga and reducers
import global from './global/global.reducer';
import globalSaga from './global/global.saga';
import loaders from './loaders/loaders.reducer';


// Add your reducer here
export const rootReducer = combineReducers({
  global,
  loaders,
});


// Add your saga here
export const rootSaga = function* rootSaga() {
  yield all([
    call(globalSaga, 'globalSaga'),
  ]);
};
