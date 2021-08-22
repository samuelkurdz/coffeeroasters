
import './About.css';

import DesktopBgImg from '../../assets/about/desktop/image-hero-whitecup.jpg';
import TabletBgImg from '../../assets/about/tablet/image-hero-whitecup.jpg';
import MobileBgImg from '../../assets/about/mobile/image-hero-whitecup.jpg';

import SubHero from '../../components/sub-hero/sub-hero';
import { BgImages } from '../../interfaces/styles.interface';

const About = () => {
	const backgroundImages: BgImages = {
		desktopBg: DesktopBgImg,
		tabletBg: TabletBgImg,
		mobileBg: MobileBgImg
	};
	return (
		<div className="About">
			<SubHero bgImages={backgroundImages}/>
			<p>About</p>
		</div>
	)
};

export default About;
