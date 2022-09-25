import React from "react";
import ReactDOM from "react-dom/client";
import StudyApp from "./StudyApp";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import RutasUniversidades from "./onBoarding/components/NavBar/RutasUniversidades";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <RutasUniversidades />
    </React.StrictMode>
  </BrowserRouter>
);
