import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import Register from "../pages/auth/Register";
import { HomeScreen } from "../pages/HomeScreen";

import NavBar from "../../onBoarding/components/NavBar/NavBar";
import NivelAcademico from "../../onBoarding/components/NavBar/NivelAcademico";
import AccesoTransportePublico from "../../onBoarding/components/NavBar/AccesoTransportePublico";
import NivelProfesor from "../../onBoarding/components/NavBar/NivelProfesor";
import Ambiente from "../../onBoarding/components/NavBar/Ambiente";
import DemandaHoraria from "../../onBoarding/components/NavBar/DemandaHoraria";


export const HomeRoutes = () => {
  return (
    <>
      <NavBar/>
      
      <Routes>
        <Route path="/NivelAcademico" element ={<NivelAcademico/>} />
        <Route path="/AccesoTransporte" element ={<AccesoTransportePublico/>} />
        <Route path="/NivelProfesor" element ={<NivelProfesor/>} />
        <Route path="/Ambiente" element ={<Ambiente/>} />
        <Route path="/DemandaHoraria" element ={<DemandaHoraria/>} />
        <Route path="homeScreen" element={<HomeScreen />} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
