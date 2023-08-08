import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const UserButton = (props) => {
  const handleClick = () => {
    props.onClick(true);
  };
  return (
    <div className="col col-md-3 px-0 text-right h-smenu ">
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
      <FontAwesomeIcon
        className="mobile-nav-btn"
        icon={faBars}
        onClick={handleClick}
      />
    </div>
  );
};

export default UserButton;
