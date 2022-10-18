import React, { useState, useReducer } from "react";
import Swal from "sweetalert2";
import InputNombre from "./InputNombre";
import InputEmail from "./inputEmail";
import TextArea from "./TextArea";
import Buttons from "./Buttons";
import "./formContacto.css";
import ButtonErase from "./ButtonErase";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      email: "",
      nombre: "",
      comments: "",
    };
  }
  return {
    ...state,
    [event.name]: event.data,
  };
};

const FormContacto = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [error, setError] = useState(false);

  const errorInputs = (error) => {
    setError(error);
  };
  const dataInputs = (e) => {
    setFormData({ name: e.target.name, data: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    if ((!error && formData.nombre, formData.email, formData.comments !== "")) {
      const data = {
        nombre: formData.nombre,
        email: formData.email,
        comments: formData.comments,
      };
      console.log("sendMail", data);
      setFormData({
        reset: true,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos deben estar completados!",
      });
    }
  };

  return (
    <form className="form_contacto" onSubmit={(e) => submitForm(e)}>
      <label>
        <p className="form_contacto_label">Nombre y apellido</p>
      </label>
      <div className="contenedorInput">
        <InputNombre
          placeholder={"Juan Perez"}
          dataInputs={dataInputs}
          errorInputs={errorInputs}
          value={formData.nombre || ""}
        />
      </div>
      <label className="form_contacto_label">Email</label>
      <div className="contenedorInput">
        <InputEmail
          placeholder={"nombre@mail.com"}
          dataInputs={dataInputs}
          errorInputs={errorInputs}
          value={formData.email || ""}
        />
      </div>
      <TextArea
        errorInputs={errorInputs}
        dataInputs={dataInputs}
        value={formData.comments || ""}
      />
      <div className="contenedor_form_btn">
        <Buttons name="enviar" style="contacto_btn_blue " type={"submit"} />
        <ButtonErase
          name="Borrar"
          style="contacto_btn_white "
          setFormData={setFormData}
        />
      </div>
    </form>
  );
};

export default FormContacto;
