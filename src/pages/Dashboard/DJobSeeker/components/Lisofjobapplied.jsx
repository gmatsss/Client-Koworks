import React, { useEffect, useState } from "react";
import dollarSignImg from "../../../../imgs/dollar-sign.png"; // Adjust the path accordingly
import { fetchData } from "../../../../api/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const JobListing = ({
  job,
  jobTitle,
  employmentType,
  salaryLow,
  salaryHigh,
  salaryExact,
  experience,
  jobDescription,
  businessName,
  status,
}) => {
  const navigate = useNavigate();
  const displaySalary = salaryExact
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
            <span className={`job-type jt-red`}>{employmentType}</span>
          </h4>
        </div>
        <div className="status-container white d-flex align-items-center">
          <div>
            Status: <span className="status-value">{status}</span>
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
            <p className="b">{businessName}</p> {/* Displaying business name */}
          </div>
          <div className="col">
            <h5 className="blue">Job Description</h5>
            <p className="b">{jobDescription} </p>
          </div>
        </div>
        <div className="row text-end mtop-20 ">
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

const Listofjobapplied = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const getPinJobs = async () => {
      try {
        const data = await fetchData(
          "JobSeekerRoutes/getUserJobApplications",
          "GET"
        );
        if (data) {
          setJobListings(data); // Set the sorted and limited list of jobs
        } else {
          console.error("Failed to fetch pinned jobs:", data.message);
        }
      } catch (error) {
        console.error("Error fetching pinned jobs:", error);
      }
    };

    getPinJobs();
  }, []);

  // Transform the data here for JobListing props
  const transformedJobListings = jobListings.map((application) => ({
    key: application._id,
    job: application.job,
    jobTitle: application.job.jobTitle,
    employmentType: application.job.employmentType,
    salaryLow: application.job.salaryLow,
    salaryHigh: application.job.salaryHigh,
    salaryExact: application.job.salaryExact,
    experience: application.job.experience,
    jobDescription: application.job.jobDescription,
    jobSkills: application.job.jobSkills.join(", "), // Assuming you want to display the skills as a string
    viewLink: `/job/${application.job._id}`, // Adjust the link as necessary
    businessName: application.job.user.businessProfile.businessName, // Assuming business name is part of the business profile
    status: application.status, // Application status
  }));

  return (
    <>
      <div className="row mtop-30">
        <div className="col">
          <h2 className="f-35 blue">Recent Jobs Applied</h2>
        </div>
      </div>
      <div className="list-of-jobs">
        {transformedJobListings.map((jobListing) => (
          <JobListing {...jobListing} />
        ))}
        <div className="row mtop-30">
          <div className="col text-center">
            <Link to="/ViewAllJobApplied" className="btn-default-red">
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listofjobapplied;
