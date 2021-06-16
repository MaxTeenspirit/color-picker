import './styles.scss';
import {MouseEventHandler} from "react";

const ColorButton = ({color, onClick}: Props) => (
    <button type="button" className="color-button" onClick={onClick}>
      <div style={{backgroundColor: `${color}`}} className="color-button-mark" />
    </button>
);

interface Props {
  color: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default ColorButton;
