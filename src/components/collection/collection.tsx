
import './collection.css';

import GranEspressoImg from '../../assets/home/desktop/image-gran-espresso.png';
import PlanaltoImg from '../../assets/home/desktop/image-planalto.png';
import PiccolloImg from '../../assets/home/desktop/image-piccollo.png';
import Dancheimg from '../../assets/home/desktop/image-danche.png';

interface CollectionItem {
	title: string;
	description: string;
	image: string;
}

const items: CollectionItem[] = [
	{
		title: 'Gran Espresso',
		description: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
		image: GranEspressoImg
	},
	{
		title: 'Planalto',
		description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
		image: PlanaltoImg
	},
	{

		title: 'Piccollo',
		description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
		image: PiccolloImg
	},
	{
		title: 'Danche',
		description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
		image: Dancheimg
	},
]

const CollectionSection = () => {
	return (
		<div className="collection">
				<h1 className="collection__header">
					our collection
				</h1>
				<div className="collection__items">
					{/* <div className="collection__item">
						<img src={GranEspressoImg} alt="gran" />
						<div className="collection__item--detail">
							<h4>Gran Espresso</h4>
							<p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
						</div>
					</div> */}
					{
						items.map(({title, image, description}) => (
							<div className="collection__item" key={title}>
								<img src={image} alt="gran" />
								<div className="collection__item--detail">
									<h4>{title}</h4>
									<p>{description}</p>
								</div>
							</div>
						))
					}
				</div>
		</div>
	)
};

export default CollectionSection;
