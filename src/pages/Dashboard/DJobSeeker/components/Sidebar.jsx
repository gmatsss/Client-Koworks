import DashboardIcon from "../../../../imgs/icon-dashboard.png";
import EditAccount from "../../../../imgs/icon-edit-account-b.png";
import EditProfile from "../../../../imgs/icon-edit-account.png";
import SkillIcon from "../../../../imgs/icon-skills.png";
import VerifyIcon from "../../../../imgs/icon-verify-your-profile.png";
import SearchIcon from "../../../../imgs/icon-search-workers.png";
import LogoutIcon from "../../../../imgs/icon-logout.png";

const Sidebar = () => (
  <div className="jobseekers-sidebar dash-sidebar">
    <div className="jobseekers-img dash-img">
      <img
        src="https://linkagekoworks.viewourdesign.info/storage/images/placeholder-user.png"
        alt="Profile Photo"
      />
      <span className="profile-text">Photo required</span>
    </div>
    <div className="jobseekers-menu dash-menu">
      <ul>
        <li>
          <span>
            <img src={DashboardIcon} alt="Dashboard" />
          </span>
          <a href="/" className="u-case f-20 fn blue">
            Dashboard
          </a>
        </li>
        <li>
          <span>
            <img src={EditAccount} alt="Edit Account" />
          </span>
          <a href="/" className="u-case f-20 fn blue">
            Edit Account
          </a>
        </li>
        <li>
          <span>
            <img src={EditProfile} alt="Edit Profile" />
          </span>
          <a href="/" className="u-case f-20 fn blue">
            Edit Profile
          </a>
        </li>
        <li>
          <span>
            <img src={SkillIcon} alt="Skills" />
          </span>
          <a href="/" className="u-case f-20 fn blue">
            Skills
          </a>
        </li>
        <li>
          <span>
            <img src={VerifyIcon} alt="Verify Your Profile" />
          </span>
          <a href="/" className="u-case f-20 fn blue">
            Verify your Profile
          </a>
        </li>
        <li>
          <span>
            <img src={SearchIcon} alt="Search Jobs" />
          </span>
          <a href="/" className="u-case f-20 fn blue">
            Search Jobs
          </a>
        </li>
        <li>
          <span>
            <img src={LogoutIcon} alt="Log Out" />
          </span>
          <a href="/" className="u-case f-20 fn blue">
            Log Out
          </a>
        </li>
      </ul>
      <a
        href="/"
        target="_blank"
        className="btn-default-red fn small-btn text-center mtop-20 view-profile"
      >
        Create Profile
      </a>
    </div>
  </div>
);

export default Sidebar;
