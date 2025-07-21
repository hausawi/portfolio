import React, { useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import wave1 from '../../assets/wave1.png';
import logo from '../../assets/logo.png';
import close from '../../assets/close.png';
import open from '../../assets/open.png';

const Navbar = () => {
	const [menu, setMenu] = useState('home');
	const menuRef = useRef();

	const openMenu = () => {
		menuRef.current.style.right = '0';
	};
	const closeMenu = () => {
		menuRef.current.style.right = '-350px';
	};
	return (
		<div className='navbar'>
			<img className='logo' src={logo} alt='' />
			<img onClick={openMenu} className='toggle-open' src={open} alt='' />
			<ul ref={menuRef} className='nav-menu'>
				<img onClick={closeMenu} className='toggle-close' src={close} alt='' />
				<li>
					{' '}
					<AnchorLink className='anchor-link' href='#home'>
						<p onClick={() => setMenu('home')}>Home</p>
					</AnchorLink>
					{menu === 'home' ? (
						<img src={wave1} alt='' className='img1' />
					) : (
						<></>
					)}
				</li>
				<li>
					{' '}
					<AnchorLink className='anchor-link' offset={50} href='#about'>
						<p onClick={() => setMenu('about')}>About Me</p>
					</AnchorLink>
					{menu === 'about' ? <img src={wave1} alt='' /> : <></>}
				</li>
				<li>
					{' '}
					<AnchorLink className='anchor-link' offset={50} href='#services'>
						<p onClick={() => setMenu('services')}>Services</p>
					</AnchorLink>
					{menu === 'services' ? <img src={wave1} alt='' /> : <></>}
				</li>
				<li>
					{' '}
					<AnchorLink className='anchor-link' offset={50} href='#work'>
						<p onClick={() => setMenu('work')}>Portfolio</p>
					</AnchorLink>
					{menu === 'work' ? <img src={wave1} alt='' /> : <></>}
				</li>
				<li>
					{' '}
					<AnchorLink className='anchor-link' offset={50} href='#contact'>
						<p onClick={() => setMenu('contact')}>Contact</p>
					</AnchorLink>
					{menu === 'contact' ? <img src={wave1} alt='' /> : <></>}
				</li>
			</ul>
			<div className='nav-connect'>
				<a href='Haider_Hausawi_CV.pdf' download='Haider M. Hausawi CV'>
					Download CV
				</a>
			</div>
		</div>
	);
};

export default Navbar;
