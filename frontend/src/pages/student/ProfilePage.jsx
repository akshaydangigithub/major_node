import React, { useState } from "react";
import Profile from "../../components/student/Profile";
import Avatar from "../../components/student/Avatar";
import Security from "../../components/student/Security";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-gray-500 mt-1">
            Manage your profile, preferences, and security.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 shrink-0">
            <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0">
              <button
                onClick={() => setActiveTab("personal")}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === "personal"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Personal Details
              </button>

              <button
                onClick={() => setActiveTab("avatar")}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === "avatar"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Profile Picture
              </button>

              <button
                onClick={() => setActiveTab("security")}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === "security"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Security & Password
              </button>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* TAB 1: PERSONAL DETAILS */}
            {activeTab === "personal" && <Profile />}

            {/* TAB 2: PROFILE PICTURE */}
            {activeTab === "avatar" && <Avatar />}

            {/* TAB 3: SECURITY & PASSWORD */}
            {activeTab === "security" && <Security />}
          </main>
        </div>
      </div>

      {/* Basic animation styles injected directly for ease of use */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ProfilePage;
