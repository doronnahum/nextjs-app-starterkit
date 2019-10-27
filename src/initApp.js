import {
  setApiInstance, setDispatch, setDefaultIdKey, setErrorHandler,
} from 'net-provider';
import ApiService from 'src/services/api';

export default (props) => {
  setDefaultIdKey('_id');
  setErrorHandler((err) => alert(err));
  setDispatch(props.store.dispatch);
  setApiInstance(ApiService.getAxios());
};
