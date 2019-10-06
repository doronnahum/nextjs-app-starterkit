import types from './types';

export const updateTablesValues = payload => ({ type: types.UPDATE_TABLES_VALUES, payload })
export const calculateSavings = payload => ({ type: types.CALCULATE_SAVINGS, payload })
export const setCalculatedData = payload => ({ type: types.SET_CALCULATED_DATA, payload });

