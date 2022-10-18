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
import Nav from "../components/nav/Nav";

import ContactoForm from "../../Contacto/pages/ContactoForm";
import ForgotPassword from "../pages/auth/ForgotPassword";

export const HomeRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="NivelAcademico" element={<NivelAcademico />} />
        <Route path="AccesoTransporte" element={<AccesoTransportePublico />} />
        <Route path="NivelProfesor" element={<NivelProfesor />} />
        <Route path="Ambiente" element={<Ambiente />} />
        <Route path="DemandaHoraria" element={<DemandaHoraria />} />
        <Route path="homeScreen" element={<HomeScreen />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contacto" element={<ContactoForm />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />

        <Route path="*/" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
