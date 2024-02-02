// JobDetailsForm.js
import React from "react";

const JobDetailsForm = ({
  jobTitle,
  setJobTitle,
  jobDescription,
  setJobDescription,
}) => {
  return (
    <div>
      <div className="alert alert-success" style={{ display: "none" }}></div>
      <div className="kform-group">
        <input
          type="text"
          className="kfield gray job-title f-border"
          name="job_title"
          id="job_title"
          placeholder="Job Title"
          required
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>
      <div className="kform-group">
        <textarea
          name="job_description"
          id="job_description"
          className="kfield gray job-description f-border"
          cols="30"
          rows="10"
          placeholder="Job Description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default JobDetailsForm;
