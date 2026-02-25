import React, { createContext, useEffect, useState } from "react";
export const StudentProvider = createContext();
import axios from "../utils/axios";
// import toast from "react-hot-toast";

const StudentContext = ({ children }) => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchStudentData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/student/me");

      if (res.data.success) {
        setStudentData(res.data.data);
      } else {
        setStudentData(null);
      }
    } catch (error) {
      setStudentData(null);
      const message = error.response?.data?.message || "An error occurred";
      console.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  return (
    <StudentProvider.Provider
      value={{ studentData, loading, fetchStudentData }}
    >
      {children}
    </StudentProvider.Provider>
  );
};

export default StudentContext;
