import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { fetchData } from "../../api/api";
import { toast } from "react-toastify";
import CompleteProfilePrompt from "../../component/CompleteProfilePrompt/CompleteProfilePrompt";

const ViewOneJob = () => {
  const location = useLocation();
  const job = location.state?.job;
  const { currentUser } = useContext(UserContext);
  const [applying, setApplying] = useState(false);

  const [applicationStatus, setApplicationStatus] = useState(null);

  useEffect(() => {
    const checkStatus = async () => {
      if (currentUser && job) {
        try {
          const response = await fetchData(
            `JobSeekerRoutes/checkApplicationStatus/${job._id}`,
            "GET"
          );
          if (response.hasApplied) {
            setApplicationStatus(response.status);
          } else {
            setApplicationStatus(null);
          }
        } catch (error) {
          console.error("Error fetching application status:", error);
          toast.error("Failed to fetch application status.");
        }
      }
    };

    checkStatus();
  }, [currentUser, job]);

  const applyForJob = async () => {
    if (!currentUser || !job) {
      toast.error("You must be logged in and select a job to apply.");
      return;
    }

    setApplying(true);
    try {
      const endpoint = `JobSeekerRoutes/applyForJob/${job._id}`;
      const response = await fetchData(endpoint, "POST");

      if (response.success) {
        toast.success("Successfully applied for the job!");
      } else {
        toast.error("Failed to apply for the job: " + response.message);
      }
    } catch (error) {
      console.error("Error applying for job:", error);
      toast.error("An error occurred while applying for the job.");
    } finally {
      setApplying(false);
    }
  };

  // Format the job creation date using vanilla JavaScript
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Determine salary display based on salary type
  const salaryDisplay = job
    ? job.salaryType === "exact"
      ? `${job.salaryExact}/month`
      : `${job.salaryLow}-${job.salaryHigh}/month`
    : "";

  if (!job) {
    return <div>Job information is not available.</div>;
  }

  const isProfileAndSkillCompleted =
    currentUser?.verificationStatus?.profileCompleted &&
    currentUser?.verificationStatus?.skillCompleted;

  // If the user is logged in, an employee, and either profile or skill is incomplete, display a message
  if (
    currentUser &&
    currentUser.role === "employee" &&
    !isProfileAndSkillCompleted
  ) {
    return <CompleteProfilePrompt />;
  }

  return (
    <div>
      <section className="banner-section-sa banner-jobs banner-1">
        <div className="container k-container">
          <div className="row">
            <div className="col">
              <h1 className="f-55 white">{job.jobTitle}</h1>
            </div>
          </div>
          <div className="row banner-job-meta">
            <div className="col text-center">
              <span className="salary-banner">
                <i className="fas fa-dollar-sign"></i>{" "}
                <span>{salaryDisplay}</span>
              </span>
            </div>
            <div className="col text-center">
              <span className="job-type-banner">
                <i className="fas fa-briefcase"></i>{" "}
                {job.employmentType.charAt(0).toUpperCase() +
                  job.employmentType.slice(1)}
              </span>
            </div>
            <div className="col text-center">
              <span className="date-banner">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                {formatDate(job.created)}
              </span>
            </div>
            <div className="col text-center">
              <span className="id-proof">
                <i className="fa fa-id-card" aria-hidden="true"></i>
                ID Proof: {job.idProof}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="job-content-section white-bg job-section-1">
        <div className="container k-container">
          <div className="row px-0 mleft-23 mbot-30">
            <div className="col col-8 px-0">
              <div className="job-container">
                <div className="job-header">
                  <h3>Job Overview</h3>
                </div>
                <div className="job-content">{job.jobDescription}</div>
              </div>
            </div>
            <div className="col">
              <div className="skill-container">
                <div className="skill-header">
                  <h3>Skills Required</h3>
                </div>
                <div className="skill-content">
                  <ul>
                    {job.jobSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {currentUser && currentUser.role === "employee" && (
          <div className="apply-button-container text-center">
            {applicationStatus ? (
              // Render a disabled button with a different class if there is an application status
              <a
                href="#"
                className="btn-default-light-gray small-btn disabled"
                onClick={(e) => e.preventDefault()}
              >
                {applicationStatus.charAt(0).toUpperCase() +
                  applicationStatus.slice(1)}
              </a>
            ) : (
              // Render the "Apply for Job" button if there is no application status
              <button
                className="btn-default-red"
                onClick={applyForJob}
                disabled={applying}
              >
                {applying ? "Applying..." : "Apply for Job"}
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default ViewOneJob;
