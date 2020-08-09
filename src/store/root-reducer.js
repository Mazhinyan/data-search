import { combineReducers } from 'redux';
import { searchReducer } from '../components/SearchTemplate/redux';
import { selectedReducer } from '../components/SelectedTemplate/redux';
//example
export const rootReducer = combineReducers({
	search: searchReducer,
	selected: selectedReducer
});
