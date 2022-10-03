import React from "react";
import "./buttons.css";
const Buttons = ({ name, style, type }) => {
  const HandleClick = (e) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <button className={style} type={type} onClick={(e) => HandleClick(e)}>
      {name}
    </button>
  );
};

export default Buttons;
