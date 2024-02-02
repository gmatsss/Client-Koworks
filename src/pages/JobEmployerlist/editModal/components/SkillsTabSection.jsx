import React, { useState, useEffect } from "react";

const SkillsTabSection = ({
  jobSkills,
  setJobSkills,
  selectedCategory,
  onCategoryChange,
}) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategory || "");

  const skillsCategories = {
    "admin-office-virtual-assistant": [
      "Admin Assistant",
      "Data Entry",
      "Email Management",
    ],
    advertising: ["Facebook Ads", "Bing Ads"],
    "customer-service-and-admin-support": [
      "Community Forum Moderation",
      "Content Moderation",
      "Customer Support",
    ],
    "english-skills": ["Speaking", "Translations", "Tutoring Teaching"],
    "finance-and-management-virtual-accountants": [
      "Accounting",
      "Bookkeeping",
      "Business Plans",
    ],
    "graphics-and-multimedia": [
      "3D Modeling",
      "Graphics Editing",
      "Logo Design",
    ],
    "marketing-sales": [
      "Affiliate Marketing",
      "Classified Ads Marketing",
      "Direct Mail Marketing",
    ],
    "professional-services": [
      "Legal Services",
      "Medical Services",
      "Real Estate Services",
    ],
    "project-management": [
      "Design Project Management",
      "Marketing Project Management",
      "Other Project Management",
    ],
    "software-development-programming": [
      "Android Development",
      "Desktop Applications",
      "Game Development",
    ],
    "web-development": ["Wordpress Development", "Shopify", "Laravel"],
    webmaster: ["Content Management", "WordPress", "Google Analytics"],
    writing: ["Blogging", "Copywriting", "Creative Writing"],
    // Add other categories and skills as needed
  };

  useEffect(() => {
    setActiveCategory(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    // Pre-select the skills that are part of the job
    if (selectedCategory && skillsCategories[selectedCategory]) {
      const preSelectedSkills = skillsCategories[selectedCategory].filter(
        (skill) => jobSkills.includes(skill)
      );
      setJobSkills(preSelectedSkills);
    }
  }, [selectedCategory, jobSkills, skillsCategories, setJobSkills]);

  const handleSkillChange = (skill, isChecked) => {
    if (isChecked && !jobSkills.includes(skill)) {
      setJobSkills([...jobSkills, skill]);
    } else if (!isChecked) {
      setJobSkills(jobSkills.filter((s) => s !== skill));
    }
  };

  const handleCategorySelection = (categoryId) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <div className="kform-group mtop-20 skills-required">
      <h3 className="f-20 blue mtop-30 mbot-30">Skills Required</h3>
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {Object.keys(skillsCategories).map((categoryId) => (
            <button
              key={categoryId}
              className={`nav-link ${
                activeCategory === categoryId ? "active" : ""
              }`}
              onClick={() => handleCategorySelection(categoryId)}
              type="button"
              role="tab"
            >
              {categoryId.replace(/-/g, " ")}
            </button>
          ))}
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          {Object.entries(skillsCategories).map(([categoryId, skills]) => (
            <div
              key={categoryId}
              className={`tab-pane fade ${
                activeCategory === categoryId ? "show active" : ""
              }`}
              id={categoryId}
              role="tabpanel"
            >
              {skills.map((skill, index) => (
                <div key={index} className="job-skill-options">
                  <div className="checkbox-input">
                    <input
                      type="checkbox"
                      name="job_skills[]"
                      value={skill}
                      checked={jobSkills.includes(skill)}
                      onChange={(e) =>
                        handleSkillChange(skill, e.target.checked)
                      }
                    />
                    <label htmlFor="job-skills">{skill}</label>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTabSection;
