import React, { useState } from 'react';
import AnchorLink  from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import wave1 from '../../assets/wave1.png';
import logo from '../../assets/logo.png';

const Navbar = () => {
	const [menu, setMenu] = useState('home');
	return (
		<div className='navbar'>
			<img className='logo' src={logo} alt='' />
			<ul className='nav-menu'>
				<li> <AnchorLink className='anchor-link'  href='#home' >
					<p onClick={()=>setMenu("home")}>Home</p></AnchorLink>
					{menu === 'home' ? <img src={wave1} alt='' /> : <></>}
				</li>
				<li> <AnchorLink className='anchor-link' offset={50} href='#about' >
					<p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>
					{menu === 'about' ? <img src={wave1} alt='' /> : <></>}
				</li>
				<li> <AnchorLink className='anchor-link' offset={50} href='#services' >
					<p onClick={()=>setMenu("services")}>Services</p></AnchorLink>
					{menu === 'services' ? <img src={wave1} alt='' /> : <></>}
				</li>
				<li> <AnchorLink className='anchor-link' offset={50} href='#work' >
					<p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>
					{menu === 'work' ? <img src={wave1} alt='' /> : <></>}
				</li>
				<li> <AnchorLink className='anchor-link' offset={50} href='#contact' >
					<p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>
					{menu === 'contact' ? <img src={wave1} alt='' /> : <></>}
				</li>
			</ul>
			<div className='nav-connect'><AnchorLink className='anchor-link'  href='#contact' >Connect With Me</AnchorLink></div>
		</div>
	);
};

export default Navbar;
