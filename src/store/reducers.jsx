import { combineReducers } from 'redux';

import cartReducer from './cartSlice';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
	cart: cartReducer,
	ui: uiReducer,
});

export default rootReducer;
