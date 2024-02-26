import React from "react";

const SkillOne = ({ user }) => {
  // Ensure user.skill is an object; default to an empty object if not
  const skills = user && user.skill ? user.skill : {};

  // Convert the skills object to an array of skill items, ensuring it's always an array
  const skillItems = Object.values(skills).flat();

  // Filter out items that have both "name" and "rating" properties
  const allSkills = skillItems.filter(
    (item) => item.hasOwnProperty("name") && item.hasOwnProperty("rating")
  );

  return (
    <div className="row mtop-90">
      <div className="col">
        <div className="pr-info">
          <h3>Worker Skills</h3>
          <div className="all-skills">
            <ul>
              {allSkills.map((skill, index) => (
                <li key={index}>
                  {skill.name}
                  <label>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`fa fa-star ${
                          i < skill.rating ? "checked" : ""
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

export default SkillOne;
