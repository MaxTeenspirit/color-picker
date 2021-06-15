import './styles.scss';

const ColorButton = ({color}: Props) => (
    <button type="button" className="color-button">
      <div style={{backgroundColor: `${color}`}} className="color-button-mark" />
    </button>
);

interface Props {
  color: string;
}

export default ColorButton;
