// SkillTabs.js
import React, { useState } from "react";

const skillsData = [
  {
    id: "admin-office-virtual-assistant",
    title: "Admin & Office (Virtual Assistant)",
    jobs: [
      { id: "1-1", title: "Admin Assistant" },
      { id: "2-1", title: "Data Entry" },
      { id: "3-1", title: "Email Management" },
    ],
  },
  {
    id: "advertising",
    title: "Advertising",
    jobs: [
      { id: "4-1", title: "Amazon Product Ads" },
      { id: "5-1", title: "Bing Ads" },
      { id: "6-1", title: "Facebook Ads" },
    ],
  },
  {
    id: "customer-service-and-admin-support",
    title: "Customer Service and Admin Support",
    jobs: [
      { id: "7-1", title: "Community Forum Moderation" },
      { id: "8-1", title: "Content Moderation" },
      { id: "9-1", title: "Customer Support" },
    ],
  },
  {
    id: "english-skills",
    title: "English Skills",
    jobs: [
      { id: "10-1", title: "Speaking" },
      { id: "11-1", title: "Translations" },
      { id: "12-1", title: "Tutoring Teaching" },
    ],
  },
  {
    id: "finance-and-management-virtual-accountants",
    title: "Finance and Management (Virtual Accountants)",
    jobs: [
      { id: "13-1", title: "Accounting" },
      { id: "14-1", title: "Bookkeeping" },
      { id: "15-1", title: "Business Plans" },
    ],
  },
  {
    id: "graphics-and-multimedia",
    title: "Graphics and Multimedia",
    jobs: [
      { id: "16-1", title: "3D Modeling" },
      { id: "17-1", title: "Graphics Editing" },
      { id: "18-1", title: "Logo Design" },
    ],
  },
  {
    id: "marketing-sales",
    title: "Marketing and Sales",
    jobs: [
      { id: "19-1", title: "Affiliate Marketing" },
      { id: "20-1", title: "Classified Ads Marketing" },
      { id: "21-1", title: "Direct Mail Marketing" },
    ],
  },
  {
    id: "professional-services",
    title: "Professional Services",
    jobs: [
      { id: "22-1", title: "Legal Services" },
      { id: "23-1", title: "Medical Services" },
      { id: "24-1", title: "Real Estate Services" },
    ],
  },
  {
    id: "project-management",
    title: "Project Management",
    jobs: [
      { id: "25-1", title: "Design Project Management" },
      { id: "26-1", title: "Marketing Project Management" },
      { id: "27-1", title: "Other Project Management" },
    ],
  },
  {
    id: "software-development-programming",
    title: "Software Development / Programming",
    jobs: [
      { id: "28-1", title: "Android Development" },
      { id: "29-1", title: "Desktop Applications" },
      { id: "30-1", title: "Game Development" },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    jobs: [
      { id: "31-1", title: "Wordpress Development" },
      { id: "32-1", title: "Shopify" },
      { id: "33-1", title: "Laravel" },
    ],
  },
  {
    id: "webmaster",
    title: "Webmaster",
    jobs: [
      { id: "34-1", title: "Content Management" },
      { id: "35-1", title: "WordPress" },
      { id: "36-1", title: "Google Analytics" },
    ],
  },
  {
    id: "writing",
    title: "Writing",
    jobs: [
      { id: "37-1", title: "Blogging" },
      { id: "38-1", title: "Copywriting" },
      { id: "39-1", title: "Creative Writing" },
    ],
  },
  // Add more skills and jobs as needed
];

const SkillTabs = ({ updateSkillRatings }) => {
  // State to hold ratings for each job
  const [ratings, setRatings] = useState({});

  // Function to handle rating change
  const handleRatingChange = (jobId, rating) => {
    setRatings((prevRatings) => {
      const newRatings = { ...prevRatings, [jobId]: rating };

      // Prepare data for SkillList
      const skillRatingsForList = Object.keys(newRatings).map((id) => {
        const job = skillsData
          .flatMap((skill) => skill.jobs)
          .find((job) => job.id === id);
        return { name: job.title, rating: newRatings[id] };
      });

      // Update parent component's state with the transformed data
      setTimeout(() => updateSkillRatings(skillRatingsForList), 0);

      return newRatings;
    });
  };

  return (
    <div className="d-flex align-items-start">
      <div
        className="nav flex-column nav-pills me-3"
        role="tablist"
        aria-orientation="vertical"
      >
        {skillsData.map((skill, index) => (
          <button
            key={skill.id}
            className={`nav-link ${index === 0 ? "active" : ""}`}
            id={`btn-${skill.id}`}
            data-bs-toggle="pill"
            data-bs-target={`#tab-${skill.id}`}
            type="button"
            role="tab"
            aria-controls={`tab-${skill.id}`}
            aria-selected={index === 0 ? "true" : "false"}
          >
            {skill.title}
          </button>
        ))}
      </div>
      <div className="tab-content as-tab-content">
        {skillsData.map((skill, index) => (
          <div
            key={skill.id}
            className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
            id={`tab-${skill.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${skill.id}`}
          >
            {skill.jobs.map((job) => (
              <div key={job.id} className="rating-container">
                <div className="job-position">
                  <span className="f-16 fn blue">{job.title}</span>
                </div>
                <div className="job-rating">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <label
                      key={value}
                      className={`star-label ${
                        ratings[job.id] >= value ? "checked" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={`rating-${job.id}`}
                        value={value}
                        checked={ratings[job.id] === value}
                        onChange={() => handleRatingChange(job.id, value)}
                        style={{ display: "none" }}
                      />
                      {[...Array(value)].map((_, index) => (
                        <span key={index} className="fa fa-star"></span>
                      ))}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTabs;
