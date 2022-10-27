import React from "react";
import './styles/Display.css'

export const Display = (props) => {
  return (
    <div className="display">
        {props.value}
    </div>
  )
};
