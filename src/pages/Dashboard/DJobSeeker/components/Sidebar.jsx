import React from "react";
import { Link } from "react-router-dom";
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
        <MenuItem
          icon={DashboardIcon}
          altText="Dashboard"
          link="/DJobSeeker"
          text="Dashboard"
        />
        <MenuItem
          icon={EditAccount}
          altText="Edit Account"
          link="/DJobSeeker/UpdateAccountForm"
          text="Edit Account"
        />
        <MenuItem
          icon={EditProfile}
          altText="Edit Profile"
          link="/"
          text="Edit Profile"
        />
        <MenuItem icon={SkillIcon} altText="Skills" link="/" text="Skills" />
        <MenuItem
          icon={VerifyIcon}
          altText="Verify Your Profile"
          link="/"
          text="Verify your Profile"
        />
        <MenuItem
          icon={SearchIcon}
          altText="Search Jobs"
          link="/"
          text="Search Jobs"
        />
        <MenuItem icon={LogoutIcon} altText="Log Out" link="/" text="Log Out" />
      </ul>
      <Link
        to="/"
        className="btn-default-red fn small-btn text-center mtop-20 view-profile"
      >
        Create Profile
      </Link>
    </div>
  </div>
);

const MenuItem = ({ icon, altText, link, text }) => (
  <li>
    <span>
      <img src={icon} alt={altText} />
    </span>
    <Link to={link} className="u-case f-20 fn blue">
      {text}
    </Link>
  </li>
);

export default Sidebar;
