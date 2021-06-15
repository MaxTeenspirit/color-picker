import './styles.scss';

const DropdownButton = ({isOpen}: Props) => (
    <button type="button" className="dropdown-button">
      <div className={`arrow-icon ${isOpen && 'opened'}`} />
    </button>
);

interface Props {
  isOpen: boolean;
}

export default DropdownButton;
