import React from "react";

const EducationForm = ({ onSave, initialData }) => {
  // In a real app, you would tie these to state (useState) and handle changes
  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        onSave();
      }}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          College / Institute Name
        </label>
        <input
          type="text"
          defaultValue={initialData?.instituteName || ""}
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
            defaultValue={initialData?.startYear || ""}
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
            defaultValue={initialData?.endYear || ""}
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
          defaultValue={initialData?.degree || ""}
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
          defaultValue={initialData?.percentage || ""}
          placeholder="Out of 100"
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="bg-[#008bdc] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EducationForm;
