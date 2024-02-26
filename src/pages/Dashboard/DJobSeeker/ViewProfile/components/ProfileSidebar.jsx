import expected from "../../../../../imgs/icons/expected-salary-icon-red.png";

import employment from "../../../../../imgs/icons/employment-type-icon-red.png";
import fb from "../../../../../imgs/icons/fb-veri-icon-red.png";
import id from "../../../../../imgs/icons/id-veri-icon-red.png";

const ProfileSidebar = ({ currentUser, profileImage }) => {
  const { employeeProfile } = currentUser;

  console.log(currentUser);

  return (
    <div className="col-3">
      <img src={profileImage} alt="Profile Photo" className="pr-img" />
      <div className="pr-sidebar">
        <div className="pr-salary">
          <h4>
            <img src={expected} alt="Expected Salary" />
            <span className="blue">Expected Salary</span>
          </h4>
          <p>${employeeProfile.salary}/month</p>
        </div>
        <div className="pr-hrate">
          <h4>
            <img src={expected} alt="Expected Salary" />
            <span className="blue">Hourly Rate</span>
          </h4>
          <p>${employeeProfile.hourly_rate}</p>
        </div>
        <div className="pr-etype">
          <h4>
            <img src={employment} alt="Employment Type" />
            <span className="blue">Employment Type</span>
          </h4>
          <p>{employeeProfile.employment_status}</p>
        </div>
        <div className="pr-awh">
          <h4>
            <img src={expected} alt="Available Working Hours" />
            <span className="blue">Available Working Hours</span>
          </h4>
          <p>
            {employeeProfile.working_hours_from}-
            {employeeProfile.working_hours_to} (EST)
          </p>
        </div>
        {/* Assuming you have a property for Facebook connection status and Public ID verification status, you can add them similarly. For now, I'll leave them as static. */}
        <div className="pr-fb">
          <h4>
            <img src={fb} alt="Facebook Status" />
            <span className="blue">Facebook Not Connected</span>
          </h4>
        </div>
        <div className="pr-id">
          <h4>
            <img src={id} alt="ID Verification" />
            <span className="blue">Public ID UNVERIFIED</span>
          </h4>
        </div>
        <div className="pr-btns text-center mtop-45"></div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
