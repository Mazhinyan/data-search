import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FALID, RESET_DATA_LISTS } from './types';

const initialState = {
	isLoad: false,
	data: [],
	error: false
};

export default (state = initialState, { payload, type }) => {
	switch (type) {
		case GET_DATA_REQUEST:
			return { ...state, isLoad: true, error: false };
		case GET_DATA_SUCCESS:
			return { data: [ ...payload ], isLoad: false, error: false };
		case GET_DATA_FALID:
			return { data: [], error: true, isLoad: false };
		case RESET_DATA_LISTS:
			return { ...initialState };
		default:
			return state;
	}
};
