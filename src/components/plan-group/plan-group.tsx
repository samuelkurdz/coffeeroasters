
import './plan-group.css';

import PlanCard from '../plan-card/plan-card';
import {ReactComponent as CaretUpIcon} from '../../assets/shared/caretUp.svg';
import {ReactComponent as CaretDownIcon} from '../../assets/shared/caretUp.svg';
import { PlanGroupInterface } from '../../interfaces/interface';


const PlanGroup = ({header, plans}: PlanGroupInterface) => {
	return (
		<div className="planGroup">
			<h2 className="planGroup__title">{header} <CaretDownIcon />
			</h2>
			<h3 className="planGroup__title">{header} <CaretDownIcon />
			</h3>
			<div className="groupPlanTypes">
				{
					plans.map(({title, description}) => (
						<PlanCard title={title} description={description} />
					))
				}
			</div>
		</div>
	)
};

export default PlanGroup;
