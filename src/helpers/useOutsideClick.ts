import * as React from 'react';
import {RefObject} from "react";

export const useOutsideClick = (ref: RefObject<any>, toggleDropdown: (data: boolean) => void) => {
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        toggleDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [ref])
};
