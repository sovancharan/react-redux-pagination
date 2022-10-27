import { combineReducers } from 'redux';
import paginationReducer from './Reducer';

const rootReducer = combineReducers({ paginationReducer });

export default rootReducer;
