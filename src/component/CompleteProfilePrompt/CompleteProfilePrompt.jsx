import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faToolbox } from "@fortawesome/free-solid-svg-icons";

const CompleteProfilePrompt = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to navigate to the Employee Profile Component
  const navigateToProfile = () => {
    navigate("/EmployeeProfileComponent"); // Adjust the path as needed
  };

  // Function to navigate to the Skill Rating Form
  const navigateToSkills = () => {
    navigate("/SkillRatingForm"); // Adjust the path as needed
  };

  return (
    <div className="complete-profile-prompt container text-center mt-5">
      <h2>
        <FontAwesomeIcon icon={faUserCircle} /> Please Complete Your Profile and
        Skill Information
      </h2>
      <p>
        <FontAwesomeIcon icon={faToolbox} />
        To start searching for jobs, you need to first complete your profile and
        add your skills.
      </p>
      <div className="actions mt-4">
        <button className="btn btn-primary mr-2" onClick={navigateToProfile}>
          Complete Profile
        </button>
        <button className="btn btn-secondary" onClick={navigateToSkills}>
          Complete Skills
        </button>
      </div>
    </div>
  );
};

export default CompleteProfilePrompt;
