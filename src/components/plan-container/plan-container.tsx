
import './plan-container.css';

import PlanGroup from '../plan-group/plan-group';
import { Plans } from '../../hard-data/plans';
import { planSections } from "../../hard-data/planSections";

const PlanContainer = () => {
	return (
		<div className="planContainer">
			<div className="planContainer__sections">
				{
					planSections.map(({id, title}) => (
						<h4 className="planContainer__section" key={id}>
							<span>{id}</span>
							<span>{title}</span>
						</h4>
					))
				}
			</div>
			<div className="planGroups__Conatainer">
				{
					Plans.map(({header, plans}) => (
						<PlanGroup header={header} plans={plans} key={header} />
					))
				}
			</div>
		</div>
	)
};

export default PlanContainer;
