import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from 'types/redux';
import { load } from './repositories/sagas';

export default function* rootSaga() {
	return yield all([takeLatest(RepositoriesTypes.LOAD_REQUEST, load)]);
}
