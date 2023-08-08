import Jobseeker from "../../../imgs/jobseekers-icon.png";
import RedCheck from "../../../imgs/red-checkmark.png";
import Employer from "../../../imgs/employers-icon.png";
import BlueCheck from "../../../imgs/blue-checkmark.png";
const StartCareer = () => {
  return (
    <section className="content-section sign-up-section">
      <div className="container k-container">
        <div className="row text-center">
          <div className="col">
            <span className="section-title-sub red-bg u-case">
              Start Your Career
            </span>
            <h1 className="f-75 blue">Sign Up Now!</h1>
          </div>
        </div>
        <div className="row sign-up-box-container">
          <div className="col px-0">
            <div className="sign-up-box">
              <h2 className="su-box-title red-bg text-center">Jobseekers</h2>
              <div className="sign-up-box-content light-red-bg text-center">
                <img src={Jobseeker} alt="Jobseekers" />
                <ul className="su-list">
                  <li>
                    <img src={RedCheck} alt="Jobseekers" />
                    <span>Find Jobs</span>
                  </li>
                  <li>
                    <img src={RedCheck} alt="Jobseekers" />
                    <span>Dedicated to Filipinos</span>
                  </li>
                  <li>
                    <img src={RedCheck} alt="Jobseekers" />
                    <span>Contact Employers</span>
                  </li>
                  <li>
                    <img src={RedCheck} alt="Jobseekers" />
                    <span>Apply for Home Based Jobs</span>
                  </li>
                </ul>
                <a href="jobseek" className="btn-default-red text-center">
                  I Want A Job
                </a>
              </div>
            </div>
          </div>
          <div className="col px-0">
            <div className="sign-up-box">
              <h2 className="su-box-title blue-bg text-center">Employers</h2>
              <div className="sign-up-box-content light-blue-bg text-center">
                <img src={Employer} alt="Jobseekers" />
                <ul className="su-list">
                  <li>
                    <img src={BlueCheck} alt="Jobseekers" />
                    <span>Post Jobs</span>
                  </li>
                  <li>
                    <img src={BlueCheck} alt="Jobseekers" />
                    <span>Bookmark Candidates</span>
                  </li>
                  <li>
                    <img src={BlueCheck} alt="Jobseekers" />
                    <span>Contact Workers</span>
                  </li>
                  <li>
                    <img src={BlueCheck} alt="Jobseekers" />
                    <span>Hire Virtual Staff</span>
                  </li>
                </ul>
                <a href="postajob" className="btn-default-blue text-center">
                  I Want to Hire
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className="have-account">
              Already have a Linkage.ph Account?
              <a href="/" className="blue u-case">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartCareer;
