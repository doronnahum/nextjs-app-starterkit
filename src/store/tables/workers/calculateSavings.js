import { put, select } from 'redux-saga/effects';
import { logger } from 'src/services/logger';
import { setCalculatedData } from '../actions';
import { getTablesData } from '../selectors';

export default function* calculateSavings(action) {
    // const { data } = action.payload
    try {
        const newValues = yield select(getTablesData)
        //     yield put(setRamzorPress({ storeKey, status: consts.API_STATUS.START, error: null, loading: true, data: data }));
        //     const res = yield httpRequest(api.request, { url: 'setCompliance', method: 'post', data: dataToSend });
        //     if (res.error) {
        //         const errType = res.message === 'Network Error' ? consts.API_STATUS.FAILED_NETWORK : consts.API_STATUS.FAILED;
        //         yield put(setRamzorPress({ storeKey, status: errType, error: res, loading: false, data: dataForClient }));
        //     } else {
        //         yield put(setRamzorPress({
        //             storeKey, status: consts.API_STATUS.FINISHED, error: null, loading: false, data: dataForClient
        //         }));
        //     }

        ////// after submit
        // // UE4TWorkingParameters 
        newValues['j79'] = newValues.j64 * 1.2
        newValues['j80'] = newValues.j64 * (2.35 * 1.2) * (1 + 0.2)
        // Th4eoretical Energy Savings 
        newValues['d79'] = newValues.j14
        newValues['d80'] = newValues.j16
        newValues['d81'] = newValues.d80 * 0.2285 / 2.54
        newValues['d82'] = ((newValues.d50 * (newValues.d79 * 0.284) * (newValues.d81 + 1) * newValues.c56) - ((newValues.d79 * 0.284) * newValues.c56 * newValues.d50)) * 0.75
        // RO4I Calculation
        newValues['d85'] = (newValues.j9 + newValues.j10) * newValues.c56 * newValues.c55
        newValues['d86'] = newValues.d82
        newValues['d87'] = newValues.j13
        newValues['d88'] = (newValues.d49 / 33.33) * (1 + newValues.d81) / 20
        newValues['d89'] = newValues.j17
        newValues['d91'] = newValues.d85 + newValues.d86 + newValues.d87 + newValues.d88 + newValues.d89

        yield put(setCalculatedData({
            error: null, loading: false, data: newValues
        }));
    } catch (err) {
        console.log('error in onRamzorPress', err);
    }
}
