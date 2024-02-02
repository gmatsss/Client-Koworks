import React from "react";

const OtherInformationForm = ({
  idProof,
  setIdProof,
  employmentType,
  setEmploymentType,
  experience,
  setExperience,
  workingHours,
  setWorkingHours,
}) => {
  return (
    <>
      <h3 className="f-20 blue mtop-30 mbot-30">Other Information</h3>
      <div className="kform-group mtop-20 colstwo">
        <div className="k-select">
          <select
            name="id_proof"
            id="id_proof"
            required
            value={idProof}
            onChange={(e) => setIdProof(e.target.value)}
          >
            <option value="">Required ID Proof (Greater than)</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="99">99</option>
          </select>
        </div>
        <div className="k-select">
          <select
            name="employment_type"
            id="employment_type"
            required
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
          >
            <option value="">Type of Employment</option>
            <option value="any">Any</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
          </select>
        </div>
      </div>
      <div className="kform-group mtop-20 colstwo">
        <input
          type="text"
          name="experience"
          id="experience"
          className="kfield gray contact text-center f-border mright-23"
          placeholder="Years of Experience"
          required
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <input
          type="text"
          name="working-hours"
          id="working-hours"
          className="kfield gray contact text-center f-border mleft-23"
          placeholder="No. of Working Hours"
          value={workingHours}
          onChange={(e) => setWorkingHours(e.target.value)}
        />
      </div>
    </>
  );
};

export default OtherInformationForm;
