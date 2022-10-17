import React, { useState } from "react";
import "./CalifUniversidades.css";
import logo from "./img/opina.jpg";
import Stars from "./Stars";

const CalifUniversidades = () => {
  const [input, setInput] = useState({
    nombre: "",
    universidad: "",
    comentario: "",
    trasporte: "",
  });
  return (
    <div className="opina">
      <div className="opina__div">
        <button className="opina__button ">x</button>
        <img src={logo} alt="" className="opina__img" />
      </div>
      <div className="form">
        <form>
          <div className="search gris">
            <h2>Universidad</h2>
            <div className="search__div">
              <input
                type="search"
                className="search__input"
                placeholder="Busca la Universidad que quieres cálificar"
              />
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="search__icon"
              >
                <path
                  d="M25 22H23.42L22.86 21.46C24.82 19.18 26 16.22 26 13C26 5.82 20.18 0 13 0C5.82 0 0 5.82 0 13C0 20.18 5.82 26 13 26C16.22 26 19.18 24.82 21.46 22.86L22 23.42V25L32 34.98L34.98 32L25 22ZM13 22C8.02 22 4 17.98 4 13C4 8.02 8.02 4 13 4C17.98 4 22 8.02 22 13C22 17.98 17.98 22 13 22Z"
                  fill="#011826"
                />
              </svg>
            </div>
          </div>
          <div className="search">
            <h2>Nivel académico</h2>
            <Stars />
          </div>
          <div className="search gris">
            <h2>Nivel profesor</h2>
            <Stars />
          </div>
          <div className="search">
            <h2>Ambiente</h2>
            <Stars />
          </div>
          <div className="search gris">
            <h2>Flexibilidad Horaria</h2>
            <Stars />
          </div>
          <div className="search">
            <h2>Demanda horario semanal</h2>
            <Stars />
          </div>
          <div className="search gris">
            <h2>Acceso Transporte público</h2>
            <Stars />
          </div>
          <div className="stars-gray"></div>
          <div className="buttons">
            <button className="button__send">Enviar</button>
            <button className="button__del">Borrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CalifUniversidades;
