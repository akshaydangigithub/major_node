import React from "react";

const Security = () => {
  return (
    <div className="p-6 md:p-8 animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Reset Password
      </h2>
      <form className="space-y-6 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            New Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
          <p className="text-xs text-gray-500 mt-2">
            Must be at least 8 characters long.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm New Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        <div className="pt-4">
          <button
            type="button"
            className="bg-gray-900 hover:bg-black text-white font-medium py-2.5 px-6 rounded-lg transition-colors"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Security;
