import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faClock,
  faBook,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const JobResult = ({ job }) => {
  const { employeeProfile, skill } = job;
  const ratedSkills = Object.values(skill)
    .flat()
    .filter((s) => s.rating > 0);
  const displayedSkills = ratedSkills
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  // Adjust the image source to use the base64 imageData if available
  const imageSrc = employeeProfile.imageData
    ? `data:image/jpeg;base64,${employeeProfile.imageData}`
    : "../../imgs/placeholder-user.png";

  return (
    <div className="result-container">
      <div className="result-header">
        <h2 className="job-title">{employeeProfile.job_title}</h2>
        <a href={employeeProfile.website}>View Profile</a>
        {/* ... other elements ... */}
      </div>
      <div className="result-content">
        <div className="row">
          <div className="col-3">
            <div className="result-img">
              <img src={imageSrc} alt={employeeProfile.job_title} />
            </div>
          </div>
          <div className="col-3">
            <div className="result-meta">
              <h3>
                <FontAwesomeIcon icon={faMoneyBill} /> Expected Salary
              </h3>
              <span className="up-val">${employeeProfile.salary}</span>
            </div>
            <div className="result-meta">
              <h3>
                <FontAwesomeIcon icon={faClock} /> Employment Type
              </h3>
              <span className="up-val">
                {employeeProfile.employment_status}
              </span>
            </div>
          </div>
          <div className="col-3">
            <div className="result-meta">
              <h3>
                <FontAwesomeIcon icon={faBook} /> Education
              </h3>
              <span className="up-val">{employeeProfile.education}</span>
            </div>
            <div className="result-meta">
              <h3>
                <FontAwesomeIcon icon={faBriefcase} /> Experience
              </h3>
              <span className="up-val">{employeeProfile.experience} years</span>
            </div>
          </div>
          <div className="col-3">
            {displayedSkills.map((skillItem) => (
              <div className="result-skill" key={skillItem._id}>
                <h3>{skillItem.name}</h3>
                {[...Array(skillItem.rating)].map((_, i) => (
                  <span key={i} className="fa fa-star"></span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col result-summary">
            <p>{employeeProfile.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobResult;
