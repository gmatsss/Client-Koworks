import { Link } from "react-router-dom";

const SeekerLink = () => {
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
          <Link className="" to="/SearchJob">
            <span>Job Posts</span>
          </Link>
        </li>
        <li>
          <Link className=" " to="/Payments">
            <span>Payments</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SeekerLink;
