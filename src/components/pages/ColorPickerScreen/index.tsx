import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setColor, colorSelector } from "../../../redux/slices/colorSlice";
import ColorPicker from "../../UI/organisms/ColorPicker";
import { colors } from '../../../data';

const ColorPickerScreen = () => {
  const dispatch = useDispatch();
  const { color } = useSelector(colorSelector);

  const [value, setValue] = React.useState(color);

  React.useEffect(() => {
    setValue(color);
  }, [color]);

  const handleSelectColor = (color: string) => {
    dispatch(setColor(color));
  }

  return <ColorPicker value={value} onChange={handleSelectColor} colors={colors} />
};

export default ColorPickerScreen;
