import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Cars from './components/Cars/Cars';
import CarsSlider from './components/Cars/CarsSlider/CarsSlider';
import TeslaModels from './components/Tesla/TeslaModels';
import Testimonials from './components/Testimonials/Testimonials';
import Companies from './components/Footer/Companies';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
			{/* <NavBar /> */}
			<Hero />
			<About />
			<Services />
			<Cars />
			<CarsSlider />
			<TeslaModels />
			<Testimonials />
			<Companies />
			<Footer />
		</>
	);
}

export default App;
