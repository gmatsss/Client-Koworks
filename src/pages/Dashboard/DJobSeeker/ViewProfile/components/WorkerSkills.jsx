import React from "react";

const WorkerSkills = ({ skills }) => {
  // Extract all skill arrays from the skills object and flatten them into a single array
  const allSkills = Object.values(skills).flat();

  return (
    <div className="row mtop-90">
      <div className="col">
        <div className="pr-info">
          <h3>Worker Skills</h3>
          <div className="all-skills">
            <ul>
              {allSkills
                .filter((skill) => skill.name) // Filter out skills without a name
                .map((skill) => (
                  <li key={skill._id}>
                    {skill.name.charAt(0).toUpperCase() +
                      skill.name.slice(1).replace(/([A-Z])/g, " $1")}
                    <label>
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`fa fa-star ${
                            index < skill.rating ? "checked" : ""
                          }`}
                        ></span>
                      ))}
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerSkills;
