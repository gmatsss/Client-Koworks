import { useEffect, useState } from "react";
import JobDetailsForm from "./components/JobDetailsForm";
import SalaryForm from "./components/SalaryForm";
import OtherInformationForm from "./components/OtherInformationForm ";
import SkillsTabSection from "./components/SkillsTabSection";
import { fetchData } from "../../../api/api";
import { toast } from "react-toastify";

const EditModal = ({ job, onClose, onRefresh }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [salaryType, setSalaryType] = useState("range"); // Default to 'range'
  const [salaryLow, setSalaryLow] = useState("");
  const [salaryHigh, setSalaryHigh] = useState("");
  const [salaryExact, setSalaryExact] = useState("");
  const [animationClass, setAnimationClass] = useState("modal-fade-enter");
  const [idProof, setIdProof] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [experience, setExperience] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [jobSkills, setJobSkills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (job) {
      setJobTitle(job.jobTitle);
      setJobDescription(job.jobDescription);
      setSalaryType(job.salaryType);
      setSalaryLow(job.salaryLow ? job.salaryLow.toString() : "");
      setSalaryHigh(job.salaryHigh ? job.salaryHigh.toString() : "");
      setSalaryExact(job.salaryExact ? job.salaryExact.toString() : "");
      setIdProof(job.idProof);
      setEmploymentType(job.employmentType);
      setExperience(job.experience);
      setWorkingHours(job.workingHours);
      setJobSkills(job.jobSkills);
      setSelectedCategory(job.selectedCategory);
      // Set other job details if needed
    }
    // Start the enter animation
    setAnimationClass("modal-fade-enter-active");
  }, [job]);

  const handleClose = () => {
    // Start the exit animation
    setAnimationClass("modal-fade-exit-active");
    // Wait for animation to finish before closing
    setTimeout(() => {
      onClose();
    }, 300); // Duration should match the CSS transition
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Conditional logic for salary fields
    let updatedSalaryLow = salaryLow;
    let updatedSalaryHigh = salaryHigh;
    let updatedSalaryExact = salaryExact;

    if (salaryType === "exact") {
      updatedSalaryLow = "";
      updatedSalaryHigh = "";
    } else if (salaryType === "range") {
      updatedSalaryExact = "";
    }

    const updatedJobData = {
      _id: job?._id,
      jobTitle,
      jobDescription,
      salaryType,
      salaryLow: updatedSalaryLow,
      salaryHigh: updatedSalaryHigh,
      salaryExact: updatedSalaryExact,
      idProof,
      employmentType,
      experience,
      workingHours,
      jobSkills,
      selectedCategory,
    };

    try {
      // Replace 'updateJobEndpoint' with the actual endpoint for updating the job
      const updateJobEndpoint = "EmployerRoutes/updatePostJob";
      const response = await fetchData(
        updateJobEndpoint,
        "POST",
        updatedJobData
      );

      // Handle the response
      if (response.success) {
        toast.success(response.message);
        onRefresh(); // Call the refresh function after successful update
        setTimeout(() => {
          onClose();
        }, 300);
        // Perform any additional actions on success (e.g., close modal, show success message)
      } else {
        console.error("Failed to update job:", response.message);
        // Handle failure (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error in updating job:", error);
      // Handle error (e.g., show an error message)
    }
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <>
      <div
        className={`modal ${animationClass}`}
        style={{ display: "block" }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg">
          <div class="modal-content ptb-40">
            <div class="modal-body text-center ">
              <div className="d-flex justify-content-between">
                <h1 class="f-20 b blue" id="updateJobLabel">
                  Update Job Details
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>

              <div class="kform-container">
                <form
                  onSubmit={handleSubmit} // Ensure this is correctly set
                  class="kform kform-wider"
                  id="update_job"
                >
                  <JobDetailsForm
                    jobTitle={jobTitle}
                    setJobTitle={setJobTitle}
                    jobDescription={jobDescription}
                    setJobDescription={setJobDescription}
                  />

                  <SalaryForm
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
                    onCategoryChange={handleCategoryChange} // Pass the function to SkillsTabSection
                  />

                  <input
                    type="submit"
                    value="Save Changes"
                    id="esubmit"
                    class="btn-default-red fn mtop-30"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
