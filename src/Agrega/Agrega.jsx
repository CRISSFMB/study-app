import React from "react";
import logo from "./img/agrega.jpg";
import "./Agrega.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
export const Agrega = () => {
  return (
    <div className="agrega">
      <div className="agrega__logo">
        <button className="agrega__button ">x</button>
        <img src={logo} alt="" className="agrega__img" />
      </div>
      <div className="agrega__form">
        <form>
          <div className="form__div">
            <h2>Nombre de la universidad que querés agregar</h2>
            <div className="input__div">
              <input
                type="text"
                placeholder="Universidad nombre"
                className="input__form"
              />
              <AiOutlineCheckCircle className="check" size={25} />
            </div>
          </div>
          <div className="form__div">
            <h2>Dirección</h2>

            <div className="input__div">
              <input
                type="text"
                placeholder="Dirección 000"
                className="input__form"
              />
              <AiOutlineCheckCircle className="check" size={25} />
            </div>
          </div>

          <div className="form__div">
            <h2>Ubicación</h2>
            <div className="input__div">
              <input
                type="text"
                placeholder="Localidad, estado, provincia"
                className="input__form"
              />
              <AiOutlineCheckCircle className="check" size={25} />
            </div>
          </div>
          <div className="form__img">
            <div className="btn__carga">
              <h2>Cargá una imagen del campus</h2>
              <button className="btn__img">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42 37.3333V4.66667C42 2.1 39.9 0 37.3333 0H4.66667C2.1 0 0 2.1 0 4.66667V37.3333C0 39.9 2.1 42 4.66667 42H37.3333C39.9 42 42 39.9 42 37.3333ZM12.8333 24.5L18.6667 31.5233L26.8333 21L37.3333 35H4.66667L12.8333 24.5Z"
                    fill="#011826"
                  />
                </svg>
              </button>
            </div>
            <div className="btn__carga">
              <h2>Cargá una imagen del logo</h2>
              <button className="btn__img">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42 37.3333V4.66667C42 2.1 39.9 0 37.3333 0H4.66667C2.1 0 0 2.1 0 4.66667V37.3333C0 39.9 2.1 42 4.66667 42H37.3333C39.9 42 42 39.9 42 37.3333ZM12.8333 24.5L18.6667 31.5233L26.8333 21L37.3333 35H4.66667L12.8333 24.5Z"
                    fill="#011826"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="agrega__buttons">
            <button className="btn__add">Agregar universidad</button>
            <button className="btn__del">Borrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
