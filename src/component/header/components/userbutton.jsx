import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { fetchData } from "../../../api/api";
import { toast } from "react-toastify";
import React from "react";

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
          alt=""
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

const MyAccountMenu = ({ currentUser, handleLogout }) => (
  <div>
    <li className="myaccount-label">
      <Link className="myaccount" to="/DJobSeeker">
        <img
          src="https://linkagekoworks.viewourdesign.info/imgs/sign-up-icon.png"
          alt=""
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
          <li>
            <a className="dropdown-item disabled" href="#">
              {currentUser.fullname}
              <span></span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="/">
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              My Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="fa fa-file" aria-hidden="true"></i>
              Job Applications
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              <i className="fa fa-floppy-o" aria-hidden="true"></i>
              Pinned Jobs
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              <i className="fa fa-cogs" aria-hidden="true"></i>
              Edit Account
            </a>
          </li>
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

const UserButton = React.memo((props) => {
  const { currentUser, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    props.onClick(true);
  };

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      toast.success(result.message);
      navigate("/"); // Navigate to the root path
    } else if (!currentUser) {
      console.log("User is already logged out.");
      navigate("/"); // Navigate to the root path
    } else {
      console.error("Unexpected response during logout:", result.message);
    }
  };

  return (
    <div className="col col-md-3 px-0 text-right h-smenu ">
      <ul className="nav-login">
        <li>
          {currentUser ? (
            <LogoutButton handleLogout={handleLogout} />
          ) : (
            <LoginButton />
          )}
        </li>
        <li>
          {currentUser && (
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
        onClick={handleClick}
      />
    </div>
  );
});

export default UserButton;
