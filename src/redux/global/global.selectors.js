import { createSelector } from 'reselect';

export const getState = (state) => state.global;

export const getCount = createSelector(getState, (globalState) => (
  globalState.count
));
