import * as React from 'react';
import './styles.scss';
import {DropdownButton, DropdownWindow, ColorListItem} from "../../atoms";
import {useOutsideClick} from '../../../../helpers/useOutsideClick';
import {Color} from "../../../../types";

const DropdownBox = ({colors, onChange}: Props) => {
  const dropWindowRef = React.useRef<HTMLDivElement>(null);

  const [isDropdown, toggleDropdown] = React.useState(false);

  useOutsideClick(dropWindowRef, toggleDropdown);

  const openModal = () => toggleDropdown(true);

  return (
      <div className="dropdown-box">
        <DropdownButton isOpen={isDropdown} onClick={openModal} />
        {isDropdown && (
            <div ref={dropWindowRef}>
              <DropdownWindow>
                {colors.map(color => <ColorListItem toggleDropdown={toggleDropdown} onChange={onChange} key={color.hex} color={color} />)}
              </DropdownWindow>
            </div>
        )}
      </div>
  )
};

interface Props {
  colors: Array<Color>;
  onChange: (data: string) => void;
}

export default DropdownBox;
