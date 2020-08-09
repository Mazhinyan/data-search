import { put, takeLatest } from 'redux-saga/effects';
import Api from '../../../utils/api';
import { SEARCH_ENDPOINT } from '../../../utils/endpoints';
import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FALID } from './types';
import { filtartionItem } from '../../../utils/helpers';

function* searchSaga({ payload }) {
	try {
		const result = yield Api({ method: 'GET', url: SEARCH_ENDPOINT(payload) });
		// const data = result?[0]?.documents
		let filtData = [];
		if (result[0] && result[0].documents) {
			filtData = filtartionItem(result[0].documents);
		}
		yield put({ type: GET_DATA_SUCCESS, payload: filtData });
	} catch (e) {
		yield put({ type: GET_DATA_FALID });
	}
}

export default function* searchSagaWatcher() {
	yield takeLatest(GET_DATA_REQUEST, searchSaga);
}
