import React from 'react';

import CarsSlider from './CarsSlider/CarsSlider';

import classes from './Cars.module.css';

const Cars = () => {
	return (
		<section id='cars' className={classes.cars}>
			<h2 className={classes.cars__title}>Cars</h2>
			<CarsSlider />
		</section>
	);
};

export default Cars;
