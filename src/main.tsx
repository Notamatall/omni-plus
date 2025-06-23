import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import { OmniLandingPage } from "./App2";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OmniLandingPage />
  </StrictMode>
);
