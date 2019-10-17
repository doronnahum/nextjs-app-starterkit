/* eslint-disable no-param-reassign */
import produce from 'immer';
import types from './types';

const initialState = {
  windowSize: {},
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case types.EXAMPLE: {
      const nextState = produce(state, (draftState) => {
        draftState.buttonfromstate = true;
      });
      return nextState;
    }
    default:
      return state;
  }
}
