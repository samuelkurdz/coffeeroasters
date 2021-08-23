
import PlanGroup from '../plan-group/plan-group';
import './plan-container.css';

const sections = [
	{
		id: '01',
		title: 'Preferences'
	},
	{
		id: '02',
		title: 'Bean Type'
	},
	{
		id: '03',
		title: 'Quantity'
	},
	{
		id: '04',
		title: 'Grind Option'
	},
	{
		id: '05',
		title: 'Deliveries'
	},
];

const PlanContainer = () => {
	return (
		<div className="planContainer">
			<div className="planContainer__sections">
				{
					sections.map(({id, title}) => (
						<h4 className="planContainer__section" key={id}>
							<span>{id}</span>
							<span>{title}</span>
						</h4>
					))
				}
			</div>
			<PlanGroup />
		</div>
	)
};

export default PlanContainer;
