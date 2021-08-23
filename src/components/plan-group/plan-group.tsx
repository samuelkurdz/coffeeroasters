
import './plan-group.css';

import PlanCard from '../plan-card/plan-card';
import {ReactComponent as CaretUpIcon} from '../../assets/shared/caretUp.svg';
import {ReactComponent as CaretDownIcon} from '../../assets/shared/caretUp.svg';

const cards = [
	{
		title: 'Capsule',
		description: 'Compatible with Nespresso systems and similar brewers'
	},
	{
		title: 'Filter',
		description: 'For pour over or drip methods like Aeropress, Chemex, and V60'
	},
	{
		title: 'Espresso',
		description: 'Dense and finely ground beans for an intense, flavorful experience'
	},
]
const PlanGroup = () => {
	return (
		<div className="planGroup">
			<h2 className="planGroup__title">
				How do you drink your coffee? <CaretDownIcon />
			</h2>
			<h3 className="planGroup__title">
				How do you drink your coffee? <CaretDownIcon />
			</h3>
			<div className="groupPlanTypes">
				{
					cards.map(({title, description}) => (
						<PlanCard title={title} description={description} />
					))
				}
			</div>
		</div>
	)
};

export default PlanGroup;
