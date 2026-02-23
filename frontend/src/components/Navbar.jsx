import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const Navbar = () => {
  const { user, Logout } = useContext(AuthProvider);

  return (
    <div className="flex items-center justify-between bg-gray-100 py-4 px-10">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/8/8b/Internshala_company_logo.png"
        className="w-32 h-16 object-contain"
        alt=""
      />
      <div>
        <Link
          to="/jobs"
          className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
        >
          Jobs
        </Link>
      </div>
      <div>
        {/* user details and dropdown logout butotn */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
            <img
              src={
                user?.profileImage ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgs2DOOnn9pY67TodjACV0st9VwO1Q-ZdxOA&s"
              }
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-700 font-medium">{user?.name}</span>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Dashboard
            </Link>
            <button
              onClick={Logout}
              className="w-full text-left px-4 py-2 text-red-700 hover:bg-red-100 border-t"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
