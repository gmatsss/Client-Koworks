import Apply from "../../../imgs/apply-icon.png";
import Friend from "../../../imgs/become-friend-icon.png";
import WFH from "../../../imgs/work-from-home.png";
import HomeBased from "../../../imgs/home-based.png";

const PartFullTime = () => {
  return (
    <section className="content-section white-bg find-a-job-section ptop-0 type-2">
      <div className="container k-container">
        <div className="row">
          <div className="col col-md-12 px-0">
            <h2 className="section-title">
              <span className="f-45">Want to</span>
              <span className="red u-case f-60">
                Find A Part-time / Full-time
              </span>
              <span className="f-45">Online Job in the Philippines</span>
            </h2>
          </div>
        </div>
        <div className="row find-a-job-icons">
          <div className="col col-md-3">
            <img src={Apply} alt="APPLY FOR ONLINE JOBS" />
            <h3 className="u-case">
              Apply For <br />
              Online Jobs
            </h3>
          </div>
          <div className="col col-md-3">
            <img src={Friend} alt="BECOME OUR FACEBOOK FRIEND" />
            <h3 className="u-case">
              Become Our <br />
              Facebook Friend
            </h3>
          </div>
          <div className="col col-md-3">
            <img src={WFH} alt="HOW TO WORK FROM HOME" />
            <h3 className="u-case">
              How To Work <br />
              From Home
            </h3>
          </div>
          <div className="col col-md-3">
            <img src={HomeBased} alt="HOME-BASED JOBS" />
            <h3 className="u-case">
              Home-Based <br />
              Jobs
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartFullTime;
