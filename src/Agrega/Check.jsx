import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export const Check = ({ name, values }) => {
  // console.log(values);
  return (
    <>
      {values === "" ? (
        <AiOutlineCheckCircle
          className="check"
          size={45}
          name={name}
          style={{ color: "black", fontWeight: "bold" }}
        />
      ) : values.length >= 5 ? (
        <AiOutlineCheckCircle
          className="check"
          size={45}
          name={name}
          style={{ color: "green", fontWeight: "bold" }}
        />
      ) : (
        <AiOutlineCloseCircle
          className="check"
          size={45}
          name={name}
          style={{ color: "red", fontWeight: "bold" }}
        />
      )}
    </>
  );
};
