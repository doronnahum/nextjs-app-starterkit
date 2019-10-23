import { combineReducers } from 'redux';
import user from './user/user.reducer';
import auth from './auth/auth.reducer';

// Import saga and reducers
import global from './global/global.reducer';
import loaders from './loaders/loaders.reducer';

const rootReducer = combineReducers({
  user,
  auth,
  global,
  loaders,
});


export default rootReducer;
