import { combineReducers } from 'redux';
import test from './test/test.reducer';

// Import saga and reducers
import global from './global/global.reducer';
import loaders from './loaders/loaders.reducer';

const rootReducer = combineReducers({
  test,
  global,
  loaders,
});


export default rootReducer;
