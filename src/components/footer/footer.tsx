import './footer.css';
import { Link } from 'react-router-dom';

import {ReactComponent as FooterLogo} from '../../assets/shared/desktop/footer.svg';
import {ReactComponent as Facebook} from '../../assets/shared/desktop/icon-facebook.svg';
import {ReactComponent as Twitter} from '../../assets/shared/desktop/icon-twitter.svg';
import {ReactComponent as Instagram} from '../../assets/shared/desktop/icon-instagram.svg';

const Footer = () => {
	return (
		<footer className="footer">
			<FooterLogo />
			<div className="footer__items">
				<p><Link to="/">Home</Link></p>
				<p><Link to="/about">About Us</Link></p>
				<p><Link to="/subscribe">Create Your plan</Link></p>
			</div>
			<div className="footer__links">
				<Facebook />
				<Twitter />
				<Instagram />
			</div>
		</footer>
	)
};

export default Footer;
