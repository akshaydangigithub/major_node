import React, { useContext, useState } from "react";
import Modal from "../Modal";
import EducationForm from "./EducationForm";
import { StudentProvider } from "../../context/StudentContext";
import {
  createEducation,
  deleteEducation,
  updateEducation,
} from "../../api/education";

const EducationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const { studentData, fetchStudentData } = useContext(StudentProvider);

  const educationList = studentData?.education || [];

  const handleOpenAdd = () => {
    setEditingIndex(null);
    setIsModalOpen(true);
  };
  const handleOpenEdit = (index) => {
    setEditingIndex(index);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  const handleCreateEducation = async (educationData) => {
    await createEducation(educationData);
    await fetchStudentData();
    handleCloseModal();
  };

  const handleUpdateEducation = async (educationData) => {
    await updateEducation(educationList[editingIndex]._id, educationData);
    await fetchStudentData();
    handleCloseModal();
  };

  const handleDeleteEducation = async (educationId) => {
    await deleteEducation(educationId);
    await fetchStudentData();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 border-b border-gray-200 pb-8 mt-8">
      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide pt-2">
        Education
      </div>

      <div className="space-y-4">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-5 group relative hover:shadow-sm transition-shadow"
          >
            <div className="absolute top-4 right-4 flex space-x-3 text-gray-400">
              <button
                onClick={() => handleOpenEdit(index)}
                className="hover:text-blue-500"
              >
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
              <button
                onClick={() => handleDeleteEducation(edu._id)}
                className="hover:text-red-500"
              >
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>

            <h3 className="text-[16px] font-semibold text-gray-800 pr-16">
              {edu.degree}
            </h3>
            <p className="text-gray-600 mt-1">{edu.instituteName}</p>
            <p className="text-gray-500 text-sm mt-2">
              {edu.startYear} - {edu.endYear}
            </p>
            <p className="text-gray-500 text-sm mt-0.5">
              Percentage: {edu.percentage}%
            </p>
          </div>
        ))}

        <button
          onClick={handleOpenAdd}
          className="text-[#008bdc] hover:text-blue-600 font-medium flex items-center mt-4"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add education
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Graduation details/ Post graduation details"
      >
        <EducationForm
          onSave={handleCreateEducation}
          onUpdate={handleUpdateEducation}
          initialData={
            editingIndex !== null ? educationList[editingIndex] : null
          }
        />
      </Modal>
    </div>
  );
};

export default EducationSection;
