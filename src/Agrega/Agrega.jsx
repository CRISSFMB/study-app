import React, { useEffect, useState } from "react";
import logo from "./img/agrega.jpg";
import "./Agrega.css";
import { useFormik } from "formik";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsImage } from "react-icons/bs";

import * as Yup from "yup";

export const Agrega = () => {

  const initialValues = {
    title: "",
    address: "",
    location: "",
    image: "",
    page: "",
  };
  const onSubmit = (e) => {
    e.preventDefault();

  };
  const required = "* Campo obligatorio";
  const validationSchema = () =>
    Yup.object().shape({
      title: Yup.string()
        .min(6, "La cantidad mínima de caracteres es 6")
        .required(required),
      address: Yup.string()
        .min(10, "La cantidad mínima de caracteres es 10")
        .required(required),
      location: Yup.string().required(required),
      image: Yup.string().required(required),
      page: Yup.string().required(required),
    });
  
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const {
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
  } = formik;
  return (
    <div className="agrega">
      <div className="agrega__logo">
        <button className="agrega__button ">x</button>
        <img src={logo} alt="" className="agrega__img" />
      </div>
      <div className="agrega__form">
        <form onSubmit={handleSubmit}>
          <div className="form__div">
            <h2>Nombre de la universidad que querés agregar</h2>
            <div className="input__div">
              <input
                name="title"
                type="text"
                placeholder="Universidad nombre"
                className="input__form"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />

              <AiOutlineCheckCircle
                className="check"
                name="title"
                size={25}
                style={touched.title && errors.title && { color: "red" }}
              />
            </div>
            {errors.title && touched.title && (
              <div className="error">{errors.title}</div>
            )}
          </div>
          <div className="form__div">
            <h2>Dirección</h2>

            <div className="input__div">
              <input
                name="address"
                type="text"
                placeholder="Dirección 000"
                className="input__form"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              <AiOutlineCheckCircle
                className="check"
                name="address"
                size={25}
                style={touched.address && errors.address && { color: "red" }}
              />
            </div>
            {errors.address && touched.address && (
              <div className="error">{errors.address}</div>
            )}
          </div>

          <div className="form__div">
            <h2>Ubicación</h2>
            <div className="input__div">
              <input
                name="location"
                type="text"
                placeholder="Localidad, estado, provincia"
                className="input__form"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
              />
              <AiOutlineCheckCircle
                name="location"
                className="check"
                size={25}
                style={touched.location && errors.location && { color: "red" }}
              />
            </div>
            {errors.location && touched.location && (
              <div className="error">{errors.location}</div>
            )}
          </div>
          <div className="form__div">
            <h2>Cargá una imagen del campus</h2>
            <div className="input__div">
              <input
                name="image"
                type="text"
                placeholder="Cargá una imagen"
                className="input__form"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
              />
              <AiOutlineCheckCircle
                name="image"
                className="check"
                size={25}
                style={touched.image && errors.image && { color: "red" }}
              />
            </div>
            {errors.image && touched.image && (
              <div className="error">{errors.image}</div>
            )}
          </div>
          <div className="form__div">
            <h2>Cargá una URL del campus</h2>
            <div className="input__div">
              <input
                name="page"
                type="text"
                placeholder="www.universidad.com"
                className="input__form"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.page}
              />
              <AiOutlineCheckCircle
                name="page"
                className="check"
                size={25}
                style={touched.page && errors.page && { color: "red" }}
              />
            </div>
            {errors.page && touched.page && (
              <div className="error">{errors.url}</div>
            )}
          </div>
          <div className="agrega__buttons">
            <button className="btn__add">Agregar universidad</button>
            <button className="btn__del" type="reset" onClick={resetForm}>
              Borrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
