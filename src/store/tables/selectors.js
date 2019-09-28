import { createSelector } from 'reselect';
export const getTablesState = state => state.tables;

// export const getWindowSize = createSelector(getGlobalState, globalState => globalState.windowSize);
export const getTablesData = createSelector(getTablesState, tablesState => tablesState.tablesData.data);
