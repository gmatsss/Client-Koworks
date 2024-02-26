// EmployeeDashboard.js
import React from "react";
import EmployeeIconMenu from "./EmployeeIconMenu";
import { Outlet } from "react-router-dom"; // Import Outlet

const EmployeeDashboard = ({ currentUser }) => {
  return (
    <>
      <EmployeeIconMenu />
      <Outlet />
    </>
  );
};

export default EmployeeDashboard;
