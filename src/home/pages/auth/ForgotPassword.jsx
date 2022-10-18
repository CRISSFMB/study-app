import React from "react";
import ContainerAuth from "./components/ContainerAuth";
import FormForgotPassword from "./components/FormForgotPassword";
export default function ForgotPassword() {
  return (
    <div className="auth__container">
      <ContainerAuth name={"Recuperar Contraseña"}>
        <FormForgotPassword />

      </ContainerAuth>
    </div>
  );
}