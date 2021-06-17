import * as React from "react";
import './styles.scss';
import {useDispatch} from "react-redux";
import {setColor} from '../../../../redux/slices/colorSlice';
import {ColorButton, DropdownWindow, CancelButton, OkButton} from "../../atoms";
import {useOutsideClick} from '../../../../helpers/useOutsideClick';
import RGBSliders from "../RGBSliders";
import {hexToRgb, RgbToHex} from "../../../../helpers/colorConverters";

const ColorBox = ({value, onChange}: Props) => {
  const dropWindowRef = React.useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const [isDropdown, toggleDropdown] = React.useState(false);

  useOutsideClick(dropWindowRef, toggleDropdown);

  const [valueR, setValueR] = React.useState(0);
  const [valueG, setValueG] = React.useState(0);
  const [valueB, setValueB] = React.useState(0);

  React.useEffect(() => {
    if (value && value?.length) {
      const rgb = hexToRgb(value);
      if (rgb) {
        setValueR(rgb.r);
        setValueG(rgb.g);
        setValueB(rgb.b);
      }
    }
  }, [value]);

  React.useEffect(() => {
    if (!isDropdown) {
      const rgb = hexToRgb(value);
      if (rgb) {
        setValueR(rgb.r);
        setValueG(rgb.g);
        setValueB(rgb.b);
      }
    }
  }, [isDropdown])

  const openModal = () => toggleDropdown(true);

  const handleSaveColor = () => {
    const convertedColor = RgbToHex(valueR, valueG, valueB);
    dispatch(setColor(convertedColor));
    toggleDropdown(false);
  };

  const handleCancel = () => {
    toggleDropdown(false);
  };

  return (
      <div className="color-box">
        <ColorButton r={valueR} g={valueG} b={valueB} color={value} onClick={openModal} />
        {isDropdown && (
            <div ref={dropWindowRef}>
              <DropdownWindow>
                <RGBSliders
                    r={valueR}
                    g={valueG}
                    b={valueB}
                    setR={setValueR}
                    setG={setValueG}
                    setB={setValueB}
                />
                <div className="buttons-container">
                  <div className="button-wrapper">
                    <CancelButton
                        onClick={handleCancel}
                        isDisabled={value === RgbToHex(valueR, valueG, valueB)}
                        text="Cancel"
                    />
                  </div>
                  <div className="button-wrapper">
                    <OkButton
                        onClick={handleSaveColor}
                        text="Ok"
                    />
                  </div>
                </div>
              </DropdownWindow>
            </div>
        )}
      </div>
  )
};

interface Props {
  value: string;
  onChange: (data: string) => void;
}

export default ColorBox;
