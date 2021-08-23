
import { Link } from 'react-router-dom';
import { collectionItems } from '../../hard-data/planSections';
import MainButton from '../main-button/mainbutton';
import './how-it-works.css';

type HowItWorksProps = {
	theme?: 'light' | 'dark';
};


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
					collectionItems.map(({title, header, description}) => (
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
