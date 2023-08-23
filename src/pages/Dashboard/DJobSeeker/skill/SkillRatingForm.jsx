import React, { useRef, useState } from "react";
import SkillRating from "./components/SkillRating";
import { Link, useNavigate } from "react-router-dom";
import Banner from "./components/banner";
import { Modal } from "bootstrap";
import { toast } from "react-toastify";
import { fetchData } from "../../../../api/api";

const SkillRatingForm = () => {
  const navigate = useNavigate();
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
      classifiedAdsMarketing: 0,
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

  const handleRatingChange = (category, skill, value) => {
    setSkills((prevSkills) => ({
      ...prevSkills,
      [category]: {
        ...prevSkills[category],
        [skill]: value,
      },
    }));
  };

  const backtodashboard = () => {
    navigate("/DJobSeeker");
  };

  const backtodashboard2 = async () => {
    const bootstrapModal = Modal.getInstance(modalRef.current);
    await bootstrapModal.hide();
    navigate("/DJobSeeker");
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log(skills); // This will log the skills to the console

    // Validate that all skills have a value
    let anySkillHasValue = false;
    for (let category in skills) {
      for (let skill in skills[category]) {
        if (skills[category][skill] !== 0) {
          anySkillHasValue = true;
          break;
        }
      }
      if (anySkillHasValue) break;
    }

    if (!anySkillHasValue) {
      toast.warning("Please rate at least one skill before submitting.");
      return;
    }

    // Make an HTTP POST request to the backend using fetchData
    try {
      const data = await fetchData(
        "JobSeekerRoutes/createSkill",
        "POST",
        skills
      ); // Replace with the actual endpoint

      if (data && data.success) {
        toast.success(data.message);
        showModal();
      } else {
        toast.error(data.message || "Error submitting skills.");
      }
    } catch (error) {
      console.error("There was an error submitting the skills:", error);
      toast.error("Error submitting skills.");
    }
  };

  const modalRef = useRef(null);
  const showModal = () => {
    const bootstrapModal = new Modal(modalRef.current);
    bootstrapModal.show();
  };

  return (
    <div>
      <Banner />
      <section class="content-section rate-your-skills ptop-90 white-bg">
        <div class="container k-container">
          <div class="row">
            <div class="col px-0 text-left">
              <h1 class="blue f-55">Rate your Skills</h1>
              <h2 class="red f-30 fn">What you do Best</h2>
            </div>
            <div class="col px-0 text-right">
              <div className="d-flex justify-content-end">
                <Link
                  href="#"
                  class="btn-default-light-gray text-center"
                  data-bs-toggle="modal"
                  data-bs-target="#skipStepModal"
                >
                  Skip this Step
                </Link>
              </div>
            </div>
          </div>

          <form id="skill-form" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_token"
              value="KzSTelnbxEMqbl4pw2NW5mfWAIlQFUT7UouBhwAi"
            />
            <div class="job-tabs">
              <div class="row">
                <div class="d-flex align-items-start job-skills-container">
                  <div
                    class="nav flex-column nav-pills me-3"
                    id="job-tabs-nav"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      class="f-20 fn blue k-tab-btn active"
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
                      class="f-20 fn blue k-tab-btn"
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
                      class="f-20 fn blue k-tab-btn"
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
                      class="f-20 fn blue k-tab-btn"
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
                      class="f-20 fn blue k-tab-btn"
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
                      class="f-20 fn blue k-tab-btn"
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
                      class="f-20 fn blue k-tab-btn"
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
                      class="f-20 fn blue k-tab-btn"
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
                      class="f-20 fn blue k-tab-btn"
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
                      class="f-20 fn blue k-tab-btn"
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
                      class="f-20 fn blue k-tab-btn"
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
                      class="f-20 fn blue k-tab-btn"
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
                      class="f-20 fn blue k-tab-btn"
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
                  <div class="tab-content" id="job-tabs-content">
                    <div
                      class="tab-pane fade active show"
                      id="tab-admin-office-virtual-assistant"
                      role="tabpanel"
                      aria-labelledby="tabadmin-office-virtual-assistant"
                    >
                      <h3 class="f-35 blue">
                        Admin &amp; Office (Virtual Assistant)
                      </h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>

                      <SkillRating
                        category="adminandoffice"
                        skillName="adminAssistant"
                        skillValue={skills.adminandoffice.adminAssistant}
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="adminandoffice"
                        skillName="dataEntry"
                        skillValue={skills.adminandoffice.dataEntry}
                        onRatingChange={handleRatingChange}
                      />

                      <SkillRating
                        category="adminandoffice"
                        skillName="emailManagement"
                        skillValue={skills.adminandoffice.emailManagement}
                        onRatingChange={handleRatingChange}
                      />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="tab-advertising"
                      role="tabpanel"
                      aria-labelledby="tabadvertising"
                    >
                      <h3 class="f-35 blue">Advertising</h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>

                      <SkillRating
                        category="advertising"
                        skillName="amazonProductAds"
                        skillValue={skills.advertising.amazonProductAds}
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="advertising"
                        skillName="bingAds"
                        skillValue={skills.advertising.bingAds}
                        onRatingChange={handleRatingChange}
                      />

                      <SkillRating
                        category="advertising"
                        skillName="facebookAds"
                        skillValue={skills.advertising.facebookAds}
                        onRatingChange={handleRatingChange}
                      />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="tab-customer-service-and-admin-support"
                      role="tabpanel"
                      aria-labelledby="tabcustomer-service-and-admin-support"
                    >
                      <h3 class="f-35 blue">
                        Customer Service and Admin Support
                      </h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>

                      <SkillRating
                        category="customerSupport"
                        skillName="communityForumModeration"
                        skillValue={
                          skills.customerSupport.communityForumModeration
                        }
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="customerSupport"
                        skillName="contentModeration"
                        skillValue={skills.customerSupport.contentModeration}
                        onRatingChange={handleRatingChange}
                      />

                      <SkillRating
                        category="customerSupport"
                        skillName="customerSupport"
                        skillValue={skills.customerSupport.customerSupport}
                        onRatingChange={handleRatingChange}
                      />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="tab-english-skills"
                      role="tabpanel"
                      aria-labelledby="tabenglish-skills"
                    >
                      <h3 class="f-35 blue">English Skills</h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>

                      <SkillRating
                        category="englishSkills"
                        skillName="speaking"
                        skillValue={skills.englishSkills.speaking}
                        onRatingChange={handleRatingChange}
                      />

                      <SkillRating
                        category="englishSkills"
                        skillName="translations"
                        skillValue={skills.englishSkills.translations}
                        onRatingChange={handleRatingChange}
                      />

                      <SkillRating
                        category="englishSkills"
                        skillName="tutoringTeaching"
                        skillValue={skills.englishSkills.tutoringTeaching}
                        onRatingChange={handleRatingChange}
                      />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="tab-finance-and-management-virtual-accountants"
                      role="tabpanel"
                      aria-labelledby="tabfinance-and-management-virtual-accountants"
                    >
                      <h3 class="f-35 blue">
                        Finance and Management (Virtual Accountants)
                      </h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>

                      <SkillRating
                        category="financeAndManagement"
                        skillName="accounting"
                        skillValue={skills.financeAndManagement.accounting}
                        onRatingChange={handleRatingChange}
                      />

                      <SkillRating
                        category="financeAndManagement"
                        skillName="bookkeeping"
                        skillValue={skills.financeAndManagement.bookkeeping}
                        onRatingChange={handleRatingChange}
                      />

                      <SkillRating
                        category="financeAndManagement"
                        skillName="businessPlans"
                        skillValue={skills.financeAndManagement.businessPlans}
                        onRatingChange={handleRatingChange}
                      />
                    </div>

                    <div
                      class="tab-pane fade"
                      id="tab-graphics-and-multimedia"
                      role="tabpanel"
                      aria-labelledby="tabgraphics-and-multimedia"
                    >
                      <h3 class="f-35 blue">Graphics and Multimedia</h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>

                      <SkillRating
                        category="graphicsAndMultimedia"
                        skillName="graphicsEditing"
                        skillValue={
                          skills.graphicsAndMultimedia.graphicsEditing
                        }
                        onRatingChange={handleRatingChange}
                      />

                      <SkillRating
                        category="graphicsAndMultimedia"
                        skillName="logoDesign"
                        skillValue={skills.graphicsAndMultimedia.logoDesign}
                        onRatingChange={handleRatingChange}
                      />

                      <SkillRating
                        category="graphicsAndMultimedia"
                        skillName="threeDModeling"
                        skillValue={skills.graphicsAndMultimedia.threeDModeling}
                        onRatingChange={handleRatingChange}
                      />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="tab-marketing-sales"
                      role="tabpanel"
                      aria-labelledby="tabmarketing-sales"
                    >
                      <h3 class="f-35 blue">Marketing and Sales</h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>

                      <SkillRating
                        category="marketingAndSales"
                        skillName="affiliateMarketing"
                        skillValue={skills.marketingAndSales.affiliateMarketing}
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="marketingAndSales"
                        skillName="classifiedAdsMarketing"
                        skillValue={
                          skills.marketingAndSales.classifiedAdsMarketing
                        }
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="marketingAndSales"
                        skillName="directMailMarketing"
                        skillValue={
                          skills.marketingAndSales.directMailMarketing
                        }
                        onRatingChange={handleRatingChange}
                      />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="tab-professional-services"
                      role="tabpanel"
                      aria-labelledby="tabprofessional-services"
                    >
                      <h3 class="f-35 blue">Professional Services</h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>

                      <SkillRating
                        category="professionalServices"
                        skillName="legalServices"
                        skillValue={skills.professionalServices.legalServices}
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="professionalServices"
                        skillName="medicalServices"
                        skillValue={skills.professionalServices.medicalServices}
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="professionalServices"
                        skillName="realEstateServices"
                        skillValue={
                          skills.professionalServices.realEstateServices
                        }
                        onRatingChange={handleRatingChange}
                      />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="tab-project-management"
                      role="tabpanel"
                      aria-labelledby="tabproject-management"
                    >
                      <h3 class="f-35 blue">Project Management</h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>
                      <SkillRating
                        category="projectManagement"
                        skillName="designProjectManagement"
                        skillValue={
                          skills.projectManagement.designProjectManagement
                        }
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="projectManagement"
                        skillName="marketingProjectManagement"
                        skillValue={
                          skills.projectManagement.marketingProjectManagement
                        }
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="projectManagement"
                        skillName="otherProjectManagement"
                        skillValue={
                          skills.projectManagement.otherProjectManagement
                        }
                        onRatingChange={handleRatingChange}
                      />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="tab-software-development-programming"
                      role="tabpanel"
                      aria-labelledby="tabsoftware-development-programming"
                    >
                      <h3 class="f-35 blue">
                        Software Development / Programming
                      </h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>

                      <SkillRating
                        category="softwareDevelopment"
                        skillName="androidDevelopment"
                        skillValue={
                          skills.softwareDevelopment.androidDevelopment
                        }
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="softwareDevelopment"
                        skillName="desktopApplications"
                        skillValue={
                          skills.softwareDevelopment.desktopApplications
                        }
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="softwareDevelopment"
                        skillName="gameDevelopment"
                        skillValue={skills.softwareDevelopment.gameDevelopment}
                        onRatingChange={handleRatingChange}
                      />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="tab-web-development"
                      role="tabpanel"
                      aria-labelledby="tabweb-development"
                    >
                      <h3 class="f-35 blue">Web Development</h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>
                      <SkillRating
                        category="webDevelopment"
                        skillName="laravel"
                        skillValue={skills.webDevelopment.laravel}
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="webDevelopment"
                        skillName="shopify"
                        skillValue={skills.webDevelopment.shopify}
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="webDevelopment"
                        skillName="wordpressDevelopment"
                        skillValue={skills.webDevelopment.wordpressDevelopment}
                        onRatingChange={handleRatingChange}
                      />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="tab-webmaster"
                      role="tabpanel"
                      aria-labelledby="tabwebmaster"
                    >
                      <h3 class="f-35 blue">Webmaster</h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>

                      <SkillRating
                        category="webmaster"
                        skillName="contentManagement"
                        skillValue={skills.webmaster.contentManagement}
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="webmaster"
                        skillName="googleAnalytics"
                        skillValue={skills.webmaster.googleAnalytics}
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="webmaster"
                        skillName="wordpressWebmaster"
                        skillValue={skills.webmaster.wordpressWebmaster}
                        onRatingChange={handleRatingChange}
                      />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="tab-writing"
                      role="tabpanel"
                      aria-labelledby="tabwriting"
                    >
                      <h3 class="f-35 blue">Writing</h3>
                      <h4 class="f-20 red fn mtop-30 mbot-40">
                        Self Assessed Skill Rating
                      </h4>

                      <SkillRating
                        category="writing"
                        skillName="blogging"
                        skillValue={skills.writing.blogging}
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="writing"
                        skillName="copywriting"
                        skillValue={skills.writing.copywriting}
                        onRatingChange={handleRatingChange}
                      />
                      <SkillRating
                        category="writing"
                        skillName="creativeWriting"
                        skillValue={skills.writing.creativeWriting}
                        onRatingChange={handleRatingChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mtop-75">
              <div class="col text-center">
                <input
                  type="submit"
                  value="I am done with Ratings"
                  id="esubmit"
                  class="btn-default-red fn"
                />
              </div>
              <div class="col text-center">
                <Link to="/" class="btn-default-blue">
                  Next
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
      <div
        ref={modalRef}
        class="modal fade"
        id="rateSkillModal"
        data-bs-keyboard="false"
        aria-labelledby="rateSkillModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content ptb-40">
            <div class="modal-body text-center">
              <img
                src="https://linkagekoworks.viewourdesign.info/imgs/congrats-img-modal.png"
                alt="Congratulations!"
                class="mbot-30"
              />
              <h1 class="f-35 b blue" id="rateSkillModalLabel">
                Congratulations!
              </h1>
              <p class="f-20 fn mbot-30">
                Your're on your Way of Having an Online Job!
              </p>
              <button
                onClick={backtodashboard2}
                class="btn-default-red mright-30"
              >
                View My Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="skipStepModal"
        data-bs-keyboard="false"
        aria-labelledby="skipStepModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content ptb-40">
            <div class="modal-body text-center">
              <span class="f-65 b bg-cirle-red red-bg">!</span>
              <h1 class="f-35 b blue" id="skipStepModalLabel">
                Incomplete Profile
              </h1>
              <p class="f-20 fn mbot-30">
                Complete your profile first for employers to see it in the
                Search Result.
              </p>
              <button
                type="button"
                id="completeP"
                class="btn-default-red mright-30"
                data-bs-dismiss="modal"
              >
                Complete My Profile
              </button>
              <button
                type="button"
                id="completeP"
                class="btn-default-blue"
                data-bs-dismiss="modal"
                onClick={backtodashboard}
              >
                Maybe Next Time
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillRatingForm;
