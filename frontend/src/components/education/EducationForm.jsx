import React, { useState } from "react";

const EducationForm = ({ onSave, initialData, onUpdate }) => {
  const [educationData, setEducationData] = useState({
    instituteName: initialData?.instituteName || "",
    degree: initialData?.degree || "",
    startYear: initialData?.startYear || "",
    endYear: initialData?.endYear || "",
    percentage: initialData?.percentage || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          College / Institute Name
        </label>
        <input
          type="text"
          defaultValue={educationData.instituteName}
          name="instituteName"
          onChange={handleChange}
          placeholder="e.g. LNCT"
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start year
          </label>
          <input
            type="number"
            defaultValue={educationData.startYear}
            name="startYear"
            onChange={handleChange}
            placeholder="e.g. 2023"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500 bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End year
          </label>
          <input
            type="number"
            defaultValue={educationData.endYear}
            name="endYear"
            onChange={handleChange}
            placeholder="e.g. 2027"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500 bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Degree
        </label>
        <input
          type="text"
          defaultValue={educationData.degree}
          name="degree"
          onChange={handleChange}
          placeholder="e.g. B.Tech"
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Performance Score (Percentage)
        </label>
        <input
          type="number"
          defaultValue={educationData.percentage}
          name="percentage"
          onChange={handleChange}
          placeholder="Out of 100"
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex justify-end pt-4">
        {initialData ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              onUpdate(educationData);
            }}
            type="submit"
            className="bg-[#008bdc] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Update
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              onSave(educationData);
            }}
            type="button"
            className="bg-[#008bdc] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Create
          </button>
        )}
      </div>
    </form>
  );
};

export default EducationForm;
