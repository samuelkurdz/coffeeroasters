
import './mainbutton.css';

type ButtonProps = {
  children: JSX.Element;
	state: 'default' | 'disabled',
};

const MainButton = ({children, state}: ButtonProps) => {
	return (
		<button className={`main-button ${state}`}>
			{children}
		</button>
	)
}

export default MainButton;
