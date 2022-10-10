import React from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../../../store/slices/auth";
export default function ButtonSocial({ children }) {
  const dispatch = useDispatch();
  return (
    <button
      className="auth__style-button auth__style-input-social"
      onClick={() => dispatch(getUser())}
    >
      {" "}
      {children}
    </button>
  );
}
