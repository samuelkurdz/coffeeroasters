
import { CSSProperties } from 'react';
import { BgImages } from '../../interfaces/interface';
import useMediaQuery from '../../utils/useMedia';
import './sub-hero.css';

type subHeroProps = {
	bgImages: BgImages;
	children?: JSX.Element;
	height?: string;
	marginBottom?: string;
}

const SubHero = ({children, bgImages}: subHeroProps) => {
	let bgBySize = '';
	const isTablet = useMediaQuery('(max-width: 768px)');
	const isMobile = useMediaQuery('(max-width: 480px)');

	if (isMobile) {
		bgBySize = bgImages.mobileBg;
	} else if (isTablet) {
		bgBySize = bgImages.tabletBg;
	} else {
		bgBySize = bgImages.desktopBg;
	}

	const styles: CSSProperties = {
		backgroundImage: `url(${bgBySize})`,
	}

	return (
		<div className="subHero" style={styles}>
			{children}
		</div>
	)
}

export default SubHero;
