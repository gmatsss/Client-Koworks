import React from "react";
import dollarSignImg from "../../../imgs/dollar-sign.png"; // Ensure the correct path
import { fetchData } from "../../../api/api";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const JobListing = ({ job, notes, pinJobId }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const displaySalary =
    job.salaryType === "exact"
      ? `${job.salaryExact} / hourly`
      : `${job.salaryLow} - ${job.salaryHigh} / hourly`;

  // Placeholder action URLs or functions
  const deleteAction = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to unpin this job?"
    );
    if (!isConfirmed) {
      return; // User canceled the action
    }

    try {
      // Use pinJobId in your delete request
      const responseData = await fetchData(
        `JobSeekerRoutes/unpinJob/${job._id}`, // Modify to use the correct endpoint
        "DELETE"
      );

      if (responseData.success) {
        alert("Job successfully unpinned.");
        // Refresh or update the UI as needed
      } else {
        throw new Error(
          responseData.message || "An error occurred while unpinning the job."
        );
      }
    } catch (error) {
      console.error("Failed to unpin the job:", error);
      alert(error.message || "An error occurred while unpinning the job.");
    }
  };

  const editAction = async () => {
    const newNotes = prompt("Enter new notes:");
    if (newNotes === null || newNotes.trim() === "") {
      alert("No changes made.");
      return;
    }

    try {
      const responseData = await fetchData(
        "JobSeekerRoutes/updatePinJobNotes",
        "POST",
        {
          pinJobId: pinJobId,
          notes: newNotes,
        }
      );

      // Check the success field to determine the outcome
      if (responseData.success) {
        alert(responseData.message || "Notes updated successfully");
        // Optionally, refresh the job listing or perform further actions based on success
      } else {
        throw new Error(
          responseData.message || "An error occurred while updating notes."
        );
      }
    } catch (error) {
      console.error("Failed to update notes:", error);
      alert(error.message || "An error occurred while updating notes.");
    }
  };

  const viewJob = () => {
    // Use navigate to change the route and pass the job state
    navigate("/ViewOneJob", { state: { job } });
  };

  return (
    <div className="job-content">
      <div className="job-header d-flex justify-content-between align-items-center">
        <h4 className="white m-0">
          {job.jobTitle}
          <span className="job-type jt-red ml-2">{job.employmentType}</span>
        </h4>
        <div>
          {/* Action Icons */}
          <a
            href="#"
            onClick={editAction}
            className="mr-2"
            style={{ color: "white" }}
          >
            <i className="fa fa-edit fa-fw fa-2x"></i>{" "}
            {/* Example using fa-2x to increase size */}
          </a>
          <a
            href="#"
            onClick={deleteAction}
            className="mr-2"
            style={{ color: "white" }}
          >
            <i className="fa fa-times fa-fw fa-2x"></i>{" "}
            {/* Adjust size as needed */}
          </a>
          <span onClick={viewJob} style={{ color: "white", cursor: "pointer" }}>
            <i className="fa fa-eye fa-fw fa-2x"></i>
          </span>
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
            <p className="b">{job.experience} year/s</p>
          </div>
        </div>
        <div className="row">
          <div className="col">{job.jobDescription}</div>
        </div>
        <div className="row mtop-30">
          <div className="col">
            <h5 className="blue">Notes:</h5>
            {notes || "No notes provided"}
          </div>
        </div>
        <div className="row text-end mtop-20">
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

export default JobListing;
