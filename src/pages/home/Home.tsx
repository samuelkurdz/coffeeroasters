
import './Home.css';

import HeroSection from '../../components/hero-section/hero-section';
import CollectionSection from '../../components/collection/collection';
import WhyUs from '../../components/why-us/why-us';
import HowItWorks from '../../components/how-it-works/how-it-works';

const Home = () => {
	return (
		<div className="home">
			<HeroSection />
			<CollectionSection />

			<WhyUs />
			<HowItWorks />
		</div>
	)
};

export default Home;
