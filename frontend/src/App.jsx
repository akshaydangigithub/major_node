import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuthGard from "./components/AuthGard";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import StudentDashboard from "./pages/student/Dashboard";
import ResumePage from "./pages/student/resumePage";
import ProfilePage from "./pages/student/ProfilePage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import EmpDashboard from "./pages/employee/Dashboard";
import ProfilePageEmp from "./pages/employee/ProfilePage";
import Internship from "./pages/employee/Internship";

const ProtectedHome = AuthGard(Home);
const ProtectedStudentDashboard = AuthGard(StudentDashboard);
const ProtectedResumePage = AuthGard(ResumePage);
const ProtectedProfilePage = AuthGard(ProfilePage);
const ProtectedEmpDashboard = AuthGard(EmpDashboard);
const ProtectedProfilePageEmp = AuthGard(ProfilePageEmp);
const ProtectedInternship = AuthGard(Internship);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student" element={<Layout />}>
          <Route
            path="dashboard"
            index
            element={<ProtectedStudentDashboard />}
          />
          <Route path="resume" element={<ProtectedResumePage />} />
          <Route path="profile" element={<ProtectedProfilePage />} />
        </Route>
        <Route path="/employee" element={<Layout />}>
          <Route path="dashboard" index element={<ProtectedEmpDashboard />} />
          <Route path="profile" element={<ProtectedProfilePageEmp />} />
          <Route path="internship" element={<ProtectedInternship />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
