import * as React from 'react';
import './styles.scss';
import {SliderBar} from "../../atoms";

const RGBSliders = ({r, g, b, setR, setG, setB}: Props) => {

  return (
      <div className="sliders-wrapper">
        <SliderBar label="R" initialValue={r} onChange={setR} />
        <SliderBar label="G" initialValue={g} onChange={setG} />
        <SliderBar label="B" initialValue={b} onChange={setB} />
      </div>
  )
};

interface Props {
  r: number;
  g: number;
  b: number;
  setR: (data: number) => void;
  setG: (data: number) => void;
  setB: (data: number) => void;
}

export default RGBSliders;
