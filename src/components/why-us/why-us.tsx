
import './why-us.css';


import CoffeeIcon from '../../assets/home/desktop/icon-coffee-bean.svg';
import GiftIcon from '../../assets/home/desktop/icon-gift.svg';
import BusIcon from '../../assets/home/desktop/icon-truck.svg';

interface CollectionItem {
	title: string;
	description: string;
	image: string;
}

const items: CollectionItem[] = [
	{
		title: 'Best quality',
		description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
		image: CoffeeIcon
	},
	{
		title: 'Exclusive benefits',
		description: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
		image: GiftIcon
	},
	{

		title: 'Free shipping',
		description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
		image: BusIcon
	},
];

const WhyUs = () => {
	return (
		<div className="whyUs">
			<div className="whyUs__largeCard">
				<h2 className="whyUs__largeCard__title">Why choose us?</h2>
				<h3 className="whyUs__largeCard__title">Why choose us?</h3>
				<p className="whyUs__largeCard__text">
					A large part of our role is choosing which particular coffees will be featured 
					in our range. This means working closely with the best coffee growers to give 
					you a more impactful experience on every level.
				</p>
			</div>

			<div className="whyUs__container">
				{
					items.map(({title, image, description}) => (
						<div className="whyUs__smallCard" key={title}>
							<img src={image} alt={title} />
							<div className="whyUs__smallCard__detail">
								<h4>{title}</h4>
								<p>{description}</p>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default WhyUs;
