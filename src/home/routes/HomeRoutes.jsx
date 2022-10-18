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
        <Route path="homeScreen/NivelAcademico" element={<NivelAcademico />} />
        <Route path="homeScreen/AccesoTransporte" element={<AccesoTransportePublico />} />
        <Route path="homeScreen/NivelProfesor" element={<NivelProfesor />} />
        <Route path="homeScreen/Ambiente" element={<Ambiente />} />
        <Route path="homeScreen/DemandaHoraria" element={<DemandaHoraria />} />
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
