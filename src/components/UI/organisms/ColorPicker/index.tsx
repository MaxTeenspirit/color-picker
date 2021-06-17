import React from "react";
import './styles.scss';
import {ValueBox} from "../../atoms";
import {ColorBox, DropdownBox} from "../../molecules";
import {Color} from "../../../../types";

const ColorPicker = ({value, onChange, colors}: Props) => (
    <div className="color-picker">
      <ValueBox value={value} />
      <ColorBox onChange={onChange} value={value} />
      <DropdownBox onChange={onChange} colors={colors} />
    </div>
);

interface Props {
  value: string;
  onChange: (data: string) => void;
  colors: Array<Color>;
}

export default ColorPicker;
