import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContext from "./context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";
import StudentContext from "./context/StudentContext.jsx";
import EmployeeContext from "./context/EmployeeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <StudentContext>
        <EmployeeContext>
          <App />
        </EmployeeContext>
      </StudentContext>
      <Toaster />
    </AuthContext>
  </StrictMode>,
);
