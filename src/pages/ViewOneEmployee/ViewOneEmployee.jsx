import React, { useContext } from "react";

import BookSection from "../Dashboard/DJobSeeker/components/booksection";
import ProfileOne from "./components/ProfileOne";
import SidebarOne from "./components/SidebarOne";
import SkillOne from "./components/SkillOne";
import TopSkillOne from "./components/TopSkillOne";
import { useLocation } from "react-router-dom";
import pinicon from "../../imgs/icons/pin-icon-small.png";
import bgcheck from "../../imgs/icons/background-check-icon-small.png";
import markhired from "../../imgs/icons/mark-hired-icon-small.png";
import { UserContext } from "../../context/UserContext";

const ViewOneEmployee = () => {
  const location = useLocation();
  const user = location.state?.user;
  const { currentUser } = useContext(UserContext);

  // Extracting fullname, job title, and summary from the user object
  const fullname = user?.fullname ?? "No Name Available";
  const jobTitle = user?.employeeProfile?.job_title ?? "No Job Title Available";
  const summary = user?.employeeProfile?.summary ?? "No Summary Available";

  const isEmployer = currentUser && currentUser.role === "employer";
  const idScore = user?.verificationStatus?.idScore ?? 0;

  return (
    <div>
      <section className="banner-section-sa banner-profile">
        <div className="container k-container">
          <div className="row">
            <div className="col-3 text-center"></div>
            <div className="col position-relative">
              {/* Displaying the fullname */}
              <h1 className="f-55 white blurry-text blur-text">{fullname}</h1>
              {/* Displaying the job title */}
              <p className="f-16 white fn">{jobTitle}</p>
              <ul className="profile-meta">
                <li className="pm-id">
                  <span>{idScore}</span>
                  <span>ID PROOF</span>
                </li>
                {isEmployer && (
                  <>
                    <li className="pm-pin">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#bookmarkModal"
                      >
                        <span>
                          <img src={pinicon} alt="Pin" /> PIN
                        </span>
                      </a>
                    </li>
                    <li className="pm-bc">
                      <a href="#">
                        <span>
                          <img src={bgcheck} alt="Background Data Check" />{" "}
                          BACKGROUND DATA CHECK
                        </span>
                      </a>
                    </li>
                    <li className="pm-mh">
                      <a href="#" className="disabled">
                        <span>
                          <img src={markhired} alt="Mark as Hired" /> MARK AS
                          HIRED
                        </span>
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-content-section">
        <div className="container k-container">
          <div className="row">
            <SidebarOne user={user} />
            <div className="col mtop-90">
              <div className="row">
                <div className="col">
                  <ProfileOne user={user} />
                </div>
                <TopSkillOne user={user} />
              </div>
              <div className="row mtop-90">
                <div className="col">
                  <div className="pr-info">
                    <h3>Skill Summary</h3>
                    {/* Displaying the summary */}
                    <div className="skill-summary">{summary}</div>
                  </div>
                </div>
              </div>
              <SkillOne user={user} />
            </div>
          </div>
        </div>
      </section>
      <BookSection />
    </div>
  );
};

export default ViewOneEmployee;
