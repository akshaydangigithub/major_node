import React, { useContext } from "react";
import { StudentProvider } from "../../context/StudentContext";

const Dashboard = () => {
  const { studentData } = useContext(StudentProvider);

  const internships = studentData?.internships || [];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Track and manage your applied internships.
        </p>
      </div>

      {/* Table Card Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Empty State Handling */}
        {internships.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            You haven't applied to any internships yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                  <th className="py-4 px-6 font-semibold">S.No.</th>
                  <th className="py-4 px-6 font-semibold">Profile</th>
                  <th className="py-4 px-6 font-semibold">Salary</th>
                  <th className="py-4 px-6 font-semibold">Skills</th>
                  <th className="py-4 px-6 font-semibold">Duration</th>
                  <th className="py-4 px-6 font-semibold">Type</th>
                  <th className="py-4 px-6 font-semibold text-center">
                    Openings
                  </th>
                  {/* add description */}
                  <th className="py-4 px-6 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                {internships.map((internship, index) => (
                  <tr
                    key={internship._id}
                    className="hover:bg-blue-50/50 transition-colors duration-150"
                  >
                    <td className="py-4 px-6 text-gray-500">{index + 1}</td>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {internship.profile}
                    </td>
                    <td className="py-4 px-6 text-green-600 font-medium">
                      {internship.salary}
                    </td>
                    <td className="py-4 px-6">
                      {/* Truncating skills if the string is too long */}
                      <span
                        className="block truncate max-w-50"
                        title={internship.skills}
                      >
                        {internship.skills}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {internship.duration}
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        {internship.internshipType}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center font-medium">
                      {internship.openings}
                    </td>
                    <td className="py-4 px-6 text-gray-500">
                      {/* Truncating description if it's too long */}
                      <span
                        className="block truncate max-w-80"
                        title={internship.description}
                      >
                        {internship.description}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
