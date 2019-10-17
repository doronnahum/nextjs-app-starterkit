/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import { actionsType } from './test.actions';

const initialState = {
  count: 0,
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
        case actionsType.INCREMENT: {
      const nextState = produce(state, (draftState) => {
        draftState.count = draftState.count + 1;
      });
      return nextState;
    }
    case actionsType.DECREMENT: {
      const nextState = produce(state, (draftState) => {
        draftState.count = draftState.count - 1;
      });
      return nextState;
    }
        default:
      return state;
  }
}