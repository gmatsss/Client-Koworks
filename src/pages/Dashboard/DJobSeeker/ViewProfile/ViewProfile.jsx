import { useContext } from "react";
import BookSection from "../components/booksection";
import BasicInformation from "./components/BasicInformation";
import ProfileSidebar from "./components/ProfileSidebar";
import TopSkills from "./components/TopSkills";
import WorkerSkills from "./components/WorkerSkills";
import { UserContext } from "../../../../context/UserContext";

const ViewProfile = () => {
  const { currentUser } = useContext(UserContext);

  const topRatedSkills = currentUser.skill
    ? Object.values(currentUser.skill)
        .flat()
        .filter((skill) => skill.rating >= 4 && skill.rating <= 5)
        .sort(() => 0.5 - Math.random())
        .slice(0, 10)
    : [];

  console.log(currentUser);
  return (
    <div>
      <section className="banner-section-sa banner-profile">
        <div className="container k-container">
          <div className="row">
            <div className="col-3 text-center"></div>
            <div className="col">
              <h1 className="f-55 white">{currentUser.fullname}</h1>
              <p className="f-16 white fn">
                {currentUser.employeeProfile.job_title}
              </p>
              <ul className="profile-meta">
                <li className="pm-id">
                  {/* Assuming you'll implement ID PROOF later */}
                  <span>20</span>
                  <span>ID PROOF</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="profile-content-section">
        <div className="container k-container">
          <div className="row">
            <ProfileSidebar currentUser={currentUser} />
            <div className="col mtop-90">
              <div className="row">
                <BasicInformation currentUser={currentUser} />
                <TopSkills skills={topRatedSkills} />
              </div>
              <div className="row mtop-90">
                <div className="col">
                  <div className="pr-info">
                    <h3>Skill Summary</h3>
                    <div className="skill-summary">
                      <p>{currentUser.employeeProfile.summary}</p>
                    </div>
                  </div>
                </div>
              </div>
              <WorkerSkills skills={currentUser.skill || {}} />
            </div>
          </div>
        </div>
      </section>
      <BookSection />
    </div>
  );
};

export default ViewProfile;
