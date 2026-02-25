import React, { useContext } from "react";
import { applyForInternship } from "../api/internship";
import { StudentProvider } from "../context/StudentContext";

const InternshipCard = ({ internship }) => {
  // Destructuring for cleaner code
  const {
    profile,
    type,
    internshipType,
    openings,
    duration,
    salary,
    description,
    skills,
  } = internship;

  const { studentData, fetchStudentData } = useContext(StudentProvider);

  const skillList = Array.isArray(skills) ? skills : skills.split(", ");

  const applyInternship = async () => {
    await applyForInternship(internship._id);

    await fetchStudentData();
  };

  const isInternshipApplied = studentData.internships.some(
    (appliedInternship) => appliedInternship._id === internship._id,
  );

  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 m-4 hover:shadow-md transition-all duration-300 group">
      {/* Header section */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {profile}
          </h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
            {internshipType}
          </span>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-green-600">${salary}</p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Stipend
          </p>
        </div>
      </div>

      {/* Grid for Metadata */}
      <div className="grid grid-cols-2 gap-4 mb-5 text-sm">
        <div className="flex items-center text-gray-600">
          <span className="font-semibold mr-2">Duration:</span> {duration}
        </div>
        <div className="flex items-center text-gray-600">
          <span className="font-semibold mr-2">Openings:</span> {openings}
        </div>
        <div className="flex items-center text-gray-600">
          <span className="font-semibold mr-2">Work Mode:</span> {type}
        </div>
      </div>

      {/* Description */}
      <div className="mb-5">
        <h3 className="text-sm font-bold text-gray-900 mb-1">About the Role</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>

      {/* Skills Badges */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {skillList.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <button
        onClick={isInternshipApplied ? null : applyInternship}
        className={`w-full py-2.5 px-4  text-white font-semibold rounded-lg transition-colors duration-200 shadow-sm ${isInternshipApplied ? "bg-green-600 hover:bg-green-700 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
      >
        {isInternshipApplied ? "Applied" : "Apply Now"}
      </button>
    </div>
  );
};

export default InternshipCard;
