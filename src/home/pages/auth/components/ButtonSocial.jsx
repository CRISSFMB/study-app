import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "./../../../../store/slices/auth";
export default function ButtonSocial({ children }) {
  const dispatch = useDispatch();
  return (
    <button
      className="auth__style-button auth__style-input-social"
      onClick={() =>
        dispatch(
          auth({ nombre: "robert", email: "ro@gmail.com", token: "123123" })
        )
      }
    >
      {" "}
      {children}
    </button>
  );
}
