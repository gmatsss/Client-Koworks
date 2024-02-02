import React, { useState } from "react";
const skillCategories = [
  {
    id: "admin-office-virtual-assistant",
    title: "Admin & Office (Virtual Assistant)",
  },
  { id: "advertising", title: "Advertising" },
  {
    id: "customer-service-and-admin-support",
    title: "Customer Service and Admin Support",
  },
  { id: "english-skills", title: "English Skills" },
  {
    id: "finance-and-management-virtual-accountants",
    title: "Finance and Management (Virtual Accountants)",
  },
  { id: "graphics-and-multimedia", title: "Graphics and Multimedia" },
  { id: "marketing-sales", title: "Marketing and Sales" },
  { id: "professional-services", title: "Professional Services" },
  { id: "project-management", title: "Project Management" },
  {
    id: "software-development-programming",
    title: "Software Development / Programming",
  },
  { id: "web-development", title: "Web Development" },
  { id: "webmaster", title: "Webmaster" },
  { id: "writing", title: "Writing" },
];

const skillOptions = {
  "admin-office-virtual-assistant": [
    { id: 1, label: "Admin Assistant" },
    { id: 2, label: "Data Entry" },
    { id: 3, label: "Email Management" },
    // ... add other skills for this category
  ],
  advertising: [
    { id: 4, label: "Amazon Product Ads" },
    { id: 5, label: "Bing Ads" },
    { id: 6, label: "Facebook Ads" },
    // ... add other skills for this category
  ],
  "customer-service-and-admin-support": [
    { id: 7, label: "Community Forum Moderation" },
    { id: 8, label: "Content Moderation" },
    { id: 9, label: "Customer Support" },
    // ... add other skills for this category
  ],
  "english-skills": [
    { id: 10, label: "Speaking" },
    { id: 11, label: "Translations" },
    { id: 12, label: "Tutoring Teaching" },
    // ... add other skills for this category
  ],
  "finance-and-management-virtual-accountants": [
    { id: 13, label: "Accounting" },
    { id: 14, label: "Bookkeeping" },
    { id: 15, label: "Business Plans" },
    // ... add other skills for this category
  ],
  "graphics-and-multimedia": [
    { id: 16, label: "3D Modeling" },
    { id: 17, label: "Graphics Editing" },
    { id: 18, label: "Logo Design" },
    // ... add other skills for this category
  ],
  "marketing-sales": [
    { id: 19, label: "Affiliate Marketing" },
    { id: 20, label: "Classified Ads Marketing" },
    { id: 21, label: "Direct Mail Marketing" },
    // ... add other skills for this category
  ],
  "professional-services": [
    { id: 22, label: "Legal Services" },
    { id: 23, label: "Medical Services" },
    { id: 24, label: "Real Estate Services" },
    // ... add other skills for this category
  ],
  "project-management": [
    { id: 25, label: "Design Project Management" },
    { id: 26, label: "Marketing Project Management" },
    { id: 27, label: "Other Project Management" },
    // ... add other skills for this category
  ],
  "software-development-programming": [
    { id: 28, label: "Android Development" },
    { id: 29, label: "Desktop Applications" },
    { id: 30, label: "Game Development" },
    // ... add other skills for this category
  ],
  "web-development": [
    { id: 31, label: "WordPress Development" },
    { id: 32, label: "Shopify" },
    { id: 33, label: "Laravel" },
    // ... add other skills for this category
  ],
  webmaster: [
    { id: 34, label: "Content Management" },
    { id: 35, label: "WordPress" },
    { id: 36, label: "Google Analytics" },
    // ... add other skills for this category
  ],
  writing: [
    { id: 37, label: "Blogging" },
    { id: 38, label: "Copywriting" },
    { id: 39, label: "Creative Writing" },
    // ... add other skills for this category
  ],
};
const SkillsTabSection = ({
  jobSkills,
  setJobSkills,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleSkillChange = (skillLabel) => {
    if (jobSkills.includes(skillLabel)) {
      setJobSkills(jobSkills.filter((label) => label !== skillLabel));
    } else {
      setJobSkills([...jobSkills, skillLabel]);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="kform-group mtop-20 skills-required">
      <h3 className="f-20 blue mtop-30 mbot-30">Skills Required</h3>
      <div className="d-flex align-items-start">
        {/* Skill Tabs */}
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`nav-link ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category.id)}
              type="button"
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skill Options */}
        <div className="tab-content" id="v-pills-tabContent">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`tab-pane fade ${
                selectedCategory === category.id ? "show active" : ""
              }`}
              id={category.id}
              role="tabpanel"
            >
              {skillOptions[category.id].map((skill) => (
                <div key={skill.id} className="job-skill-options">
                  <div className="checkbox-input">
                    <input
                      type="checkbox"
                      name="job_skills[]"
                      value={skill.label}
                      checked={jobSkills.includes(skill.label)}
                      onChange={() => handleSkillChange(skill.label)}
                    />
                    <label htmlFor={`job-skills-${skill.id}`}>
                      {skill.label}
                    </label>
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
