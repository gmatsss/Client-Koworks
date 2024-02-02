import React from "react";
import { useLocation } from "react-router-dom";
import JobBanner from "./components/JobBanner";
import JobContentSection from "./components/JobContentSection";

const ViewJobEmployer = () => {
  const location = useLocation();
  const job = location.state?.job;

  // Format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Unknown Date" : date.toLocaleDateString();
  };

  return (
    <div>
      <JobBanner
        title={job?.jobTitle}
        salary={
          job?.salaryType === "range"
            ? `$${job?.salaryLow} - $${job?.salaryHigh}`
            : `$${job?.salaryExact}`
        }
        jobType={job?.employmentType}
        datePosted={formatDate(job?.created)}
        idScore={job?.idProof}
      />
      <JobContentSection
        jobOverview={job?.jobDescription}
        skillsRequired={job?.jobSkills}
      />
    </div>
  );
};

export default ViewJobEmployer;
