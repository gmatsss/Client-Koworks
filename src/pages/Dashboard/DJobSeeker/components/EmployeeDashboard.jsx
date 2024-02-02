// EmployeeDashboard.js
import React from "react";
import EmployeeIconMenu from "./EmployeeIconMenu";
import VerificationSection from "./VerificationSection ";
import StrengthenProfileSection from "./StrengthenProfileSection ";

const EmployeeDashboard = ({ currentUser }) => {
  return (
    <>
      <EmployeeIconMenu />
      <VerificationSection currentUser={currentUser} />

      <StrengthenProfileSection />
    </>
  );
};

export default EmployeeDashboard;
