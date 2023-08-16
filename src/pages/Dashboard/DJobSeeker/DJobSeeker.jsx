import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import ProfileBanner from "./components/ProfileBanner";
import Sidebar from "./components/Sidebar";
import { UserContext } from "../../../context/UserContext";
import EmployeeDashboard from "./components/EmployeeDashboard";
import UpdateAccountForm from "./UpdateAccountForm/UpdateAccountForm";

const DJobSeeker = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="container-fluid">
      <div className="row">
        <ProfileBanner
          name={currentUser.fullname}
          jobTitle={currentUser.role}
        />
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
                </Routes>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DJobSeeker;
