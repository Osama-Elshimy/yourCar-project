import { createSlice, createSelector } from '@reduxjs/toolkit';

import data from './../assets/data.json';

const carsData = data.cars;

const initialState = {
	cars: {},
	ordersList: [],
	totalCars: 0,
};

// Prepare initial car count based on car data
carsData.forEach(car => {
	initialState.cars[car.id] = 0;
});

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const carId = action.payload;
			state.cars[carId] += 1;
			state.ordersList.push(carId);
			state.totalCars += 1;
		},

		removeFromCart: (state, action) => {
			const carId = action.payload;
			if (state.cars[carId] > 0) {
				state.cars[carId] -= 1;
				state.ordersList.splice(state.ordersList.indexOf(carId), 1);
				state.totalCars -= 1;
			}
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// Selector to calculate the total car count
export const selectTotalCarCount = createSelector(
	state => state.cart.totalCars,
	totalCars => totalCars
);

// Selector to retrieve all selected cars
export const selectSelectedCars = createSelector(
	state => state.cart.ordersList,
	ordersList => ordersList
);
