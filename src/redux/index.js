import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Import saga and reducers
import global from './global/reducer';


// Add your reducer here
export const rootReducer = combineReducers({
  global,
});


// Add your saga here
export const rootSaga = function* rootSaga() {
  yield all([
    // call(watcher, 'watcher'),
  ]);
};
