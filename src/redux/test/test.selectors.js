import { createSelector } from 'reselect';

export const getCount = createSelector(getState, (State) => (
  State.count
));
