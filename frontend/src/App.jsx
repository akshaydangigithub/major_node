import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuthGard from "./components/AuthGard";
import Signup from "./pages/Signup";
import StudentLayout from "./pages/student/Layout";
import StudentDashboard from "./pages/student/Dashboard";
import ResumePage from "./pages/student/resumePage";

const ProtectedHome = AuthGard(Home);
const ProtectedStudentDashboard = AuthGard(StudentDashboard);
const ProtectedResumePage = AuthGard(ResumePage);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student" element={<StudentLayout />}>
          <Route
            path="dashboard"
            index
            element={<ProtectedStudentDashboard />}
          />
          <Route path="resume" element={<ProtectedResumePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
