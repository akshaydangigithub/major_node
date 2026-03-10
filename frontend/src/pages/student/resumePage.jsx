import React, { useContext } from "react";
import EducationSection from "../../components/education/EducationSection";
import StudentDetails from "../../components/education/StudentDetails";
import { StudentProvider } from "../../context/StudentContext";
import { AuthProvider } from "../../context/AuthContext";

const ResumePage = () => {
  const { studentData } = useContext(StudentProvider);
  const { user } = useContext(AuthProvider);
  // console.log(studentData, user);

  return (
    <div className="bg-gray-50">
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-800">My Resume</h1>
      </header>

      <main className="max-w-4xl mx-auto pb-20 border border-[#ffe082] overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="bg-[#fff9e6] border-b border-[#ffe082] text-[#8a6d3b] p-3 flex items-center justify-center text-sm">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          This is the resume employers will see when you apply. Please make sure
          it is up to date.
        </div>

        <div className="px-10 py-6">
          {/* New Details component placed at the top */}
          <StudentDetails />

          {/* Education list and modal logic */}
          <EducationSection />
        </div>
      </main>
    </div>
  );
};

export default ResumePage;
