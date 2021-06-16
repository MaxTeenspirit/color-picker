import './styles.scss';
import {Color} from "../../../../types";

const ColorListItem = ({color, onChange, toggleDropdown}: Props) => {
  const handleItemClick = () => {
    onChange(color.hex);
    toggleDropdown(false);
  };

  return (
      <div className="color-list-item" onClick={handleItemClick}>
        <p className="color-item-label">{color.label?.toUpperCase()}</p>
        <div className="color-item-mark" style={{backgroundColor: color.hex}} />
      </div>
  );
};

interface Props {
  color: Color;
  onChange: (data: string) => void;
  toggleDropdown: (data: boolean) => void;
}

export default ColorListItem;
