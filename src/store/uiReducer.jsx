import {
	OPEN_NAV_BAR,
	CLOSE_NAV_BAR,
	OPEN_CART_MODAL,
	CLOSE_CART_MODAL,
} from './uiActions';

const initialState = {
	navBarOpen: false,
	cartModalOpen: false,
};

const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_NAV_BAR:
			return {
				...state,
				navBarOpen: true,
				cartModalOpen: false, // Close the cart modal when nav bar opens
			};
		case CLOSE_NAV_BAR:
			return {
				...state,
				navBarOpen: false,
			};
		case OPEN_CART_MODAL:
			return {
				...state,
				cartModalOpen: true,
				navBarOpen: false, // Close the nav bar when cart modal opens
			};
		case CLOSE_CART_MODAL:
			return {
				...state,
				cartModalOpen: false,
			};
		default:
			return state;
	}
};

export default uiReducer;
