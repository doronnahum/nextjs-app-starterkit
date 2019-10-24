/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import { actionsType } from './auth.actions';

const initialState = {
  token: null,
  loading: false,
  valid: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.SET_TOKEN: {
      const nextState = produce(state, (draftState) => {
        draftState.token = action.payload;
      });
      return nextState;
    }
    case actionsType.ON_CHECK_TOKEN_START: {
      const nextState = produce(state, (draftState) => {
        draftState.loading = true;
        draftState.valid = false;
      });
      return nextState;
    }
    case actionsType.ON_CHECK_TOKEN_END: {
      const nextState = produce(state, (draftState) => {
        draftState.loading = false;
        draftState.valid = true;
      });
      return nextState;
    }
    case actionsType.ON_CHECK_TOKEN_FAILED: {
      const nextState = produce(state, (draftState) => {
        draftState.loading = false;
        draftState.valid = false;
        draftState.token = null;
      });
      return nextState;
    }
    case actionsType.ON_LOGIN_END:
    case actionsType.ON_REGISTER_END: {
      const nextState = produce(state, (draftState) => {
        draftState.loading = false;
        draftState.valid = true;
        draftState.token = action.token;
      });
      return nextState;
    }
    default:
      return state;
  }
}
