import React from "react";
import ContainerAuth from "./components/ContainerAuth";
import FormLogin from "./components/FormLogin";
import {firebaseConfig} from "../../../Firebase/firebase-config"
export default function Login() {
  return (
    <div className="auth__container">
      <ContainerAuth name={"Inicia sesión"}>
        <FormLogin />

      </ContainerAuth>
    </div>
  );
}
