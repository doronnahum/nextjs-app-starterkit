import { combineReducers } from 'redux';
import global from 'src/store/global/reducer';
import tables from 'src/store/tables/reducer';

export default combineReducers({
  global,
  tables
});
