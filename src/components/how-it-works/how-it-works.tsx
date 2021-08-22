
import { Link } from 'react-router-dom';
import MainButton from '../main-button/mainbutton';
import './how-it-works.css';

interface CollectionItem {
	title: string;
	description: string;
	header: string;
}

type HowItWorksProps = {
	theme?: 'light' | 'dark';
};

const items: CollectionItem[] = [
	{
		title: '01',
		header: 'Pick your coffee',
		description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
	},
	{
		title: '02',
		header: 'Choose the frequency',
		description: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
	},
	{

		title: '03',
		header: 'Receive and enjoy!',
		description: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
	},
];

const HowItWorks = ({theme}: HowItWorksProps) => {
	return (
		<div className={`howItWorks ${theme}`}>
			{
				theme && theme === 'dark' ?
					null: (
						<h4>How it works</h4>
					)
			}
			<div className="howItWorks__steps">
				<div className="howItWorks__steps__line"></div>
				<div className="howItWorks__steps__ring"></div>
				<div className="howItWorks__steps__ring"></div>
				<div className="howItWorks__steps__ring"></div>
			</div>
			<div className="howItWorks__container">
				{
					items.map(({title, header, description}) => (
						<div className="howItWorks__item" key={title}>
							<h1>{title}</h1>
							<h3>{header}</h3>
							<p>{description}</p>
					</div>
					))
				}
			</div>

			{
				theme && theme === 'dark' ?
					null: (
						<Link to="/subscribe">
						<MainButton state="default">
							<span>Create your plan</span>
						</MainButton>
					</Link>
					)
			}
		</div>
	)
}

export default HowItWorks;
