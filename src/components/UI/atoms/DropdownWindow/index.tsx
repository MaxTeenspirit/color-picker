import * as React from 'react';
import './styles.scss';

const DropdownWindow = ({children}: Props) => (
    <div className="dropdown-window">
      {children}
      <div className="dropdown-window-triangle"/>
    </div>
);

interface Props {
  children: React.ReactNode;
}

export default DropdownWindow;
