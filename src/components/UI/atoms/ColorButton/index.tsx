import './styles.scss';
import {MouseEventHandler} from "react";

const ColorButton = ({r, g, b, color, onClick}: Props) => (
    <button type="button" className="color-button" onClick={onClick}>
      <div style={{backgroundColor: `rgb(${r},${g},${b})`}} className="color-button-mark" />
    </button>
);

interface Props {
  color: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  r: number;
  g: number;
  b: number;
}

export default ColorButton;
