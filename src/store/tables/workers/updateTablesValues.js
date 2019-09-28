import { put } from 'redux-saga/effects';
import { logger } from 'src/services/logger';
import { setValues } from '../actions';

export default function* updateTablesValues(action) {
    const { values } = action.payload
    try {
        //     yield put(setRamzorPress({ storeKey, status: consts.API_STATUS.START, error: null, loading: true, data: dataForClient }));
        //     const res = yield httpRequest(api.request, { url: 'setCompliance', method: 'post', data: dataToSend });
        //     if (res.error) {
        //         const errType = res.message === 'Network Error' ? consts.API_STATUS.FAILED_NETWORK : consts.API_STATUS.FAILED;
        //         yield put(setRamzorPress({ storeKey, status: errType, error: res, loading: false, data: dataForClient }));
        //     } else {
        //         yield put(setRamzorPress({
        //             storeKey, status: consts.API_STATUS.FINISHED, error: null, loading: false, data: dataForClient
        //         }));
        //     }
        const data = values
        yield put(setValues({
            error: null, loading: false, data
        }));
    } catch (err) {
        console.log('error in onRamzorPress', err);
    }
}
