import types from './types';
import initialState from './initial';
import produce from 'immer';

export default function tablesReducer(state = initialState, action) {
  const { data, loading, error } = action.payload || {}
  switch (action.type) {
    case types.SET_VALUES: {
      const nextState = produce(state, draftState => {
        draftState.tablesData.data = { ...draftState.tablesData.data, ...data };
        draftState.tablesData.loading = loading;
        draftState.tablesData.error = error;
      })
      return nextState;
    }
    default:
      return state;
  }
}
