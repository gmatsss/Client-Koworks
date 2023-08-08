import { Link } from "react-router-dom";

const NavLink = () => {
  return (
    <nav className="knav">
      <ul>
        <li>
          <Link className="" to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <a href="#" className="">
            How It Works
          </a>
          <ul className="sub-menu">
            <li>
              <Link className="nav-link" to="/HowitWorks/employer">
                Employer
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/HowitWorks/jobseeker">
                Job Seeker
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link className="" to="/PostAJob">
            <span>Post A Job</span>
          </Link>
        </li>
        <li>
          <Link className=" " to="/Jobseek">
            <span>Job Seeker</span>
          </Link>
        </li>
        <li>
          <Link className=" " to="/Pricing">
            <span>Pricing</span>
          </Link>
        </li>
        <li>
          <Link className=" " to="/Resources">
            <span>Resources</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLink;
