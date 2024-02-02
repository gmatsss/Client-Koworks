import React from "react";

const JobContentSection = ({ jobOverview, skillsRequired }) => {
  return (
    <section className="job-content-section white-bg job-section-112">
      <div className="container k-container">
        <div className="row px-0 mleft-23 mbot-30">
          <div className="col col-8 px-0">
            <div className="job-container">
              <div className="job-header">
                <h3>Job Overview</h3>
              </div>
              <div className="job-content">
                <p>{jobOverview}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="skill-container">
              <div className="skill-header">
                <h3>Skills Required</h3>
              </div>
              <div className="skill-content">
                <ul>
                  {skillsRequired.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobContentSection;
