
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo.svg';
import './topbar.css';

const Topbar = () => {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
	return (
		<header className="topbar">
			<img src={logo} className="topbar__logo" alt="logo" />
			<div className="topbar__items">
				<p><Link to="/">Home</Link></p>
				<p><Link to="/about">About Us</Link></p>
				<p><Link to="/subscribe">Create Your plan</Link></p>
			</div>
			<div className="topbar__hamburger" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
				<span className={`hamburger__item ${isHamburgerOpen? 'hambuger--rotate__positive' : ''}`}></span>
				<span className={`hamburger__item ${isHamburgerOpen? 'hambuger--display__none' : ''}`}></span>
				<span className={`hamburger__item ${isHamburgerOpen? 'hambuger--rotate__negative' : ''}`}></span>
			</div>
		</header>
	)
};

export default Topbar;
