import React, { useContext } from "react";
import { AuthProvider } from "../../context/AuthContext";

const StudentDetails = () => {
  const { user } = useContext(AuthProvider);
  return (
    <div className="flex justify-between items-start border-b border-gray-200 pb-6 mb-2 mt-4">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          {user?.name}
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </h2>
        <div className="text-gray-600 mt-3 space-y-1 text-sm">
          <p>{user?.email}</p>
          <p>{user?.phone}</p>
          <p className="capitalize">{user?.role}</p>
        </div>
      </div>

      <button className="text-[#008bdc] hover:text-blue-700 font-medium flex items-center gap-1">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download
      </button>
    </div>
  );
};

export default StudentDetails;
