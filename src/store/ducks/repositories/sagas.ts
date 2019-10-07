import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
	try {
		const res = yield call(api.get, 'users/diego3g/repos');
		yield put(loadSuccess(res.data));
	} catch (err) {
		yield loadFailure();
	}
}
