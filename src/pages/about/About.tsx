
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
			<SubHero bgImages={backgroundImages}>
			<div className="subHero__children">
					<h2 className="displayOnDesktop">About Us</h2>
					<h3 className="displayOnTab">About US</h3>
					<p>
						Coffeeroasters began its journey of exotic discovery in 1999,
						highlighting stories of coffee from around the world.
						We have since been dedicated to bring the perfect
						cup - from bean to brew - in every shipment.
					</p>
				</div>
			</SubHero>
		</div>
	)
};

export default About;
