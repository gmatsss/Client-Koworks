import React, { useState } from "react";
import JobInformationForm from "./components/JobInformationForm";
import OtherInformationForm from "./components/OtherInformationForm";
import SkillsTabSection from "./components/SkillsTabSection";
import { fetchData } from "../../../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Postnewjob = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [salaryType, setSalaryType] = useState("range");
  const [salaryLow, setSalaryLow] = useState("");
  const [salaryHigh, setSalaryHigh] = useState("");
  const [salaryExact, setSalaryExact] = useState("");
  const [idProof, setIdProof] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [experience, setExperience] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [jobSkills, setJobSkills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // Default to the first category title

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jobData = {
      jobTitle,
      jobDescription,
      salaryType,
      salaryLow,
      salaryHigh,
      salaryExact,
      idProof,
      employmentType,
      experience,
      workingHours,
      jobSkills,
      selectedCategory,
    };

    try {
      const response = await fetchData(
        "EmployerRoutes/createPostJob",
        "POST",
        jobData
      );
      if (response.success) {
        console.log("Job posted successfully:", response.data);
        toast.success("Job posted successfully!");
        navigate(0); // Reload the current page
      } else {
        console.error("Failed to post job:", response.message);
        toast.error("Failed to post job: " + response.message);
      }
    } catch (error) {
      console.error("Error in posting job:", error);
      toast.error("Error in posting job: " + error.message);
    }
  };
  return (
    <div className="div col px-0">
      <div className="post-a-job-content mbot-40">
        <p className="fn f-16 dark-gray">
          Job Seekers apply through Linkage.ph. No contact info allowed. Jobs
          will be approved within 2 days. With a free account you will be able
          to see applications to your job. You can gauge very well if you’ll be
          able to find someone suitable. It’s sort-of like a free trial. You
          will NOT be able to see contact information in those job applications.
          Upgrade to see contact information.
        </p>
        <a href="#" className="btn-default-red mtop-30">
          Upgrade for Instant Job Post Approval
        </a>
      </div>

      <div className="kform-container">
        <form
          onSubmit={handleSubmit}
          className="kform kform-wider"
          id="post-a-job"
        >
          <JobInformationForm
            jobTitle={jobTitle}
            setJobTitle={setJobTitle}
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            salaryType={salaryType}
            setSalaryType={setSalaryType}
            salaryLow={salaryLow}
            setSalaryLow={setSalaryLow}
            salaryHigh={salaryHigh}
            setSalaryHigh={setSalaryHigh}
            salaryExact={salaryExact}
            setSalaryExact={setSalaryExact}
          />

          <OtherInformationForm
            idProof={idProof}
            setIdProof={setIdProof}
            employmentType={employmentType}
            setEmploymentType={setEmploymentType}
            experience={experience}
            setExperience={setExperience}
            workingHours={workingHours}
            setWorkingHours={setWorkingHours}
          />

          <SkillsTabSection
            jobSkills={jobSkills}
            setJobSkills={setJobSkills}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className="kform-group kform-btn">
            <input
              type="submit"
              value="Submit for Review"
              id="esubmit"
              className="btn-default-red fn btn-wide"
            />
          </div>
          <span className="d-block mtop-30 mbot-30 b">OR</span>
          <div className="kform-group kform-btn mt-0">
            <a href="#" className="btn-default-blue fn btn-wide mbot-40">
              Submit and Upgrade (For Immediate Posting)
            </a>
            <p>
              Approvals typically take 2 working days. If you upgrade your
              account, your job post will be approved instantly!
            </p>
            <p>
              Note: The job post will stay up for as long as you have an active
              account or until you delete the job posting in your account page.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Postnewjob;
