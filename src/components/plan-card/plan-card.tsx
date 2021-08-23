
import './plan-card.css';

type planCardProps = {
	title: string;
	description: string;
}

const PlanCard = ({title, description}: planCardProps) => {
	return (
		<div className="planCard">
			<h4>{title}</h4>
			<p>{description}</p>
		</div>
	)
};

export default PlanCard;
