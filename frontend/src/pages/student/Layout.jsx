import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const adminMenu = [
    { label: "Dashboard", path: "/student/dashboard", icon: "📊" },
    { label: "Resume", path: "/student/resume", icon: "📄" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex">
        <div className="w-72">
          <Sidebar items={adminMenu} />
        </div>
        <div className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
