import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ProfileBanner from "./components/ProfileBanner";
import Sidebar from "./components/Sidebar";
import { UserContext } from "../../../context/UserContext";
import EmployeeDashboard from "./components/EmployeeDashboard";
import UpdateAccountForm from "./UpdateAccountForm/UpdateAccountForm";
import UpdateEmployeeProfile from "./UpdateEmployeeProfile/UpdateEmployeeProfile";
import book from "../../../imgs/book.png";

const DJobSeeker = () => {
  const { currentUser } = useContext(UserContext);
  const location = useLocation(); // Use the hook

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
      {location.pathname.includes("UpdateEmployeeProfile") && (
        <div className="row booksection">
          <section class="content-section book-section">
            <div class="container k-container">
              <div class="row align-items-center">
                <div class="col-5 book-content">
                  <span>THE ULTIMATE</span>
                  <h2 class="book-title">
                    <span>SALARY</span>
                    <span>GUIDE</span>
                  </h2>
                  <p>
                    FOR HIRING FILIPINO <br />
                    VIRTUAL ASSISTANTS
                  </p>
                  <a href="#" class="btn-default-blue">
                    DOWNLOAD PDF
                  </a>
                </div>
                <div class="col-7 book-img">
                  <img src={book} alt="Jobseekers Name" />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default DJobSeeker;
