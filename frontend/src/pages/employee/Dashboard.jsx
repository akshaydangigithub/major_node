import React, { useContext } from "react";
import { EmployeeProvider } from "../../context/EmployeeContext";

const EmpDashboard = () => {
  const { employeeData } = useContext(EmployeeProvider);

  console.log(employeeData);

  return <div>EmpDashboard</div>;
};

export default EmpDashboard;
