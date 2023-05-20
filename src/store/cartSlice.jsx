import { createSlice } from '@reduxjs/toolkit';

import data from './../assets/data.json';

const carsData = data.cars;

const initialState = {
	cars: {},
	ordersList: [],
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
		},
		removeFromCart: (state, action) => {
			const carId = action.payload;
			a;
			if (state.cars[carId] > 0) {
				state.cars[carId] -= 1;
				state.ordersList.splice(state.ordersList.indexOf(carId), 1);
			}
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
