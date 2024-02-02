import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditModal from "../editModal/EditModal";
import { fetchData } from "../../../api/api";
import { toast } from "react-toastify";

const TableBody = ({ jobs, onRefresh }) => {
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);

  const handleRowClick = (job) => {
    navigate(`/ViewJobEmployer/${job._id}`, { state: { job } });
  };

  const handleEdit = (job) => {
    setCurrentJob(job);
    setShowEditModal(true);
  };

  const handleDelete = async (job) => {
    if (
      window.confirm(
        `Are you sure you want to delete the job: ${job.jobTitle}?`
      )
    ) {
      try {
        const deleteJobEndpoint = `EmployerRoutes/deletePostJob/${job._id}`;
        const response = await fetchData(deleteJobEndpoint, "DELETE");

        if (response.success) {
          toast.success("Job deleted successfully.");
          onRefresh(); // Refresh the job list
        } else {
          console.error("Failed to delete job:", response.message);
          alert(`Error: ${response.message}`);
        }
      } catch (error) {
        console.error("Error in deleting job:", error);
        alert(
          `Error: ${
            error.message || "An error occurred while deleting the job."
          }`
        );
      }
    }
  };
  return (
    <>
      <style>
        {`
          .hover-link:hover {
            text-decoration: underline;
            cursor: pointer;
            color: blue;
          }
        `}
      </style>
      <tbody>
        {jobs.map((job) => (
          <tr key={job._id}>
            <td
              className="text-start hover-link"
              onClick={() => handleRowClick(job)}
            >
              {job.jobTitle}
            </td>
            <td className="text-start">{job.idProof}</td>
            <td className="text-start">{job.employmentType}</td>
            <td className="text-start">{job.status}</td>
            <td className="text-start">{job.applicants.length || "n/a"}</td>

            <td className="align-center text-right">
              <div className="d-flex justify-content-start">
                {/* Show Action */}
                <button
                  className="btn btn-link p-0 text-primary"
                  onClick={() => handleRowClick(job)}
                  title="Show"
                >
                  <i className="fa fa-eye fa-fw"></i>
                </button>

                {/* Edit Action */}
                <button
                  className="btn btn-link p-0 text-primary ml-2"
                  onClick={() => handleEdit(job)}
                  title="Edit"
                >
                  <i className="fa fa-edit fa-fw"></i>
                </button>

                {/* Delete Action */}
                <button
                  className="btn btn-link p-0 text-danger ml-2"
                  onClick={() => handleDelete(job)}
                  title="Delete"
                >
                  <i className="fa fa-trash fa-fw"></i>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>

      {showEditModal && (
        <EditModal
          job={currentJob}
          onClose={() => setShowEditModal(false)}
          onRefresh={onRefresh} // Pass the refresh function to EditModal
        />
      )}
    </>
  );
};

export default TableBody;
