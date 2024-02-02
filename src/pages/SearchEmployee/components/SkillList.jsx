import React from "react";

// Define the SkillList component
const SkillList = ({ skills, onEditSkillsClick }) => {
  return (
    <div className="kform-group mtop-20">
      <label>Selected Skills</label>
      {skills.map((skill, index) => (
        <div key={index} className="result-skill">
          <h3>{skill.name}</h3>
          {[...Array(skill.rating)].map((_, i) => (
            <span key={i} className="fa fa-star"></span>
          ))}
        </div>
      ))}
      <a onClick={onEditSkillsClick}>Edit Skills</a>
    </div>
  );
};

export default SkillList;
