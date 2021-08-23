import DesktopBgImg from '../../assets/plan/desktop/image-hero-blackcup.jpg';
import TabletBgImg from '../../assets/plan/tablet/image-hero-blackcup.jpg';
import MobileBgImg from '../../assets/plan/mobile/image-hero-blackcup.jpg';

import './Subscribe.css';

import HowItWorks from '../../components/how-it-works/how-it-works';
import SubHero from '../../components/sub-hero/sub-hero';

import { BgImages } from '../../interfaces/interface';
import PlanContainer from '../../components/plan-container/plan-container';

const Subscribe = () => {
	const backgroundImages: BgImages = {
		desktopBg: DesktopBgImg,
		tabletBg: TabletBgImg,
		mobileBg: MobileBgImg
	};
	return (
		<div className="Subscribe">
			<SubHero bgImages={backgroundImages}>
				<div className="subHero__children">
					<h1 className="displayOnDesktop">Create a plan</h1>
					<h2 className="displayOnTab">Create a plan</h2>
					<p>Build a subscription plan that best fits your needs.
						We offer an assortment of the best artisan coffees
						from around the globe delivered fresh to your door.
					</p>
				</div>
			</SubHero>
			<HowItWorks theme="dark" />

			<PlanContainer />
		</div>
	)
};

export default Subscribe;
