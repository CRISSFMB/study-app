import React from "react";
import lapicero from "./img/lapicero.png";
import "./AgregarCarrera.css";
import styled from "styled-components";
export const AgregarCarrera = () => {
  const Banner = styled.div`
    display: grid;
      padding: 2rem;
      background-color: #024059;
      align-items: center;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
  `;

  return (
    <div>
      <Banner >
        <img src={lapicero} alt="" className="carrera__img" />
        <h2 className="h2__carrera">Agrega Carreras</h2>
      </Banner>
      <div className="form__carrera">
        <form>
          <div className="form__div">
            <h2>Nombre de la carrera que querés agregar</h2>
            <div className="input__div">
              <input
                name="title"
                type="text"
                placeholder="Carrera nombre"
                className="input__form"
              />
            </div>
          </div>
          <div className="form__div">
            <h2>Universidad</h2>
            <div className="input__div">
              <input
                name="title"
                type="text"
                placeholder="Universidad nombre"
                className="input__form"
              />
            </div>
          </div>
          <div className="form__div">
            <h2>Descripción</h2>
            <div className="input__div">
              <input
                name="title"
                type="text"
                placeholder="Descripción"
                className="input__form"
              />
            </div>
          </div>
          <div className="form__div">
            <h2>Link</h2>
            <div className="input__div">
              <input
                name="title"
                type="text"
                placeholder="Link"
                className="input__form"
              />
            </div>
          </div>
          <div className="form__div">
            <h2>Imagen</h2>
            <div className="input__div">
              <input
                name="title"
                type="text"
                placeholder="Imagen"
                className="input__form"
              />
            </div>
          </div>
           <div className="form__div">

            <button >X</button>
            <button >X</button>
            <button >X</button>
           </div>
        </form>
      </div>
    </div>
  );
};
