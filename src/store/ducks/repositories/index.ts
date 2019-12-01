import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from '@store/types';

const INITAL_STATE: RepositoriesState = {
	data: [
		{
			id: 1,
			name: 'rocket',
		},
	],
	error: false,
	loafing: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITAL_STATE, action) => {
	switch (action.type) {
		case RepositoriesTypes.LOAD_REQUEST:
			return {
				...state,
				loading: true,
			};
		case RepositoriesTypes.LOAD_SUCCESS:
			return {
				...state,
				error: false,
				loading: false,
				data: action.payload.data,
			};
		case RepositoriesTypes.LOAD_FAILURE:
			return {
				...state,
				loafing: false,
				error: true,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
