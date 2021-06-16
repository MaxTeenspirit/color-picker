import './styles.scss';
import {MouseEventHandler} from "react";

const DropdownButton = ({isOpen, onClick}: Props) => (
    <button type="button" className="dropdown-button" onClick={onClick}>
      <div className={`arrow-icon ${isOpen && 'opened'}`} />
    </button>
);

interface Props {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default DropdownButton;
