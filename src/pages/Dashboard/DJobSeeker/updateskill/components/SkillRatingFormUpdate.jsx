import React, { useState } from "react";
import SkillRatingUpdate from "./SkillRatingUpdate";
import { toast } from "react-toastify";
import { fetchData } from "../../../../../api/api";
import useOnce from "../../../../../api/useOnce";
import { DotPulse } from "@uiball/loaders";

const SkillRatingFormUpdate = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [skills, setSkills] = useState({
    adminandoffice: {
      adminAssistant: 0,
      dataEntry: 0,
      emailManagement: 0,
    },

    englishSkills: {
      speaking: 0,
      translations: 0,
      tutoringTeaching: 0,
    },
    financeAndManagement: {
      accounting: 0,
      bookkeeping: 0,
      businessPlans: 0,
    },

    advertising: {
      amazonProductAds: 0,
      bingAds: 0,
      facebookAds: 0,
    },
    customerSupport: {
      communityForumModeration: 0,
      contentModeration: 0,
      customerSupport: 0,
    },

    softwareDevelopment: {
      androidDevelopment: 0,
      desktopApplications: 0,
      gameDevelopment: 0,
    },
    webDevelopment: {
      wordpressDevelopment: 0,
      shopify: 0,
      laravel: 0,
    },
    webmaster: {
      contentManagement: 0,
      wordpressWebmaster: 0,
      googleAnalytics: 0,
    },
    writing: {
      blogging: 0,
      copywriting: 0,
      creativeWriting: 0,
    },
    graphicsAndMultimedia: {
      threeDModeling: 0,
      graphicsEditing: 0,
      logoDesign: 0,
    },
    marketingAndSales: {
      affiliateMarketing: 0,
      classNameifiedAdsMarketing: 0,
      directMailMarketing: 0,
    },
    professionalServices: {
      legalServices: 0,
      medicalServices: 0,
      realEstateServices: 0,
    },
    projectManagement: {
      designProjectManagement: 0,
      marketingProjectManagement: 0,
      otherProjectManagement: 0,
    },
  });

  const fetchSkills = async () => {
    try {
      const response = await fetchData("JobSeekerRoutes/getSkill", "GET");
      if (response && response.data) {
        setSkills(response.data);
      }
    } catch (error) {
      console.log(error);
      console.error("Error fetching skills:", error);
    } finally {
      setIsLoading(false); // Set loading to false in the finally block to ensure it's always executed
    }
  };

  useOnce(fetchSkills);

  const handleRatingChange = (category, skillName, value) => {
    setSkills((prevSkills) => {
      const updatedSkills = { ...prevSkills };

      // If the category is an array (fetched data structure)
      if (Array.isArray(updatedSkills[category])) {
        const skillIndex = updatedSkills[category].findIndex(
          (skill) => skill.name === skillName
        );

        if (skillIndex !== -1) {
          updatedSkills[category][skillIndex].rating = value;
        }
      } else {
        // Handle the initial state structure
        updatedSkills[category][skillName] = value;
      }

      return updatedSkills;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Serialize the skills state if needed. This step depends on the expected request format.
      const serializedSkills = { ...skills }; // Modify this if the server expects a different format.

      // Call the fetchData function to update the skills.
      const response = await fetchData(
        "JobSeekerRoutes/updateSkill",
        "POST",
        serializedSkills
      );

      // Handle the response.
      if (response && response.message) {
        toast.success(response.message);
        // You can also update the UI here, e.g., show a success message.
      } else {
        console.error("Error updating skills:", response.error);
        // Handle the error in the UI, e.g., show an error message.
      }
    } catch (error) {
      console.error("Error updating skills:", error);
      // Handle the error in the UI, e.g., show an error message.
    }
  };

  return (
    <form id="skill-form" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="_token"
        value="KzSTelnbxEMqbl4pw2NW5mfWAIlQFUT7UouBhwAi"
      />
      <div className="job-tabs">
        <div className="row">
          <div className="d-flex align-items-start job-skills-container">
            <div
              className="nav flex-column nav-pills me-3"
              id="job-tabs-nav"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="f-20 fn blue k-tab-btn active"
                id="btn-1"
                data-bs-toggle="pill"
                data-bs-target="#tab-admin-office-virtual-assistant"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Admin &amp; Office (Virtual Assistant)
              </button>
              <button
                className="f-20 fn blue k-tab-btn"
                id="btn-2"
                data-bs-toggle="pill"
                data-bs-target="#tab-advertising"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Advertising
              </button>
              <button
                className="f-20 fn blue k-tab-btn"
                id="btn-3"
                data-bs-toggle="pill"
                data-bs-target="#tab-customer-service-and-admin-support"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Customer Service and Admin Support
              </button>
              <button
                className="f-20 fn blue k-tab-btn"
                id="btn-4"
                data-bs-toggle="pill"
                data-bs-target="#tab-english-skills"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                English Skills
              </button>
              <button
                className="f-20 fn blue k-tab-btn"
                id="btn-5"
                data-bs-toggle="pill"
                data-bs-target="#tab-finance-and-management-virtual-accountants"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Finance and Management (Virtual Accountants)
              </button>
              <button
                className="f-20 fn blue k-tab-btn"
                id="btn-6"
                data-bs-toggle="pill"
                data-bs-target="#tab-graphics-and-multimedia"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Graphics and Multimedia
              </button>
              <button
                className="f-20 fn blue k-tab-btn"
                id="btn-7"
                data-bs-toggle="pill"
                data-bs-target="#tab-marketing-sales"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Marketing and Sales
              </button>
              <button
                className="f-20 fn blue k-tab-btn"
                id="btn-8"
                data-bs-toggle="pill"
                data-bs-target="#tab-professional-services"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Professional Services
              </button>
              <button
                className="f-20 fn blue k-tab-btn"
                id="btn-9"
                data-bs-toggle="pill"
                data-bs-target="#tab-project-management"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Project Management
              </button>
              <button
                className="f-20 fn blue k-tab-btn"
                id="btn-10"
                data-bs-toggle="pill"
                data-bs-target="#tab-software-development-programming"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Software Development / Programming
              </button>
              <button
                className="f-20 fn blue k-tab-btn"
                id="btn-11"
                data-bs-toggle="pill"
                data-bs-target="#tab-web-development"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Web Development
              </button>
              <button
                className="f-20 fn blue k-tab-btn"
                id="btn-12"
                data-bs-toggle="pill"
                data-bs-target="#tab-webmaster"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Webmaster
              </button>
              <button
                className="f-20 fn blue k-tab-btn"
                id="btn-13"
                data-bs-toggle="pill"
                data-bs-target="#tab-writing"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Writing
              </button>
            </div>
            <div className="tab-content ms-4" id="job-tabs-content">
              <div
                className="tab-pane fade active show"
                id="tab-admin-office-virtual-assistant"
                role="tabpanel"
                aria-labelledby="tabadmin-office-virtual-assistant"
              >
                <h3 className="f-35 blue">
                  Admin &amp; Office (Virtual Assistant)
                </h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>

                {isLoading ? (
                  <div className="d-flex justify-content-center">
                    <DotPulse size={40} speed={1.3} color="black" />
                  </div>
                ) : (
                  Array.isArray(skills.adminandoffice) &&
                  skills.adminandoffice.map((skill) => {
                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="adminandoffice"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })
                )}
              </div>
              <div
                className="tab-pane fade"
                id="tab-advertising"
                role="tabpanel"
                aria-labelledby="tabadvertising"
              >
                <h3 className="f-35 blue">Advertising</h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>

                {Array.isArray(skills.advertising) &&
                  skills.advertising.map((skill) => {
                    // Convert camelCase to readable format

                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="advertising"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })}
              </div>
              <div
                className="tab-pane fade"
                id="tab-customer-service-and-admin-support"
                role="tabpanel"
                aria-labelledby="tabcustomer-service-and-admin-support"
              >
                <h3 className="f-35 blue">
                  Customer Service and Admin Support
                </h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>

                {Array.isArray(skills.customerSupport) &&
                  skills.customerSupport.map((skill) => {
                    // Convert camelCase to readable format

                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="customerSupport"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })}
              </div>
              <div
                className="tab-pane fade"
                id="tab-english-skills"
                role="tabpanel"
                aria-labelledby="tabenglish-skills"
              >
                <h3 className="f-35 blue">English Skills</h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>
                {Array.isArray(skills.englishSkills) &&
                  skills.englishSkills.map((skill) => {
                    // Convert camelCase to readable format

                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="englishSkills"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })}
              </div>
              <div
                className="tab-pane fade"
                id="tab-finance-and-management-virtual-accountants"
                role="tabpanel"
                aria-labelledby="tabfinance-and-management-virtual-accountants"
              >
                <h3 className="f-35 blue">
                  Finance and Management (Virtual Accountants)
                </h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>

                {Array.isArray(skills.financeAndManagement) &&
                  skills.financeAndManagement.map((skill) => {
                    // Convert camelCase to readable format

                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="financeAndManagement"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })}
              </div>

              <div
                className="tab-pane fade"
                id="tab-graphics-and-multimedia"
                role="tabpanel"
                aria-labelledby="tabgraphics-and-multimedia"
              >
                <h3 className="f-35 blue">Graphics and Multimedia</h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>
                {Array.isArray(skills.graphicsAndMultimedia) &&
                  skills.graphicsAndMultimedia.map((skill) => {
                    // Convert camelCase to readable format

                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="graphicsAndMultimedia"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })}
              </div>
              <div
                className="tab-pane fade"
                id="tab-marketing-sales"
                role="tabpanel"
                aria-labelledby="tabmarketing-sales"
              >
                <h3 className="f-35 blue">Marketing and Sales</h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>

                {Array.isArray(skills.marketingAndSales) &&
                  skills.marketingAndSales.map((skill) => {
                    // Convert camelCase to readable format

                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="marketingAndSales"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })}
              </div>
              <div
                className="tab-pane fade"
                id="tab-professional-services"
                role="tabpanel"
                aria-labelledby="tabprofessional-services"
              >
                <h3 className="f-35 blue">Professional Services</h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>
                {Array.isArray(skills.professionalServices) &&
                  skills.professionalServices.map((skill) => {
                    // Convert camelCase to readable format

                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="professionalServices"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })}
              </div>
              <div
                className="tab-pane fade"
                id="tab-project-management"
                role="tabpanel"
                aria-labelledby="tabproject-management"
              >
                <h3 className="f-35 blue">Project Management</h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>
                {Array.isArray(skills.projectManagement) &&
                  skills.projectManagement.map((skill) => {
                    // Convert camelCase to readable format

                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="projectManagement"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })}
              </div>
              <div
                className="tab-pane fade"
                id="tab-software-development-programming"
                role="tabpanel"
                aria-labelledby="tabsoftware-development-programming"
              >
                <h3 className="f-35 blue">
                  Software Development / Programming
                </h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>

                {Array.isArray(skills.softwareDevelopment) &&
                  skills.softwareDevelopment.map((skill) => {
                    // Convert camelCase to readable format

                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="softwareDevelopment"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })}
              </div>
              <div
                className="tab-pane fade"
                id="tab-web-development"
                role="tabpanel"
                aria-labelledby="tabweb-development"
              >
                <h3 className="f-35 blue">Web Development</h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>
                {Array.isArray(skills.webDevelopment) &&
                  skills.webDevelopment.map((skill) => {
                    // Convert camelCase to readable format

                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="webDevelopment"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })}
              </div>
              <div
                className="tab-pane fade"
                id="tab-webmaster"
                role="tabpanel"
                aria-labelledby="tabwebmaster"
              >
                <h3 className="f-35 blue">Webmaster</h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>

                {Array.isArray(skills.webmaster) &&
                  skills.webmaster.map((skill) => {
                    // Convert camelCase to readable format

                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="webmaster"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })}
              </div>
              <div
                className="tab-pane fade"
                id="tab-writing"
                role="tabpanel"
                aria-labelledby="tabwriting"
              >
                <h3 className="f-35 blue">Writing</h3>
                <h4 className="f-20 red fn mtop-30 mbot-40">
                  Self Assessed Skill Rating
                </h4>

                {Array.isArray(skills.writing) &&
                  skills.writing.map((skill) => {
                    // Convert camelCase to readable format

                    return (
                      <SkillRatingUpdate
                        key={skill.name}
                        category="writing"
                        skillName={skill.name}
                        skillValue={skill.rating}
                        onRatingChange={handleRatingChange}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mtop-75">
        <div className="col text-center">
          <input
            type="submit"
            value="Submit"
            id="esubmit"
            className="btn-default-red fn"
          />
        </div>
      </div>
    </form>
  );
};

export default SkillRatingFormUpdate;
