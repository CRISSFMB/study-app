import { Navigate, Route, Routes } from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";

export const HomeRoutes = () => {
  return (
    <>
      <p>AQUI VA EL NAV</p>
      <p>Y TAMBIEN AQUI VAN LAS RUTAS QUE PERTENECEN AL HOMESCREEN ANDRES</p>
      <Routes>
        <Route path="homeScreen" element={<HomeScreen />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};