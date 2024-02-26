import React from "react";
import dollarSignImg from "../../../imgs/dollar-sign.png"; // Ensure the correct path
import { useNavigate } from "react-router-dom"; // Import useNavigate

const JobListing = ({ job, applicationStatus }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Destructuring job data for easier access
  const {
    jobTitle,
    employmentType,
    status,
    salaryType,
    salaryExact,
    salaryLow,
    salaryHigh,
    experience,
    jobDescription,
    user: { businessProfile: { businessName } = {} } = {}, // Safely accessing nested businessName
  } = job;

  // Formatting salary display based on salaryType
  const displaySalary =
    salaryType === "exact"
      ? `${salaryExact} / hourly`
      : `${salaryLow} - ${salaryHigh} / hourly`;

  const viewJobDetails = () => {
    navigate("/ViewOneJob", { state: { job } });
  };

  return (
    <div className="job-content">
      <div className="job-header d-flex justify-content-between">
        <div>
          <h4 className="white m-0">
            {jobTitle}
            <span className={`job-type jt-red ml-2`}>{employmentType}</span>
          </h4>
        </div>
        <div className="status-container white d-flex align-items-center">
          <div>
            Status: <span className="status-value">{applicationStatus}</span>
          </div>
        </div>
      </div>

      <div className="job-details">
        <div className="row">
          <div className="col">
            <h5 className="blue">Salary</h5>
            <span className="salary mright-40">
              <img src={dollarSignImg} alt="Expected Salary" />
              <span className="b">{displaySalary}</span>
            </span>
          </div>
          <div className="col">
            <h5 className="blue">Experience</h5>
            <p className="b">{experience} years</p>
          </div>
        </div>

        <div className="row mtop-30">
          <div className="col">
            <h5 className="blue">Business Name:</h5>
            <p className="b">{businessName}</p>
          </div>
          <div className="col">
            <h5 className="blue">Job Description</h5>
            <p className="b">{jobDescription}</p>
          </div>
        </div>
        <div className="row text-end mtop-20">
          <div className="col">
            <span
              onClick={viewJobDetails}
              className="see-more blue"
              style={{ cursor: "pointer" }}
            >
              View Job
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
