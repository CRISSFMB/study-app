import React from "react";
import ReactDOM from "react-dom/client";
import StudyApp from "./StudyApp";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AccesoPublico from "./onBoarding/pages/AccesoPublico";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <AccesoPublico />
    </React.StrictMode>
  </BrowserRouter>
);
