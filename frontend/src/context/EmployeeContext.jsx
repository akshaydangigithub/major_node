import React, { createContext, useEffect, useState } from "react";
export const EmployeeProvider = createContext();
import axios from "../utils/axios";

const EmployeeContext = ({ children }) => {
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEmployeeData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/employee/me");

      console.log("res", res);

      if (res.data.success) {
        setEmployeeData(res.data.data);
      } else {
        setEmployeeData(null);
      }
    } catch (error) {
      setEmployeeData(null);
      const message = error.response?.data?.message || "An error occurred";
      console.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <EmployeeProvider.Provider
      value={{ employeeData, loading, fetchEmployeeData }}
    >
      {children}
    </EmployeeProvider.Provider>
  );
};

export default EmployeeContext;
