import React from "react";
import lapicero from "./img/lapicero.png";
import { Field, Form, Formik } from "formik";
import { Input } from "../Input";
import {
  BtnBack,
  ButtonClose,
  ButtonReset,
  ButtonSubmit,
  DivButtons,
  DivForm,
  H2,
  HeaderCarrera,
  Imagen,
  Titulo,
} from "../MyList.styled";
import { ValidationCarrera } from "../Validation";
import { ValueCarrera } from "../Values";
import { Link } from "react-router-dom";
import Select from "./Select";
import { addCarreras } from "../../Firebase/firebase-utils";

export const AgregarCarrera = () => {

  return (
    <>
      <HeaderCarrera>
        <Link to="/homeScreen">
          <ButtonClose>x</ButtonClose>
        </Link>
        <Imagen src={lapicero} alt="lapicero" />
        <Titulo>Agrega Carreras</Titulo>
      </HeaderCarrera>
      <DivForm>
        <Formik
          initialValues={ValueCarrera}
          validationSchema={ValidationCarrera}
          onSubmit={(values, { resetForm }) => {
            // Submit(values)
            addCarreras(values);
            // console.log(values);
            resetForm();
          }}
        >
          {(props) => (
            <Form>
              <Field
                label="Nombre de la carrera que querés agregar"
                name="titleCarrera"
                placeholder="Nombre de la Carrera"
                type="text"
                as={Input}
              />
              <Field
                type="checkbox"
                label="Universidad"
                name="university"
                as={Select}
              />
              <Field
                label="Descripción de la carrera"
                name="description"
                placeholder="Breve descripción de la carrera"
                type="text"
                as={Input}
              />
              <Field
                label="Sitio web de la carrera"
                name="url"
                placeholder="www.studyapp.com"
                type="text"
                as={Input}
              />
              <Field
                label="Imagen de la carrera"
                name="imagen"
                placeholder="image"
                type="text"
                as={Input}
              />
              <DivButtons>
                <ButtonSubmit type="submit">Agregar Carrear</ButtonSubmit>
                <ButtonReset type="button" onClick={() => props.resetForm()}>
                  Borrar
                </ButtonReset>
              </DivButtons>
            </Form>
          )}
        </Formik>
      </DivForm>
    </>
  );
};
