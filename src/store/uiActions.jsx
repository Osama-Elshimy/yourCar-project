export const OPEN_NAV_BAR = 'OPEN_NAV_BAR';
export const CLOSE_NAV_BAR = 'CLOSE_NAV_BAR';
export const OPEN_CART_MODAL = 'OPEN_CART_MODAL';
export const CLOSE_CART_MODAL = 'CLOSE_CART_MODAL';

export const openNavBar = () => ({
	type: OPEN_NAV_BAR,
});

export const closeNavBar = () => ({
	type: CLOSE_NAV_BAR,
});

export const openCartModal = () => ({
	type: OPEN_CART_MODAL,
});

export const closeCartModal = () => ({
	type: CLOSE_CART_MODAL,
});
