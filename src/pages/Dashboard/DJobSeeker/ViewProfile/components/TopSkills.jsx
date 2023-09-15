import React from "react";

const SkillRating = ({ rating }) => {
  return (
    <label>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`fa fa-star ${index < rating ? "checked" : ""}`}
        ></span>
      ))}
    </label>
  );
};

const TopSkills = ({ skills }) => {
  return (
    <div className="col">
      <div className="pr-info top-skills">
        <h3>Top Skills</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill.name}>
              {skill.name}
              <SkillRating rating={skill.rating} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopSkills;
