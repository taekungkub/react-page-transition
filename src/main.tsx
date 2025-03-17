import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </StrictMode>
);
