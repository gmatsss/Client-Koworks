import React from "react";

const JobInformationForm = ({
  jobTitle,
  setJobTitle,
  jobDescription,
  setJobDescription,
  salaryType,
  setSalaryType,
  salaryLow,
  setSalaryLow,
  salaryHigh,
  setSalaryHigh,
  salaryExact,
  setSalaryExact,
}) => {
  // Function to handle the change in salary type and show/hide relevant fields
  const handleSalaryTypeChange = (e) => {
    setSalaryType(e.target.value);
    if (e.target.value === "exact") {
      setSalaryLow("");
      setSalaryHigh("");
    } else {
      setSalaryExact("");
    }
  };

  return (
    <>
      <h2 className="f-35 blue mbot-30">Job Information</h2>

      <div className="kform-group">
        <input
          type="text"
          className="kfield gray job-title f-border"
          name="job_title"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
      </div>

      <div className="kform-group">
        <textarea
          name="job_description"
          className="kfield gray job-description f-border ckeditor"
          cols="30"
          rows="10"
          placeholder="Job Description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="kform-group mtop-20 colstwo">
        <div className="k-select m-0">
          <select
            name="salary_type"
            id="salary"
            value={salaryType}
            onChange={handleSalaryTypeChange}
            required
          >
            <option value="range">Range</option>
            <option value="exact">Exact Rate</option>
          </select>
        </div>
      </div>

      {salaryType === "range" && (
        <div
          id="sel-range"
          className="kform-group colstwo align-items-center mtop-20"
        >
          <span className="input-currency">
            <input
              type="number"
              min="1"
              className="kfield gray text-center f-border"
              name="salary_low"
              placeholder="Salary Rate"
              value={salaryLow}
              onChange={(e) => setSalaryLow(e.target.value)}
            />
          </span>
          <span className="f-16 fn dark-gray">to</span>
          <span className="input-currency">
            <input
              type="number"
              min="1"
              className="kfield gray text-center f-border"
              name="salary_high"
              placeholder="Salary Rate"
              value={salaryHigh}
              onChange={(e) => setSalaryHigh(e.target.value)}
            />
          </span>
        </div>
      )}

      {salaryType === "exact" && (
        <div
          id="sel-exact"
          className="kform-group colstwo align-items-center mtop-20"
        >
          <span className="input-currency m-0">
            <input
              type="number"
              min="1"
              className="kfield gray text-center f-border m-0"
              name="salary_exact"
              placeholder="Salary Rate"
              value={salaryExact}
              onChange={(e) => setSalaryExact(e.target.value)}
            />
          </span>
        </div>
      )}
    </>
  );
};

export default JobInformationForm;
