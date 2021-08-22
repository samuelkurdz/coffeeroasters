
import './hero-section.css';

import MainButton from '../main-button/mainbutton';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<section className="hero">
		<h1 className="hero__big-text">
			Great coffee made simple.
		</h1>
		<h2 className="hero__big-text">
			Great coffee made simple.
		</h2>
		<p className="hero__message">
			Start your mornings with the world’s best coffees.
			Try our expertly curated artisan coffees from our
			best roasters delivered directly to your door, at your schedule.
		</p>

			<Link to="/subscribe">
				<MainButton state="default">
					<span>Create your plan</span>
				</MainButton>
			</Link>
	</section>
	)
}

export default HeroSection;
