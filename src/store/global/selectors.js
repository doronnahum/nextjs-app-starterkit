import { createSelector } from 'reselect';
export const getGlobalState = state => state.global;

export const getWindowSize = createSelector(getGlobalState, globalState => globalState.windowSize);
