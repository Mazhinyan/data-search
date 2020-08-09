import { ADD_ITEM, DELETE_ITEM } from './types';

export const addItem = (id) => ({ type: ADD_ITEM, payload: id });

export const deleteItem = (id) => ({ type: DELETE_ITEM, payload: id });
