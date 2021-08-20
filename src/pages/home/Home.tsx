
import './Home.css';

import HeroSection from '../../components/hero-section/hero-section';
import CollectionSection from '../../components/collection/collection';

const Home = () => {
	return (
		<div className="home">
			<HeroSection />
			<CollectionSection />
		</div>
	)
};

export default Home;
