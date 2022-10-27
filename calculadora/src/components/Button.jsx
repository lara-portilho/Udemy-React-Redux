import React from "react";
import './styles/Button.css'

export const Button = (props) => {
  return (
    <button className={`button ${props.className}`} onClick={_ => props.onClick(props.label)}>
        {props.label}
    </button>
  )
};
