
import { useState } from 'react';
import logo from '../../assets/shared/desktop/logo.svg';
import './topbar.css';

const Topbar = () => {
	const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);
	return (
		<header className="topbar">
			<img src={logo} className="App-logo" alt="logo" />
			<div className="topbar__items">
				<p>Home</p>
				<p>About</p>
				<p>Create Your plan</p>
			</div>
			<div className="topbar__hamburger" onClick={() => setToggleHamburger(!toggleHamburger)}>
				<span className={`hamburger__item ${toggleHamburger? 'hambuger--rotate__positive' : ''}`}></span>
				<span className={`hamburger__item ${toggleHamburger? 'hambuger--display__none' : ''}`}></span>
				<span className={`hamburger__item ${toggleHamburger? 'hambuger--rotate__negative' : ''}`}></span>
			</div>
		</header>
	)
};

export default Topbar;
