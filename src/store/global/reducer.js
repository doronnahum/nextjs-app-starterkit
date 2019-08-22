import types from './types';
import initialState from './initial';
import produce from 'immer';

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case types.EXAMPLE: {
      const nextState = produce(state, draftState => {
        draftState.buttonfromstate = true;
      })
      return nextState;
    }
    default:
      return state;
  }
}
