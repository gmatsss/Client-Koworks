import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../../../../api/api";
import { useLocation } from "react-router-dom";
import TestScores from "./TestScores";
import EmployeeProfileForm from "./EmployeeProfileForm";
import useOnce from "../../../../api/useOnce";
import { DotPulse } from "@uiball/loaders";

// Main Component
function UpdateEmployeeProfile() {
  const [isLoading, setIsLoading] = useState(false);

  // Use the useLocation hook to get the location object
  const location = useLocation();
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

  const [testScoresData, setTestScoresData] = useState({});

  const handleTestScoresChange = (data) => {
    setTestScoresData(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract the image parameter from the query string
    const searchParams = new URLSearchParams(location.search);
    const imageParam = searchParams.get("image");

    const ProfileData = {
      job_title: jobTitle,
      summary: summary,
      video_embed_code: videoEmbedCode,
      video_type: videoType,
      salary: salary,
      hourly_rate: hourlyRate,
      education: education,
      experience: experience,
      employment_status: employmentStatus,
      working_hours_from: workingHoursFrom,
      working_hours_to: workingHoursTo,
      contact: contact,
      website: website,
      gender: gender,
      bday: bday,
    };

    const TestData = testScoresData;

    try {
      const profileResponse = await fetchData(
        "JobSeekerRoutes/Updateprofile",
        "POST",
        ProfileData
      );

      if (profileResponse.message) {
        toast.success(profileResponse.message);

        const hasDataInDisc =
          TestData.disc.dominance_score ||
          TestData.disc.influence_score ||
          TestData.disc.steadiness_score ||
          TestData.disc.compliance_score ||
          (TestData.disc.disc_img &&
            typeof TestData.disc.disc_img === "object" &&
            TestData.disc.disc_img.name);

        const hasDataInIQ =
          TestData.iq.iq_score ||
          (TestData.iq.iq_img &&
            typeof TestData.iq.iq_img === "object" &&
            TestData.iq.iq_img.name);

        const hasDataInEnglish =
          TestData.english.english_score ||
          (TestData.english.english_img &&
            typeof TestData.english.english_img === "object" &&
            TestData.english.english_img.name);

        if (hasDataInDisc || hasDataInIQ || hasDataInEnglish) {
          // Make the request for TestData
          const testScoresResponse = await fetchData(
            "JobSeekerRoutes/updateTestScores",
            "POST",
            TestData
          );

          if (testScoresResponse.message) {
            toast.success(testScoresResponse.message);
          } else {
            toast.error(
              testScoresResponse.error || "Unknown error updating test scores"
            );
          }
        }
      } else {
        toast.error(profileResponse.error || "Unknown error updating profile");
      }
    } catch (error) {
      toast.error("There was an error sending the request.");
      console.error("There was an error sending the request:", error);
    }
  };

  const fetchEmployeeProfile = async () => {
    setIsLoading(true); // Set loading to true before fetching
    try {
      const profileResponse = await fetchData("JobSeekerRoutes/profile");

      if (profileResponse.data) {
        const {
          job_title = "",
          summary = "",
          video_embed_code = "",
          video_type = "",
          salary,
          hourly_rate,
          education = "",
          experience = "",
          employment_status = "",
          working_hours_from = "",
          working_hours_to = "",
          contact = "",
          website = "",
          gender = "",
          bday,
        } = profileResponse.data;

        setJobTitle(job_title);
        setSummary(summary);
        setVideoEmbedCode(video_embed_code);
        setVideoType(video_type);
        setSalary(salary ? salary.toString() : "");
        setHourlyRate(hourly_rate ? hourly_rate.toString() : "");
        setEducation(education);
        setExperience(experience);
        setEmploymentStatus(employment_status);
        setWorkingHoursFrom(working_hours_from);
        setWorkingHoursTo(working_hours_to);
        setContact(contact);
        setWebsite(website);
        setGender(gender);
        setBday(bday ? new Date(bday).toISOString().split("T")[0] : "");
      }
    } catch (error) {
      toast.error("There was an error fetching the data.");
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching or if there's an error
    }
  };
  useOnce(fetchEmployeeProfile);

  return (
    <div className="">
      {isLoading ? (
        <div className="spinner-container">
          <DotPulse size={40} speed={1.3} color="black" />
        </div>
      ) : (
        <section className="content-section create-profile ptop-90 white-bg">
          <div className="container k-container">
            <div className="row">
              <div className="col">
                <div className="kform-container">
                  <form
                    enctype="multipart/form-data"
                    method="POST"
                    className="kform kform-wider"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="_token" />

                    <EmployeeProfileForm
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
                    />

                    <TestScores onTestScoresChange={handleTestScoresChange} />
                    <div className="kform-group mtop-30">
                      <p>
                        Haven’t you taken these exams?
                        <a href="/*" className="b f-18">
                          Learn how to take it.
                        </a>
                      </p>
                    </div>
                    <div className="kform-group kform-btn text-center">
                      <input
                        type="submit"
                        value="Done"
                        id="crsubmit"
                        className="btn-default-red fn"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default UpdateEmployeeProfile;
