import React, { useContext } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const Layout = () => {
  const { user } = useContext(AuthProvider);

  const studentMenu = [
    { label: "Dashboard", path: "/student/dashboard", icon: "📊" },
    { label: "Resume", path: "/student/resume", icon: "📄" },
    { label: "Profile", path: "/student/profile", icon: "👤" },
  ];

  const employeeMenu = [
    { label: "Dashboard", path: "/employee/dashboard", icon: "📊" },
    { label: "Profile", path: "/employee/profile", icon: "👤" },
    { label: "Internship", path: "/employee/internship", icon: "📄" },
  ];

  const menuItems = user?.role === "student" ? studentMenu : employeeMenu;

  return (
    <>
      <Navbar />

      <main className="flex">
        <div className="w-72">
          <Sidebar items={menuItems} />
        </div>
        <div className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
