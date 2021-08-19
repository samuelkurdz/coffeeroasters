
import logo from '../../assets/shared/desktop/logo.svg';
import './topbar.css';

const Topbar = () => {
	return (
		<header className="topbar">
			<img src={logo} className="App-logo" alt="logo" />
			<div className="topbar__items">
				<p>Home</p>
				<p>About</p>
				<p>Create Plans</p>
			</div>
			<div className="topbar__hamburger">
				<span className="hamburger__item"></span>
				<span className="hamburger__item"></span>
				<span className="hamburger__item"></span>
			</div>
		</header>
	)
};

export default Topbar;
