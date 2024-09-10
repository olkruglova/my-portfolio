import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Pages/App.tsx";
import "./index.css";
import "./i18n.ts";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
