import React, { useState } from "react";

const SalaryForm = ({
  salaryType,
  setSalaryType,
  salaryLow,
  setSalaryLow,
  salaryHigh,
  setSalaryHigh,
  salaryExact,
  setSalaryExact,
}) => {
  const [salaryDuration, setSalaryDuration] = useState("hourly");

  const handleSalaryTypeChange = (e) => {
    setSalaryType(e.target.value);
  };

  const handleSalaryDurationChange = (e) => {
    setSalaryDuration(e.target.value);
  };

  return (
    <>
      <h3 className="f-20 blue mtop-30 mbot-30">Propose Salary</h3>
      <div className="kform-group mtop-20 colstwo">
        <div className="k-select">
          <select
            name="salary_type"
            id="salary_type"
            required
            value={salaryType}
            onChange={handleSalaryTypeChange}
          >
            <option value="range">Range</option>
            <option value="exact">Exact Rate</option>
          </select>
        </div>
      </div>
      {salaryType === "range" ? (
        <div
          id="sel-range"
          className="kform-group colstwo align-items-center mtop-20"
        >
          <input
            type="text"
            className="kfield gray text-center f-border mright-23"
            name="salary_low"
            id="salary_low"
            placeholder="Salary Rate"
            value={salaryLow}
            onChange={(e) => setSalaryLow(e.target.value)}
          />
          <span className="f-16 fn dark-gray">to</span>
          <input
            type="text"
            className="kfield gray text-center f-border mleft-23"
            name="salary_high"
            id="salary_high"
            placeholder="Salary Rate"
            value={salaryHigh}
            onChange={(e) => setSalaryHigh(e.target.value)}
          />
        </div>
      ) : (
        <div
          id="sel-exact"
          className="kform-group colstwo align-items-center mtop-20"
        >
          <input
            type="text"
            className="kfield gray text-center f-border mright-23"
            name="salary_exact"
            id="salary_exact"
            placeholder="Salary Rate"
            value={salaryExact}
            onChange={(e) => setSalaryExact(e.target.value)}
          />
        </div>
      )}
    </>
  );
};

export default SalaryForm;
