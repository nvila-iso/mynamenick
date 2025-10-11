import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { CompanyProvider } from "./context/CompanyContext.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CompanyProvider>
      <RouterProvider router={App} />
    </CompanyProvider>
  </StrictMode>
);
