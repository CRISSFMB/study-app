import React from "react";
import { signInGoogle } from "../../../../Firebase/firebase-utils";
export default function ButtonSocial({ children, onclick }) {

  return (
    <button
      className="auth__style-button auth__style-input-social"
      onClick={() => {onclick()}}
    >
      {" "}
      {children}
    </button>
  );
}
