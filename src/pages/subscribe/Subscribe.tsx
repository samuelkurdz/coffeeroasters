import DesktopBgImg from '../../assets/plan/desktop/image-hero-blackcup.jpg';
import TabletBgImg from '../../assets/plan/tablet/image-hero-blackcup.jpg';
import MobileBgImg from '../../assets/plan/mobile/image-hero-blackcup.jpg';

import './Subscribe.css';

import HowItWorks from '../../components/how-it-works/how-it-works';
import SubHero from '../../components/sub-hero/sub-hero';

import { BgImages } from '../../interfaces/styles.interface';

const Subscribe = () => {
	const backgroundImages: BgImages = {
		desktopBg: DesktopBgImg,
		tabletBg: TabletBgImg,
		mobileBg: MobileBgImg
	};
	return (
		<div className="Subscribe">
			<SubHero bgImages={backgroundImages} />
			<HowItWorks />
		</div>
	)
};

export default Subscribe;
