/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProjectProvider } from "./context/ProjectContext";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ProjectProvider>
    </BrowserRouter>
  </React.StrictMode>
);
