import React from "react";
import ReactDOM from "react-dom/client";
import StudyApp from "./StudyApp";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <StudyApp />
    </React.StrictMode>
  </BrowserRouter>
);
