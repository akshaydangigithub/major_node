import React, { useContext, useState } from "react";
import { AuthProvider } from "../context/AuthContext";
import { updateUserProfile } from "../api/user";

const Profile = () => {
  const { user, fetUserData } = useContext(AuthProvider);
  const [languages, setLanguages] = useState(user?.languages || []);
  const [languageInput, setLanguageInput] = useState("");
  const [userData, setUserData] = useState({
    name: user?.name || "",
    gender: user?.gender || "",
    phone: user?.phone || "",
    linkdinProfile: user?.linkdinProfile || "",
  });

  const handleAddLanguage = (e) => {
    if (e.key === "Enter" && languageInput.trim() !== "") {
      e.preventDefault();
      if (!languages.includes(languageInput.trim())) {
        setLanguages([...languages, languageInput.trim()]);
      }
      setLanguageInput("");
    }
  };

  const removeLanguage = (langToRemove) => {
    setLanguages(languages.filter((lang) => lang !== langToRemove));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    let finalData = { ...userData, languages: languages };
    await updateUserProfile(finalData);
    await fetUserData();
  };

  return (
    <div className="p-6 md:p-8 animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Personal Details
      </h2>
      <form onSubmit={SubmitHandler} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              defaultValue={userData?.name}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <select
              defaultValue={userData?.gender}
              name="gender"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              defaultValue={userData?.phone}
              type="tel"
              name="phone"
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LinkedIn Profile
            </label>
            <input
              type="url"
              name="linkdinProfile"
              onChange={handleChange}
              defaultValue={userData?.linkdinProfile}
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Languages Array (Tag Input UI) */}
        <div className="pt-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Languages Spoken
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200"
              >
                {lang}
                <button
                  type="button"
                  onClick={() => removeLanguage(lang)}
                  className="ml-2 text-blue-400 hover:text-blue-600 focus:outline-none"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={languageInput}
            onChange={(e) => setLanguageInput(e.target.value)}
            onKeyDown={handleAddLanguage}
            placeholder="Type a language and press Enter..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        <div className="flex justify-end pt-6 border-t border-gray-100">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
