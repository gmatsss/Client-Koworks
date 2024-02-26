import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { toast } from "react-toastify";

const SeekerLink = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleNavigation = (e, path) => {
    // Assuming the logic to check for incomplete profile or skills is similar
    if (
      currentUser &&
      currentUser.role === "employee" &&
      (!currentUser.employeeProfile || !currentUser.skill)
    ) {
      let message = "";

      if (!currentUser.employeeProfile && !currentUser.skill) {
        message =
          "To proceed, kindly ensure your profile and skills are fully set up.";
      } else if (!currentUser.employeeProfile) {
        message = "Your profile is incomplete. Please update it to continue.";
      } else if (!currentUser.skill) {
        message =
          "Skill information is required. Please complete your skill set to move forward.";
      }
      if (message) {
        toast.info(message);
        return; // Stop the function here to not navigate
      }
    } else {
      e.preventDefault(); // Prevent default link action
      navigate(path);
    }
  };
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
          <Link to="/SearchJob">Job Posts</Link>
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
