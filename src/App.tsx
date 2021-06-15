import React from 'react';
import './App.scss';
import ValueBox from "./components/UI/atoms/ValueBox";
import ColorButton from "./components/UI/atoms/ColorButton";
import DropdownButton from "./components/UI/atoms/DropdownButton";

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <ValueBox value={'#FFCC33'} />
      <ColorButton color={'green'} />
      <DropdownButton isOpen={false} />
    </div>
  );
}

export default App;
