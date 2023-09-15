import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ProfileBanner from "./components/ProfileBanner";
import Sidebar from "./components/Sidebar";
import { UserContext } from "../../../context/UserContext";
import EmployeeDashboard from "./components/EmployeeDashboard";
import UpdateAccountForm from "./UpdateAccountForm/UpdateAccountForm";
import UpdateEmployeeProfile from "./UpdateEmployeeProfile/UpdateEmployeeProfile";

import BookSection from "./components/booksection";

const DJobSeeker = () => {
  const { currentUser } = useContext(UserContext);
  const jobTitle =
    currentUser?.employeeProfile?.job_title || "No job title yet";
  const location = useLocation();

  return (
    <div className="container-fluid">
      <div className="row">
        <ProfileBanner name={currentUser.fullname} jobTitle={jobTitle} />
      </div>
      <div className="row">
        <section className="content-section white-bg">
          <div className="container k-container">
            <div className="row">
              <div className="div col-3 px-0 mright-50">
                <Sidebar />
              </div>
              <div className="div col px-0">
                <Routes>
                  <Route path="/" element={<EmployeeDashboard />} />
                  <Route
                    path="UpdateAccountForm"
                    element={<UpdateAccountForm />}
                  />
                  <Route
                    path="UpdateEmployeeProfile"
                    element={<UpdateEmployeeProfile />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Conditionally render the booksection */}
      {location.pathname.includes("UpdateEmployeeProfile") && <BookSection />}
    </div>
  );
};

export default DJobSeeker;
