import * as React from 'react';
import ColorPicker from "../../UI/organisms/ColorPicker";
import {colors} from '../../../data';

const ColorPickerScreen = () => {
  const [value, setValue] = React.useState('#ffffff');

  const handleSelectColor = (color: string) => {
    setValue(color);
  }

  return <ColorPicker value={value} onChange={handleSelectColor} colors={colors} />
};

export default ColorPickerScreen;
