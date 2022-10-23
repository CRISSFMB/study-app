import styled, { css } from "styled-components";
/** Universidad */
const FontStyle = css`
  font-size: 22px;
  line-height: 20px;
  font-family: "Roboto";
  letter-spacing: 0.1px;
`;
const EffectBtn = css`
  transition: 0.3s ease-in-out;
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
  border-radius: 66px;
`;
const Displaygrid = css`
  display: grid;
  margin: 0 auto;
`;
// const Hearder = css`

// `
export const HeaderUniversidad = styled.div`
  background-color: #8C4A3B;
  height: 30rem;
  /* padding: 5rem; */
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const Span = styled.span`
  font-family: "roboto";
  font-size: 40px;
  font-weight: 300;
  font-style: normal;
  line-height: 64px;
  display: block;
  margin-left: 30.5rem;
  margin-top: 1.8rem;
`
export const ButtonClose = styled.button`
  ${EffectBtn}
  position: absolute;
  background: none;
  border: none;
  top: -0;
  left: 10px;
  color: #f2f2f2;
  font-size: 5rem;
  :hover {
    color: #011826;
  }
`;

export const DivForm = styled.div`
  ${Displaygrid}
  margin-top: 3rem;
  width: 80%;
  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const DivButtons = styled.div`
  ${Displaygrid}
  ${FontStyle}
  padding: 1rem;
  gap: 1rem;
  @media (min-width: 768px) {
    margin: 1rem auto;
    width: 80%;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ButtonSubmit = styled.button`
  ${EffectBtn}
  background: #011826;
  border: none;
  color: #f2f2f2;
  border: 1px solid #011826;
  :hover {
    padding: 1rem;
    border: 1px solid #011826;
    background: #ffffff;
    color: #011826;
  }
  @media (min-width: 768px) {
    ${FontStyle}
  }
`;
export const ButtonReset = styled.button`
  ${EffectBtn}
  background: #ffffff;
  border: 1px solid #011826;
  color: #011826;
  :hover {
    padding: 1rem;
    border: 1px solid #ffffff;
    background: #011826;
    color: #ffffff;
  }
  @media (min-width: 768px) {
    ${FontStyle}
  }
`;
export const BtnBack = styled.button`
  ${EffectBtn}
  ${Displaygrid}
  background: #011826;
  color: #f2f2f2;
  border: 1px solid #011826;
  width: 90%;
  margin-bottom: 2rem;
`;
/** Carrera */
export const Titulo = styled.h2`
  font-family: "Laout Beauty";
  font-style: normal;
  font-weight: 400;
  font-size: 15rem;
  line-height: 64px;
  color: #fff;
`;
export const HeaderCarrera = styled.div`
  display: flex;
  padding: 5rem;
  height: 30rem;
  background-color: #024059;
  align-items: center;
  justify-content: center;
`;
export const Imagen = styled.img`
  height: 15rem;
`;
export const ImgC = styled.img`
position: absolute;
  height: 8rem;
  opacity: .5;
  top: 3.2rem;
  right: 53rem;
  
`;
/** Input */
export const InputForm = styled.input`
  ${FontStyle}
  font-weight: 800;
  background-color: #f2f2f2;
  border: none;
  border-radius: 66px;
  width: 100%;
  padding: 1rem 3rem;
  color: #5d9ea6;
  ::placeholder {
    color: #5d9ea6;
  }
`;

export const H2 = styled.h2`
  ${FontStyle}
  margin: 1rem 0;
`;
export const DivInputs = styled.div`
  ${Displaygrid}

  grid-template-columns: 96% 4%;
  gap: 2rem;
  align-items: center;
`;
export const DivErrors = styled.div`
  ${Displaygrid}
  ${FontStyle}
  background-color: #a90202;
  border-radius: 66px;
  margin-top: 1rem;
  padding: 0.8rem;
  text-align: center;
  width: 60%;
  color: #ffffff;
`;
export const DivSelec = styled.div`
  ${Displaygrid}

  ${FontStyle}
  width: 90%;
  margin-top: 2rem;
  grid-template-columns: repeat(2, 1fr);

  `
export const Label = styled.label`
  ${FontStyle}
  color: #5d9ea6;

`

