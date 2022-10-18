import React from "react";
import "./buttons.css";
const Buttons = ({ name, style, type }) => {
  return (
    <button className={style} type={type}>
      {name}
    </button>
  );
};

export default Buttons;
