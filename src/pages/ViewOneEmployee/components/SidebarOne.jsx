import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faBriefcase,
  faCalendar,
  faShareAlt,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";

const SidebarOne = ({ user = {} }) => {
  const { employeeProfile } = user || {};
  const salary = `$ ${employeeProfile?.salary}/month` || "Not Available";
  const hourlyRate = `$ ${employeeProfile?.hourly_rate}` || "Not Available";
  const employmentType = employeeProfile?.employment_status || "Not Available";
  const availableHours =
    employeeProfile?.working_hours_from && employeeProfile?.working_hours_to
      ? `${employeeProfile.working_hours_from} - ${employeeProfile.working_hours_to} (EST)`
      : "Not Available";
  const socialMediaConnected = user?.socialMedia
    ? "Connected"
    : "Not Connected";
  const publicIdVerified = user?.publicId ? "VERIFIED" : "UNVERIFIED";

  return (
    <div className="col-3">
      <img
        src={
          "https://linkagekoworks.viewourdesign.info/storage/images/placeholder-user.png"
        }
        alt="Profile Photo"
        className="pr-img"
      />
      <div className="pr-sidebar">
        <div className="pr-salary">
          <h4>
            <FontAwesomeIcon
              icon={faDollarSign}
              style={{ color: "red" }}
              className="fa-lg"
            />
            <span className="blue">Expected Salary</span>
          </h4>
          <p>{salary}</p>
        </div>
        <div className="pr-hrate">
          <h4>
            <FontAwesomeIcon
              icon={faDollarSign}
              style={{ color: "red" }}
              className="fa-lg"
            />
            <span className="blue">Hourly Rate</span>
          </h4>
          <p>{hourlyRate}</p>
        </div>
        <div className="pr-etype">
          <h4>
            <FontAwesomeIcon
              icon={faBriefcase}
              style={{ color: "red" }}
              className="fa-lg"
            />
            <span className="blue">Employment Type</span>
          </h4>
          <p>{employmentType}</p>
        </div>
        <div className="pr-awh">
          <h4>
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ color: "red" }}
              className="fa-lg"
            />
            <span className="blue">Available Working Hours</span>
          </h4>
          <p>{availableHours}</p>
        </div>
        <div className="pr-fb">
          <h4>
            <FontAwesomeIcon
              icon={faShareAlt}
              style={{ color: "red" }}
              className="fa-lg"
            />
            <span className="blue">Social Media</span>
          </h4>
          <p>{socialMediaConnected}</p>
        </div>
        <div className="pr-id">
          <h4>
            <FontAwesomeIcon
              icon={faIdBadge}
              style={{ color: "red" }}
              className="fa-lg"
            />
            <span className="blue">Public ID</span>
          </h4>
          <p>{publicIdVerified}</p>
        </div>
        <div className="pr-btns text-center mtop-45">
          {/* Place for any buttons if needed */}
        </div>
      </div>
    </div>
  );
};

export default SidebarOne;
