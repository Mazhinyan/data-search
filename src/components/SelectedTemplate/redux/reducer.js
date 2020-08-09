import { ADD_ITEM, DELETE_ITEM, RESET_DATA_LISTS } from './types';

const initaialState = [];

export default (state = initaialState, { payload, type }) => {
	switch (type) {
		case ADD_ITEM:
			if (state.includes(payload)) {
				return state;
			}
			return [ ...state, payload ];
		case DELETE_ITEM:
			return state.filter((item) => item !== payload);
		case RESET_DATA_LISTS:
			return [];
		default:
			return state;
	}
};
