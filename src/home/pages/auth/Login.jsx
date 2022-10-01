import React from "react";
import ContainerAuth from "./components/ContainerAuth";
import FormLogin from "./components/FormLogin";

export default function Login() {
  return (
    <div className="auth__container">
      <ContainerAuth name={"Inicia sesión"}>
        <FormLogin />
      </ContainerAuth>
    </div>
  );
}
