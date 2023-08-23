import React from "react";

const SkillRatingUpdate = ({
  category,
  skillName,
  skillValue,
  onRatingChange,
}) => {
  const handleRatingClick = (value) => {
    onRatingChange(category, skillName, value);
  };

  // Convert camelCase to readable format
  const toReadableFormat = (str) => {
    return str
      .replace(/([A-Z])/g, " $1") // insert a space before all caps
      .replace(/^./, (char) => char.toUpperCase()); // uppercase the first character
  };

  return (
    <div className="rating-container">
      <div className="job-position">
        <span className="f-20 fn blue">{toReadableFormat(skillName)}</span>
      </div>
      <div className="job-rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name={skillName}
              value={value}
              checked={skillValue === value}
              onChange={() => handleRatingClick(value)}
            />
            {[...Array(value)].map((_, index) => (
              <span key={index} className="fa fa-star"></span>
            ))}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SkillRatingUpdate;
