import React from "react";

const TopSkillOne = ({ user }) => {
  // Ensure skill is an object; default to an empty object if not
  const skill = user && user.skill ? user.skill : {};

  // Combine all skill categories into a single array
  const allSkills = Object.values(skill).reduce((acc, category) => {
    if (Array.isArray(category)) {
      acc.push(...category);
    }
    return acc;
  }, []);

  // Filter skills with rating 4 or 5
  const topSkills = allSkills.filter(({ rating }) => rating >= 4);

  // Randomize the top skills array
  topSkills.sort(() => Math.random() - 0.5);

  // Slice the array to keep only the first 10 skills
  const displayedSkills = topSkills.slice(0, 10);

  return (
    <div className="col">
      <div className="pr-info top-skills">
        <h3>Top Skills</h3>
        <ul>
          {displayedSkills.length > 0 ? (
            displayedSkills.map((skill, index) => (
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
            ))
          ) : (
            <li>No top skills available.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TopSkillOne;
