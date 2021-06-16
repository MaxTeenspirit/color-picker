import * as React from "react";
import './styles.scss';
import {ColorButton, DropdownWindow} from "../../atoms";
import {useOutsideClick} from '../../../../helpers/useOutsideClick';

const ColorBox = ({value}: Props) => {
  const dropWindowRef = React.useRef<HTMLDivElement>(null);

  const [isDropdown, toggleDropdown] = React.useState(false);

  useOutsideClick(dropWindowRef, toggleDropdown);

  const openModal = () => toggleDropdown(true);

  return (
      <div className="color-box">
        <ColorButton color={value} onClick={openModal} />
        {isDropdown && (
            <div ref={dropWindowRef}>
              <DropdownWindow>
                <div style={{width: 100, height: 80}}/>
              </DropdownWindow>
            </div>
        )}

      </div>
  )
};

interface Props {
  value: string;
}

export default ColorBox;
