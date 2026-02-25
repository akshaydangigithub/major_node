import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContext from "./context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";
import StudentContext from "./context/StudentContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <StudentContext>
        <App />
      </StudentContext>
      <Toaster />
    </AuthContext>
  </StrictMode>,
);
