import { all } from 'redux-saga/effects';
import { searchSagaWatcher } from '../components/SearchTemplate/redux';

export default function* rootSaga() {
	yield all([ searchSagaWatcher() ]);
}
