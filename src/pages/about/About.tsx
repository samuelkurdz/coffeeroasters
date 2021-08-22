
import './About.css';

import DesktopBgImg from '../../assets/about/desktop/image-hero-whitecup.jpg';
import TabletBgImg from '../../assets/about/tablet/image-hero-whitecup.jpg';
import MobileBgImg from '../../assets/about/mobile/image-hero-whitecup.jpg';

import DesktopCommitImg from '../../assets/about/desktop/image-commitment.jpg';
import TabletCommitImg from '../../assets/about/tablet/image-commitment.jpg';
import MobileCommitImg from '../../assets/about/mobile/image-commitment.jpg';

import SubHero from '../../components/sub-hero/sub-hero';
import { BgImages } from '../../interfaces/styles.interface';
import useMediaQuery from '../../utils/useMedia';

const About = () => {
	const backgroundImages: BgImages = {
		desktopBg: DesktopBgImg,
		tabletBg: TabletBgImg,
		mobileBg: MobileBgImg
	};

	let commitImgBySize = '';
	const isTablet = useMediaQuery('(max-width: 768px)');
	const isMobile = useMediaQuery('(max-width: 480px)');

	if (isMobile) {
		commitImgBySize = DesktopCommitImg;
	} else if (isTablet) {
		commitImgBySize = TabletCommitImg;
	} else {
		commitImgBySize = MobileCommitImg;
	}
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

			<div className="commitment">
				<img src={commitImgBySize} alt="commitImage" className="commit__Img" />
				<div className="commit__Detail">
					<h2>Our commitment</h2>
					<h3>Our commitment</h3>
					<p>
					We’re built on a simple mission and a commitment to doing good along the way.
					We want to make it easy for you to discover and
					brew the world’s best coffee at home. It all starts at the source.
					To locate the specific lots we want to purchase, we travel
					nearly 60 days a year trying to understand the challenges
					and opportunities in each of these places.
					We collaborate with exceptional coffee growers and
					empower a global community of farmers through with
					well above fair-trade benchmarks. We also offer training,
					support farm community initiatives, and invest in coffee
					plant science. Curating only the finest blends,
					we roast each lot to highlight tasting profiles distinctive to
					their native growing region.
					</p>
				</div>
			</div>
		</div>
	)
};

export default About;
