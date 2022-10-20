import React, { useEffect, useState } from "react";
import logo from "./img/agrega.jpg";
import { Link } from "react-router-dom";
import "./Agrega.css";
import { useFormik } from "formik";
import { AiOutlineCheckCircle } from "react-icons/ai";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUniversity } from "../../store/slices/university";
import Swal from "sweetalert2";
import { universidades } from "../../Firebase/firebase-utils";

export const AgregaUniversidad = () => {
  const dispatch = useDispatch();
  const initialValues = {
    title: "",
    address: "",
    location: "",
    image: "",
    page: "",
  };
  const re =
    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
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

      image: Yup.string().matches(re, "URL no valida").required(required),
      page: Yup.string().matches(re, "URL no valida").required(required),
    });

  const onSubmit = async () => {
    Swal.fire({
      title: "Cargando...",
      text: "Espere por favor...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    universidades(values);
    dispatch(addUniversity(values));
    resetForm();

    setTimeout(() => {
      Swal.close();
    }, 2000);
  };
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
        <Link to="/homeScreen">
          <button className="agrega__button">x</button>
        </Link>
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

              {errors.title && touched.title ? (
                <AiOutlineCheckCircle
                  className="check"
                  name="title"
                  size={35}
                  style={{ color: "red" }}
                />
              ) : (
                <AiOutlineCheckCircle
                  className="check"
                  name="title"
                  size={35}
                  style={
                    (values.title.length === 0 && { color: "black" }) ||
                    (values.title.length >= 6 && { color: "green" })
                  }
                />
              )}
            </div>
            {errors.title && touched.title && (
              <div className="agrega__error">{errors.title}</div>
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
              {errors.address && touched.address ? (
                <AiOutlineCheckCircle
                  className="check"
                  name="address"
                  size={35}
                  style={{ color: "red" }}
                />
              ) : (
                <AiOutlineCheckCircle
                  className="check"
                  name="address"
                  size={35}
                  style={
                    (values.address.length === 0 && { color: "black" }) ||
                    (values.address.length >= 6 && { color: "green" })
                  }
                />
              )}
            </div>
            {errors.address && touched.address && (
              <div className="agrega__error">{errors.address}</div>
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
              {errors.location && touched.location ? (
                <AiOutlineCheckCircle
                  className="check"
                  name="location"
                  size={35}
                  style={{ color: "red" }}
                />
              ) : (
                <AiOutlineCheckCircle
                  className="check"
                  name="location"
                  size={35}
                  style={
                    (values.location.length === 0 && { color: "black" }) ||
                    (values.location.length >= 6 && { color: "green" })
                  }
                />
              )}
            </div>
            {errors.location && touched.location && (
              <div className="agrega__error">{errors.location}</div>
            )}
          </div>
          <div className="form__div">
            <h2>Cargá una imagen del campus</h2>
            <div className="input__div">
              <input
                id="imageUp"
                type="text"
                placeholder="Cargá una imagen"
                className="input__form"
                name="image"
                onChange={handleChange}
                value={values.image}
              />

              {errors.image && touched.image ? (
                <AiOutlineCheckCircle
                  className="check"
                  name="image"
                  size={35}
                  style={{ color: "red" }}
                />
              ) : (
                <AiOutlineCheckCircle
                  className="check"
                  name="image"
                  size={35}
                  style={
                    (values.image.length === 0 && { color: "black" }) ||
                    (values.image.length >= 6 && { color: "green" })
                  }
                />
              )}
            </div>
            {errors.image && touched.image && (
              <div className="agrega__error">{errors.image}</div>
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
              {errors.page && touched.page ? (
                <AiOutlineCheckCircle
                  className="check"
                  name="page"
                  size={35}
                  style={{ color: "red" }}
                />
              ) : (
                <AiOutlineCheckCircle
                  className="check"
                  name="page"
                  size={35}
                  style={
                    (values.page.length === 0 && { color: "black" }) ||
                    (values.page.length >= 6 && { color: "green" })
                  }
                />
              )}
              {errors.page && touched.page && (
                <div className="agrega__error">{errors.page}</div>
              )}
            </div>
          </div>
          <div className="agrega__buttons">
            <button className="btn__add" type="submit">
              Agregar universidad
            </button>
            <button className="btn__del" type="reset" onClick={resetForm}>
              Borrar
            </button>
          </div>
          <div className="agrega__back">
            <Link to="/homeScreen" className="btn__back">
              Regresar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
