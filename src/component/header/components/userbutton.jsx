import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const LoginButton = () => (
  <ul className="nav-login">
    <li>
      <Link className="nav-link" to="/Login">
        <img
          src="https://linkagekoworks.viewourdesign.info/imgs/login-icon.png"
          alt="Log In"
        />
        <span>Log In</span>
      </Link>
    </li>
    <li>
      <Link className="nav-link" to="/Signup">
        <img
          src="https://linkagekoworks.viewourdesign.info/imgs/sign-up-icon.png"
          alt="Sign Up"
        />
        <span>Sign Up</span>
      </Link>
    </li>
  </ul>
);

const LogoutButton = ({ handleLogout }) => (
  <Link className="nav-link" onClick={handleLogout}>
    <img
      src="https://linkagekoworks.viewourdesign.info/imgs/login-icon.png"
      alt="Log Out"
    />
    <span>Log Out</span>
  </Link>
);

const MyAccountMenu = ({ currentUser, handleLogout }) => {
  // Default Menu for Employers
  const employerMenu = (
    <>
      <li>
        <a className="dropdown-item disabled" href="#">
          {currentUser.companyName || currentUser.fullname} <span>Free</span>
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <Link className="dropdown-item" to="/DEmployer/jobposts">
          <i className="fas fa-briefcase" aria-hidden="true"></i> Job Posts
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/employer/bookmark-workers">
          <i className="fas fa-bookmark" aria-hidden="true"></i> Bookmarked
          Workers
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/employer/time-tracking">
          <i className="fas fa-clock" aria-hidden="true"></i> Time Tracking
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/employer/billing">
          <i className="fas fa-wallet" aria-hidden="true"></i> Billing
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/employer/upgrade">
          <i className="fas fa-arrow-up" aria-hidden="true"></i> Upgrade
        </Link>
      </li>
    </>
  );

  // Menu for Employees / Job Seekers
  const employeeMenu = (
    <>
      <li>
        <a className="dropdown-item disabled" href="#">
          {currentUser.fullname} <span></span>
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <Link className="dropdown-item" to="ViewProfile">
          <i className="fa fa-user-circle" aria-hidden="true"></i> My Profile
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/employee/job-applications">
          <i className="fa fa-file" aria-hidden="true"></i> Job Applications
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/employee/pinned-jobs">
          <i className="fas fa-map-pin" aria-hidden="true"></i> Pinned Jobs
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/DJobSeeker/UpdateAccountForm">
          <i className="fa fa-cogs" aria-hidden="true"></i> Edit Account
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <li className="myaccount-label">
        <Link
          className="myaccount"
          to={currentUser.role === "employer" ? "/DEmployer" : "/DJobSeeker"}
        >
          <img
            src="https://linkagekoworks.viewourdesign.info/imgs/sign-up-icon.png"
            alt="My Account"
          />
          <span>My Account</span>
        </Link>
      </li>
      <li className="myaccount-menu">
        <div className="dropdown">
          <a
            className="dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {currentUser.role === "employer" ? employerMenu : employeeMenu}
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="logout">
              <Link className="nav-link" onClick={handleLogout}>
                <span>Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </div>
  );
};

const UserButton = React.memo(() => {
  const { currentUser, logout, loading } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      toast.success(result.message);
      navigate("/");
    } else if (!currentUser) {
      console.log("User is already logged out.");
      navigate("/");
    } else {
      console.error("Unexpected response during logout:", result.message);
    }
  };

  return (
    <div className="col col-md-3 px-0 text-right h-smenu ">
      <ul className="nav-login">
        <li>
          {loading || !currentUser ? (
            <LoginButton />
          ) : (
            <LogoutButton handleLogout={handleLogout} />
          )}
        </li>
        <li>
          {!loading && currentUser && (
            <MyAccountMenu
              currentUser={currentUser}
              handleLogout={handleLogout}
            />
          )}
        </li>
      </ul>
      <FontAwesomeIcon
        className="mobile-nav-btn"
        icon={faBars}
        onClick={() => {}}
      />
    </div>
  );
});

export default UserButton;
