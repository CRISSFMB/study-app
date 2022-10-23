import React from "react";
import Icon from "./img/icon.png";
import Comillas from "./img/comillas.png";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { Input } from "../Input";
import {
  BtnBack,
  ButtonClose,
  ButtonReset,
  ButtonSubmit,
  DivButtons,
  DivForm,
  HeaderUniversidad,
  Imagen,
  ImgC,
  Span,
  Titulo,
} from "../MyList.styled";
import { ValidationUniversidad } from "../Validation";
import { ValueUniversidad } from "../Values";
import Swal from "sweetalert2";
import { universidades } from "../../Firebase/firebase-utils";
import { useDispatch, useSelector } from "react-redux";
import { addUniversity } from "../../store/slices/university";
export const AgregaUniversidad = () => {
  const dispatch = useDispatch();
  return (
    <>
      <HeaderUniversidad>
        <Link to="/homeScreen">
          <ButtonClose>x</ButtonClose>
        </Link>
        <>
          <Imagen src={Icon} alt="lapicero" />

          <Titulo>
            Agrega
            <Span>una Universidad</Span>
          </Titulo>
          <ImgC src={Comillas} alt="lapicero" />
        </>
      </HeaderUniversidad>
      <DivForm>
        <Formik
          initialValues={ValueUniversidad}
          validationSchema={ValidationUniversidad}
          onSubmit={(values, { resetForm }) => {
            Swal.fire({
              title: "Cargando...",
              text: "Espere por favor...",
              allowOutsideClick: false,
              didOpen: () => {
                Swal.showLoading();
              },
            });
            dispatch(addUniversity(values));

            universidades(values);
            setTimeout(() => {
              Swal.close();
            }, 2000);
            resetForm();
           
          }}
        >
          {(props) => (
            <Form>
              <Field
                label="Nombre de la universidad que querés agregar"
                name="title"
                placeholder="Nombre de la universidad"
                type="text"
                as={Input}
              />
              <Field
                label="Dirección de la universidad"
                name="address"
                placeholder="Dirección 000"
                type="text"
                as={Input}
              />
              <Field
                label="Ubicación"
                name="location"
                placeholder="Nombre de la universidad"
                type="text"
                as={Input}
              />
              <Field
                label="Telefono"
                name="tel"
                placeholder="Nombre de la universidad"
                type="number"
                as={Input}
              />
              <Field
                label="Cargá una imagen del campus"
                name="image"
                placeholder="Cargá una imagen"
                type="text"
                as={Input}
              />
              <Field
                label="Sitio web"
                name="page"
                placeholder="www.universidad.com"
                type="text"
                as={Input}
              />
              <Field
                label="Email"
                name="email"
                placeholder="universidad@studyapp.com"
                type="text"
                as={Input}
              />
              <DivButtons>
                <ButtonSubmit type="submit">Agregar Universidad</ButtonSubmit>
                <ButtonReset type="button" onClick={() => props.resetForm()}>
                  Borrar
                </ButtonReset>
              </DivButtons>
              <BtnBack>Regresar</BtnBack>
            </Form>
          )}
        </Formik>
      </DivForm>
    </>
  );
};
