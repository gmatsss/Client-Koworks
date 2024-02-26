import React, { useEffect, useState } from "react";
import dollarSignImg from "../../../../imgs/dollar-sign.png"; // Adjust the path accordingly
import { fetchData } from "../../../../api/api";
import { Link, useNavigate } from "react-router-dom";

const JobListing = ({
  job,
  jobTitle,
  employmentType,
  salaryLow,
  salaryHigh,
  salaryExact,
  experience,
  jobDescription,
  notes,
  jobSkills,
}) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Determine display salary based on whether salaryExact is available
  const displaySalary = salaryExact
    ? `${salaryExact} / hourly`
    : `${salaryLow} - ${salaryHigh} / hourly`;

  const viewJob = () => {
    navigate("/ViewOneJob", { state: { job } });
  };

  return (
    <div className="job-content">
      <div className="job-header">
        <h4 className="white m-0">
          {jobTitle}
          <span className={`job-type jt-red`}>{employmentType}</span>
        </h4>
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
        <div className="row">
          <div className="col">{jobDescription}</div>
        </div>
        <div className="row mtop-30">
          <div className="col">
            <h5 className="blue">Notes:</h5>
            {notes}
          </div>
        </div>
        <div className="row text-end mtop-20 ">
          <div className="col">
            <span
              onClick={viewJob}
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

const ListOfPinJobs = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const getPinJobs = async () => {
      try {
        const data = await fetchData("JobSeekerRoutes/getPinJobs", "GET");
        if (data && data.success) {
          // Assuming the data.data is an array of jobs
          const sortedAndLimitedJobs = data.data
            .sort((a, b) => new Date(b.created) - new Date(a.created)) // Sort jobs by creation date, newest first
            .slice(0, 2); // Keep only the first two jobs
          setJobListings(sortedAndLimitedJobs); // Set the sorted and limited list of jobs
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
  const transformedJobListings = jobListings.map((job) => ({
    key: job._id,
    job: job.job,
    jobTitle: job.job.jobTitle,
    employmentType: job.job.employmentType,
    salaryLow: job.job.salaryLow,
    salaryHigh: job.job.salaryHigh,
    salaryExact: job.job.salaryExact,
    experience: job.job.experience,
    jobDescription: job.job.jobDescription,
    notes: job.notes,
    jobSkills: job.job.jobSkills.join(", "), // Assuming you want to display the skills as a string
    viewLink: `https://linkagekoworks.viewourdesign.info/job/${job.job._id}`, // Adjust the link as necessary
  }));

  return (
    <>
      <div className="row mtop-30">
        <div className="col">
          <h2 className="f-35 blue">Recent Saved Jobs</h2>
        </div>
      </div>
      <div className="list-of-jobs">
        {transformedJobListings.map((jobListing) => (
          <JobListing {...jobListing} />
        ))}
        <div className="row mtop-30">
          <div className="col text-center">
            <Link to="/ViewAllPinJob" className="btn-default-red">
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListOfPinJobs;
