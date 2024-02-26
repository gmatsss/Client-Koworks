import Userimgdefault from "../../../../imgs/default-user-image.png";
import Dollarsign from "../../../../imgs/dollar-sign.png";
import Noteicon from "../../../../imgs/note-icon.png";
import Fbicon from "../../../../imgs/fb-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

const W_stats = ({ users }) => {
  const navigate = useNavigate();

  const navigateWithState = (jobseeker) => {
    navigate("/ViewOneEmployee", { state: { user: jobseeker } });
  };

  // Navigate with job state
  const navigateWithJobState = (job) => {
    navigate("/ViewOneJob", { state: { job } });
  };

  // Filter jobseekers with employeeProfile and skill
  let filteredJobseekers = users.filter(
    (user) => user.role === "employee" && user.employeeProfile && user.skill
  );

  // Shuffle the full list of jobseekers
  shuffleArray(filteredJobseekers);

  // Store the total count of jobseekers before slicing
  const totalJobseekersCount = filteredJobseekers.length;

  // Slice the shuffled list to display only the first 5 jobseekers
  const displayedJobseekers = filteredJobseekers.slice(0, 5);
  // Prepare jobs from all employers
  const employerJobs = users
    .filter((user) => user.role === "employer")
    .map((employer) => {
      shuffleArray(employer.postedJobs); // Shuffle jobs for each employer
      return employer.postedJobs.map((job) => ({ ...job, employer }));
    });

  // Function to collect one job from each employer until limit is reached
  const collectJobsEqually = (employerJobs, limit) => {
    const collectedJobs = [];
    let index = 0;

    while (collectedJobs.length < limit) {
      let jobsAdded = 0;

      employerJobs.forEach((jobs) => {
        if (index < jobs.length) {
          collectedJobs.push(jobs[index]);
          jobsAdded++;
        }
      });

      if (jobsAdded === 0) {
        // No more jobs to add
        break;
      }

      index++; // Move to the next job for each employer
    }

    return collectedJobs.slice(0, limit); // Ensure not to exceed the limit
  };

  // Collect jobs ensuring each employer gets a chance to display
  const allJobs = collectJobsEqually(employerJobs, 5);

  const employerCount = users.filter((user) => user.role === "employer").length;

  return (
    <div className="row mtop-75 stat-container">
      {/* Jobseekers */}
      <div className="col px-0">
        <div className="stat-search text-center">
          <h2 className="column-title">
            <span className="f-45 red">{totalJobseekersCount} Jobseekers</span>
          </h2>
          <p className="f-30">Signed up last month</p>
          <div className="d-flex justify-content-center">
            <div className="search-input-container">
              <FontAwesomeIcon icon={faSearch} className="inside-search-icon" />
              <input
                type="text"
                name="s"
                className="search-field inside-icon"
                placeholder="Search Filipino Resumes"
              />
            </div>
          </div>
        </div>
        <div className="search-results recent-resumes mtop-45">
          <div className="row mright-23">
            <div className="col px-0">
              <h3 className="red u-case mbot-35 ">
                Most Recent Resumes Created
              </h3>
            </div>
          </div>
          <div class="results-container">
            {displayedJobseekers.map((jobseeker) => (
              <div
                key={jobseeker._id}
                class="row align-items-center px-0 white-bg mright-23 mbot-30"
              >
                <div class="col col-md-3 px-0 text-center">
                  <img
                    src={Userimgdefault || "imgs/default-user-image.png"}
                    alt={jobseeker.fullname}
                  />
                </div>
                <div class="col col-md-9 px-0">
                  <h3 class="regular-header">
                    {jobseeker.employeeProfile?.job_title}
                  </h3>
                  <p>
                    {jobseeker.employeeProfile?.summary ||
                      "No summary available."}
                  </p>
                  <div class="user-meta">
                    <div class="umeta-left">
                      <span class="salary mright-40">
                        <img
                          src={Dollarsign || "imgs/dollar-sign.png"}
                          alt="Expected Salary"
                        />
                        <span>
                          {jobseeker.employeeProfile?.salary ||
                            "Salary not specified"}
                        </span>
                      </span>
                      <span class="comment">
                        <img
                          src={Noteicon || "imgs/note-icon.png"}
                          alt="Comments"
                        />
                      </span>
                      <span class="fb">
                        <img
                          src={Fbicon || "imgs/fb-icon.png"}
                          alt="Facebook Account"
                        />
                      </span>
                    </div>
                    <div class="umeta-right">
                      <span
                        onClick={() => navigateWithState(jobseeker)}
                        className="see-more blue m-5"
                        style={{ cursor: "pointer" }} // To visually indicate it's clickable
                      >
                        See more
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Employers */}
      <div className="col px-0">
        <div className="stat-search text-center">
          <h2 className="column-title">
            <span className="f-45 blue">{employerCount} Employers</span>{" "}
            {/* Adjusted to not hard-code the number */}
          </h2>
          <p className="f-30">Signed up last month</p>
          <div className="d-flex justify-content-center">
            <div className="search-input-container">
              <FontAwesomeIcon icon={faSearch} className="inside-search-icon" />
              <input
                type="text"
                name="s"
                className="search-field inside-icon"
                placeholder="Search For Jobs"
              />
            </div>
          </div>
        </div>
        <div className="search-results recent-jobs mtop-45">
          <div className="row mleft-23">
            <div className="col px-0">
              <h3 className="blue u-case mbot-35">Most Recent Jobs Posted</h3>
            </div>
          </div>
          <div className="results-container">
            {allJobs.map((job) => (
              <div
                key={job._id}
                className="row px-0 white-bg mleft-23 mbot-30 p-4"
              >
                <div className="col col-md-3 px-0 text-center">
                  <img
                    src={
                      job.employer.businessProfile?.imageData
                        ? `data:image/jpeg;base64,${job.employer.businessProfile?.imageData}`
                        : Userimgdefault
                    }
                    alt="Job"
                    style={{
                      marginTop: "15px",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col px-0">
                  <h3 className="regular-header">
                    {job.jobTitle}
                    <span className={`job-type ${job.employmentType}`}>
                      {job.employmentType.charAt(0).toUpperCase() +
                        job.employmentType.slice(1)}
                    </span>
                    <span className="business-name">
                      {" "}
                      - {job.employer.businessProfile?.businessName}
                    </span>
                  </h3>
                  <p>{job.jobDescription}</p>
                  <div className="user-meta">
                    <div className="umeta-left">
                      <span className="salary mright-40">
                        <img src={Dollarsign} alt="Expected Salary" />
                        <span>
                          {job.salaryType === "range"
                            ? `${job.salaryLow}-${job.salaryHigh}/month`
                            : `${job.salaryExact}/month`}
                        </span>
                      </span>
                    </div>
                    <div className="umeta-right">
                      <span
                        onClick={() => navigateWithJobState(job)}
                        className="see-more blue m-5"
                        style={{ cursor: "pointer" }}
                      >
                        See more
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default W_stats;
