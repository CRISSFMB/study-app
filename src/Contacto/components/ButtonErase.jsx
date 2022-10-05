import React from "react";
import "./buttons.css";
const ButtonErase = ({ name, style, setFormData }) => {
  const handleErase = () => {
    setFormData({
      reset: true,
    });
  };

  return (
    <button className={style} type="button" onClick={(e) => handleErase(e)}>
      {name}
    </button>
  );
};
export default ButtonErase;
