
// import logo from '../../../public/assets/shared/desktop/logo.svg';
import logo from '../../assets/shared/desktop/logo.svg';
import './topbar.css';

const Topbar = () => {
	return (
		<header>
			<img src={logo} className="App-logo" alt="logo" />
		</header>
	)
};

export default Topbar;
