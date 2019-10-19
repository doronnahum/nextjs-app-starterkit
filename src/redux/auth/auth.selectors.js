import { createSelector } from 'reselect';

export const getState = (state) => state.auth;

export const getToken = createSelector(getState, (authState) => (
  authState.token
));
