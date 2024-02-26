import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../../../../api/api";
import { useNavigate } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import { UserContext } from "../../../../context/UserContext";

// Main Component
function EmployeeProfileComponent() {
  const { fetchUser } = useContext(UserContext);
  const navigate = useNavigate();
  // State variables for form fields
  const [jobTitle, setJobTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [videoEmbedCode, setVideoEmbedCode] = useState("");
  const [videoType, setVideoType] = useState("");
  const [salary, setSalary] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [workingHoursFrom, setWorkingHoursFrom] = useState("");
  const [workingHoursTo, setWorkingHoursTo] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");
  const [gender, setGender] = useState("");
  const [bday, setBday] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      job_title: jobTitle,
      summary,
      video_embed_code: videoEmbedCode,
      videoType,
      salary,
      hourly_rate: hourlyRate,
      education,
      experience,
      employment_status: employmentStatus,
      working_hours_from: workingHoursFrom,
      working_hours_to: workingHoursTo,
      contact,
      website,
      gender,
      bday,
    };

    for (let key in formData) {
      if (!formData[key]) {
        toast.warning(`Please fill in the ${key.replace(/_/g, " ")} field.`);
        return; // Exit the function early if a field is missing
      }
    }

    // Request geolocation
    try {
      const response = await fetchData(
        "JobSeekerRoutes/Createprofile",
        "POST",
        formData
      );
      if (response.message) {
        if (response.data) {
          toast.success(response.message);
          fetchUser();
          navigate("/SkillRatingForm");
        }
      } else {
        toast.error(response.error || "Unknown error");
      }
    } catch (error) {
      toast.error("There was an error sending the request.");
      console.error("There was an error sending the request:", error);
    }
  };

  const backtodashboard = () => {
    navigate("/DJobSeeker");
  };

  return (
    <div className="logged-in create-profile">
      <section class="steps-section blue-bg-before">
        <div class="container k-container">
          <div class="row a-st2">
            <div class="col px-0 text-center steps step-1 red-bg">
              <span class="step-title">Register for An Account</span>
            </div>
            <div class="col px-0 text-center steps step-2 blue-bg active">
              <span class="step-title">Create Profile</span>
            </div>
            <div class="col px-0 text-center steps step-3 light-dark-blue-bg">
              <span class="step-title">Rate your Skills</span>
            </div>
            <div class="col px-0 text-center steps step-4 dark-blue-bg">
              <span class="step-title">View Available Job</span>
            </div>
          </div>
        </div>
      </section>
      <section class="content-section create-profile ptop-90 white-bg">
        <div class="container k-container">
          <div class="row">
            <div class="col px-0 text-left">
              <h1 class="blue f-55" style={{ width: "110%" }}>
                Complete Your Profile
              </h1>
              <h2 class="red f-30 fn">Tell Us More About Yourself</h2>
            </div>
            <div class="col px-0 d-flex justify-content-end">
              <div>
                <button
                  href="#"
                  class="btn-default-light-gray text-center"
                  data-bs-toggle="modal"
                  data-bs-target="#skipStepModal"
                >
                  Skip this Step
                </button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <ProfileForm
                jobTitle={jobTitle}
                setJobTitle={setJobTitle}
                summary={summary}
                setSummary={setSummary}
                videoEmbedCode={videoEmbedCode}
                setVideoEmbedCode={setVideoEmbedCode}
                videoType={videoType}
                setVideoType={setVideoType}
                salary={salary}
                setSalary={setSalary}
                hourlyRate={hourlyRate}
                setHourlyRate={setHourlyRate}
                education={education}
                setEducation={setEducation}
                experience={experience}
                setExperience={setExperience}
                employmentStatus={employmentStatus}
                setEmploymentStatus={setEmploymentStatus}
                workingHoursFrom={workingHoursFrom}
                setWorkingHoursFrom={setWorkingHoursFrom}
                workingHoursTo={workingHoursTo}
                setWorkingHoursTo={setWorkingHoursTo}
                bday={bday}
                setBday={setBday}
                contact={contact}
                setContact={setContact}
                website={website}
                setWebsite={setWebsite}
                gender={gender}
                setGender={setGender}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </section>

      <div
        class="modal fade"
        id="skipStepModal"
        data-bs-keyboard="false"
        tabindex="-1"
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
}

export default EmployeeProfileComponent;
