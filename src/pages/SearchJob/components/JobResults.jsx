import React, { useState } from "react";
import { DotSpinner } from "@uiball/loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faThumbtack,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import { fetchData } from "../../../api/api";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const JobResults = ({
  jobs,
  isLoading,
  currentPage,
  setCurrentPage,
  showPin,
  onRefreshJobs,
}) => {
  const navigate = useNavigate();

  const navigateWithJobState = (job) => {
    navigate("/ViewOneJob", { state: { job } });
  };

  const [selectedJobId, setSelectedJobId] = useState(null);
  const [notes, setNotes] = useState("");
  const [showModal, setShowModal] = useState(false);

  const togglePin = async (job) => {
    if (job.isPinned) {
      await unpinJob(job._id); // Assume unpinJob is a function similar to pinJob
    } else {
      setSelectedJobId(job._id);
      setShowModal(true);
    }
  };

  const unpinJob = async (jobId) => {
    try {
      // Assuming the endpoint for unpinning a job is '/unpinJob/:jobId'
      const response = await fetchData(
        `JobSeekerRoutes/unpinJob/${jobId}`,
        "DELETE"
      );
      if (response.success) {
        console.log("Job unpinned successfully:", response.message);
        onRefreshJobs();
      } else {
        console.error("Failed to unpin job:", response.message);
        // Optionally, show an error message to the user
      }
    } catch (error) {
      console.error("Error unpinning job:", error);
      // Optionally, show an error message to the user
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setNotes("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await pinJob(selectedJobId, notes);
    handleModalClose();
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Implement fetching jobs for the new page here
  };

  const formatSalary = (job) => {
    if (job.salaryType === "range") {
      return `${job.salaryLow}-${job.salaryHigh}/month`;
    } else if (job.salaryType === "exact") {
      return `${job.salaryExact}/month`;
    }
    return "Salary not specified";
  };

  const pinJob = async (jobId, notes) => {
    const pinData = {
      jobId: jobId,
      notes: notes, // You can customize this part as needed
    };
    try {
      const response = await fetchData(
        "JobSeekerRoutes/createPinJob",
        "POST",
        pinData
      );
      if (response.success) {
        console.log("Job pinned successfully:", response.data);
        onRefreshJobs();
        // Optionally, show a success message to the user
      } else {
        console.error("Failed to pin job:", response.message);
        // Optionally, show an error message to the user
      }
    } catch (error) {
      console.error("Error pinning job:", error);
      // Optionally, show an error message to the user
    }
  };

  const JOBS_PER_PAGE = 5; // Define how many jobs you want per page
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const endIndex = startIndex + JOBS_PER_PAGE;
  const currentJobs = jobs.slice(startIndex, endIndex); // Only take the jobs for the current page
  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);

  return (
    <div id="search-results" className="col px-0">
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <DotSpinner size={40} speed={1.3} color="black" />
        </div>
      ) : (
        currentJobs.map((job, index) => (
          <div className="result-container" key={job._id || index}>
            <div className="result-header">
              <h2 className="job-title">
                {job.jobTitle}
                <span className={`job-type jt-red`}>{job.employmentType}</span>
              </h2>
              <div className="d-flex justify-content-end">
                {showPin && (
                  <div className="d-flex justify-content-end">
                    <h2 onClick={() => togglePin(job)}>
                      <FontAwesomeIcon
                        icon={job.isPinned ? faBan : faThumbtack}
                      />
                      {job.isPinned ? " Unpin" : " Pin"}
                    </h2>
                  </div>
                )}
              </div>
            </div>
            <div className="result-content">
              <div className="row getjob-container">
                <img
                  src={`data:image/jpeg;base64,${job?.businessProfileImage}`}
                  alt="Job"
                  className="getjob-image"
                />
                <div className="col getjob-description">
                  {job.jobDescription}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <span className="salary mright-40">
                    <FontAwesomeIcon icon={faDollarSign} />{" "}
                    <span>{formatSalary(job)}</span>
                  </span>
                </div>
                <div className="col text-right">
                  <span
                    onClick={() => navigateWithJobState(job)}
                    className="see-more blue"
                    style={{ cursor: "pointer" }}
                  >
                    See more
                  </span>
                </div>
              </div>
              <div className="row mtop-20">
                <div className="col">
                  <ul className="list-skills">
                    {job.jobSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <nav aria-label="Job results pagination">
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Bookmark Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formNotes">
              <Form.Label>Notes:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JobResults;
