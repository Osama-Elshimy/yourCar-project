import { useState, useEffect, useRef } from 'react';

import CartModal from './CartModal';

import classes from './Navbar.module.css';

const NavBar = () => {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const [isSticky, setSticky] = useState(false);
	const [section, setSection] = useState(null);

	const cartClickHandler = () => {
		setNavIsOpen(prev => {
			return !prev;
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', () => handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.pageYOffset > 600) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	/* 	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setSection(entry.target.id);
				}
			});
		},
		{ rootMargin: '-50% 0px -50% 0px' }
	);

	useEffect(() => {
		const sections = document.querySelectorAll('section');
		sections.forEach(section => observer.observe(section));

		return () => observer.disconnect();
	}, []); */

	return (
		<nav
			id='nav'
			className={
				isSticky
					? `${classes['nav']} ${classes['nav--sticky']}`
					: `${classes['nav']}`
			}>
			<div className={classes['nav__logo-container']}>
				<strong>Your</strong>Car
			</div>
			<div className={classes['nav__menu-container']}>
				<ul
					className={
						navIsOpen
							? `${classes['nav__list']} ${classes['nav__list--active']}`
							: classes['nav__list']
					}>
					{['home', 'about', 'services', 'cars'].map(item => {
						return (
							<li key={item + '-link'} className={classes['nav__item']}>
								<a href={`#${item}`} onClick={cartClickHandler}>
									{item}
								</a>
							</li>
						);
					})}
					<li key={'contact-us' + '-link'} className={classes['nav__item']}>
						<a href={'#contact-us'} onClick={cartClickHandler}>
							Contact us
						</a>
					</li>
				</ul>

				<CartModal />
			</div>
		</nav>
	);
};

export default NavBar;
