import { GET_DATA_REQUEST, RESET_DATA_LISTS } from './types';

const getDataAction = (val) => ({ type: GET_DATA_REQUEST, payload: val });
const resetStore = () => ({ type: RESET_DATA_LISTS });

export { getDataAction, resetStore };
