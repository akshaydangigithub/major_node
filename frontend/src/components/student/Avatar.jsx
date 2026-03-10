import React, { useContext, useState } from "react";
import { AuthProvider } from "../../context/AuthContext";
import { updateUserProfileImage } from "../../api/user";

const Avatar = () => {
  const { user, fetUserData } = useContext(AuthProvider);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(user);

  const handleUpdateProfile = async () => {
    setLoading(true);
    await updateUserProfileImage(file);
    await fetUserData();
    setLoading(false);
  };

  return (
    <div className="p-6 md:p-8 animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Profile Picture
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Avatar Preview */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 rounded-full bg-gray-200 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
            {user?.profileImage ? (
              <img
                className="h-full w-full object-cover"
                src={user.profileImage}
                alt=""
              />
            ) : (
              <img
                className="h-full w-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5CQxdTYvVk0IxK9JjTg3YaEPXKfuPfCK3mg&s"
                alt=""
              />
            )}
          </div>
        </div>

        {/* Upload Controls */}
        <div className="flex-1 w-full">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600 justify-center">
              <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              PNG, JPG, GIF up to 5MB
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={handleUpdateProfile}
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
              ) : (
                "Update Avatar"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
