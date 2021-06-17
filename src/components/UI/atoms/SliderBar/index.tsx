import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles.scss';

const SliderBar = (
    {
      label,
      initialValue,
      onChange,
    }: Props) => {
  return (
      <div className="slider-wrapper">
        <p className="label">{label}</p>
        <Slider
            min={0}
            max={255}
            defaultValue={initialValue}
            onChange={onChange}
        />
      </div>
  )
};

interface Props {
  label: string;
  initialValue: number;
  onChange: (data: number) => void;
}

export default SliderBar;
