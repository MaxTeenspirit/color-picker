import './styles.scss';

const OkButton = ({text, onClick}: Props) => (
    <button onClick={onClick} type="button" className="ok-button">{text.toUpperCase()}</button>
);

interface Props {
  text: string;
  onClick: () => void;
}

export default OkButton;
