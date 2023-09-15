import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import BannerSection from "./components/BannerSection";
import Sidebar from "./components/Sidebar";
import IconMenu from "./components/IconMenu";
import Notice from "./components/Notice";
import RecentJobPosts from "./IconMenu/RecentJobPosts";
import HiredWorkers from "./IconMenu/HiredWorkers";
import BookmarkedWorkers from "./IconMenu/BookmarkedWorkers";
import EditAccount from "./editAccount/editAccount";

const DEmployer = () => (
  <div>
    <BannerSection />
    <section className="content-section employer-dashboard white-bg">
      <div className="container k-container">
        <div className="row">
          <div className="div col-3 px-0 mright-50">
            <Sidebar />
          </div>
          <div className="div col px-0">
            <Routes>
              {/* Default/Index Route */}
              <Route
                path="/"
                element={
                  <>
                    <IconMenu />
                    <Notice />
                    <Outlet />
                  </>
                }
              >
                <Route index element={<></>} />
                <Route path="jobposts" element={<RecentJobPosts />} />
                <Route path="HiredWorkers" element={<HiredWorkers />} />
                <Route
                  path="BookmarkedWorkers"
                  element={<BookmarkedWorkers />}
                />
              </Route>

              {/* Separate Route for EditAccount */}
              <Route
                path="editAccount"
                element={
                  <>
                    <EditAccount />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </section>
    <div
      className="modal fade"
      id="upgradeSubscription"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="upgradeSubscriptionLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content ptb-40">
          <div className="modal-body text-center">
            <h1 className="f-16 b blue" id="upgradeSubscriptionLabel">
              Upgrade Your Account to access this feature!
            </h1>
            <div className="kform-container"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DEmployer;
