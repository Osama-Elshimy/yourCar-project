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
			const car = action.payload;
			state.cars[car.id] += 1;
			state.totalCars += 1;

			// Add car to orders list
			const carIndex = state.ordersList.findIndex(c => c.id === car.id);

			if (carIndex === -1) state.ordersList.push({ ...car, count: 1 });
			else state.ordersList[carIndex].count++;
		},

		removeFromCart: (state, action) => {
			const carId = action.payload;
			if (state.cars[carId] > 1) {
				state.cars[carId] -= 1;
				state.totalCars -= 1;
			} else if (state.cars[carId] === 1) {
				state.cars[carId] -= 1;
				state.totalCars -= 1;

				const carIndex = state.ordersList.findIndex(c => c.id === carId);
				state.ordersList.splice(carIndex, 1);
			}
		},

		deleteCar: (state, action) => {
			const carId = action.payload;
			state.totalCars -= state.cars[carId];
			state.cars[carId] = 0;

			const carIndex = state.ordersList.findIndex(c => c.id === carId);
			state.ordersList.splice(carIndex, 1);
		},

		clearCart: state => {
			state.cars = {};
			state.ordersList = [];
			state.totalCars = 0;

			// Reset the car count in the initial state
			Object.keys(initialState.cars).forEach(carId => {
				state.cars[carId] = 0;
			});
		},
	},
});

export const { addToCart, removeFromCart, deleteCar, clearCart } =
	cartSlice.actions;
export default cartSlice.reducer;

// Selector to calculate the total car count
export const selectTotalCarCount = createSelector(
	state => state.cart.totalCars,
	totalCars => totalCars
);

// Selector to retrieve all selected cars
export const orderedCars = createSelector(
	state => state.cart.ordersList,
	ordersList => ordersList
);
