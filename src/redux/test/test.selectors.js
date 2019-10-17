import { createSelector } from 'reselect';

export const getState = (state) => state.test;

export const getCount = createSelector(getState, (testState) => (
  testState.count
));
