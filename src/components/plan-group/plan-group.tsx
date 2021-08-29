
import './plan-group.css';

import PlanCard from '../plan-card/plan-card';
import {ReactComponent as CaretUpIcon} from '../../assets/shared/caretUp.svg';
import {ReactComponent as CaretDownIcon} from '../../assets/shared/caretUp.svg';
import { PlanGroupInterface } from '../../interfaces/interface';
import { useState } from 'react';


const PlanGroup = ({header, plans}: PlanGroupInterface) => {
	const [isPlansVisible, togglePlanVisibility] = useState(true);

	function handleTitleClick() {
		togglePlanVisibility(!isPlansVisible);
	};

	return (
		<div className="planGroup">
			<h2 className="planGroup__title" onClick={handleTitleClick}>
				{header} <CaretDownIcon className={`${isPlansVisible ? 'rotateIcon' : ''}`} />
			</h2>
			<h4 className="planGroup__title" onClick={handleTitleClick}>
			{header} <CaretDownIcon className={`${isPlansVisible ? 'rotateIcon' : ''}`} />
			</h4>
			<div className="groupPlanTypes">
				{
					isPlansVisible ?
					plans.map(({title, description}) => (
						<PlanCard title={title} description={description} key={title} />
					)) :
					null
				}
			</div>
		</div>
	)
};

export default PlanGroup;
