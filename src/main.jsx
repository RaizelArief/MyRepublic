import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";         // ← pastikan ini dari react-dom/client
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";        // ← gunakan react-router-dom, bukan react-router
import "./custom.scss";     
import 'animate.css';                             // ← hanya import custom.scss

// Mounting root
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
