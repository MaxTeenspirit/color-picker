import './styles.scss';

const CancelButton = ({isDisabled, text, onClick}: Props) => (
    <button onClick={onClick} typeof="button" className="cancel-button" disabled={isDisabled}>{text.toUpperCase()}</button>
);

interface Props {
  isDisabled: boolean;
  text: string;
  onClick: () => void;
}

export default CancelButton;
