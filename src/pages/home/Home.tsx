
import './Home.css';
import MainButton from '../../components/main-button/mainbutton';

const Home = () => {
	return (
		<div className="home">
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

				<MainButton state="default">
					<span>Create your plan</span>
				</MainButton>
			</section>
		</div>
	)
};

export default Home;
