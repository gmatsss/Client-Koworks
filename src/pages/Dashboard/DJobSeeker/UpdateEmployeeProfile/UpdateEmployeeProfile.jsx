import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../../../../api/api";
import { useLocation } from "react-router-dom";
import TestScores from "./TestScores";
import EmployeeProfileForm from "./EmployeeProfileForm";
import useOnce from "../../../../api/useOnce";
import { DotPulse } from "@uiball/loaders";
import { UserContext } from "../../../../context/UserContext";

// Main Component
function UpdateEmployeeProfile() {
  const { currentUser, fetchUser } = useContext(UserContext);

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

    try {
      const profileResponse = await fetchData(
        "JobSeekerRoutes/Updateprofile",
        "POST",
        ProfileData
      );

      if (profileResponse.message) {
        const formData = new FormData();

        // Append test scores data to formData conditionally
        if (testScoresData.disc.dominance_score) {
          formData.append(
            "disc.dominance_score",
            testScoresData.disc.dominance_score
          );
        }
        if (testScoresData.disc.influence_score) {
          formData.append(
            "disc.influence_score",
            testScoresData.disc.influence_score
          );
        }
        if (testScoresData.disc.steadiness_score) {
          formData.append(
            "disc.steadiness_score",
            testScoresData.disc.steadiness_score
          );
        }
        if (testScoresData.disc.compliance_score) {
          formData.append(
            "disc.compliance_score",
            testScoresData.disc.compliance_score
          );
        }
        if (
          testScoresData.disc.disc_img &&
          typeof testScoresData.disc.disc_img === "object" &&
          testScoresData.disc.disc_img.name
        ) {
          formData.append(
            "disc.disc_img",
            testScoresData.disc.disc_img,
            testScoresData.disc.disc_img.name
          );
        }
        if (testScoresData.iq.iq_score) {
          formData.append("iq.iq_score", testScoresData.iq.iq_score);
        }
        if (
          testScoresData.iq.iq_img &&
          typeof testScoresData.iq.iq_img === "object" &&
          testScoresData.iq.iq_img.name
        ) {
          formData.append(
            "iq.iq_img",
            testScoresData.iq.iq_img,
            testScoresData.iq.iq_img.name
          );
        }
        if (testScoresData.english.english_score) {
          formData.append(
            "english.english_score",
            testScoresData.english.english_score
          );
        }
        if (
          testScoresData.english.english_img &&
          typeof testScoresData.english.english_img === "object" &&
          testScoresData.english.english_img.name
        ) {
          formData.append(
            "english.english_img",
            testScoresData.english.english_img,
            testScoresData.english.english_img.name
          );
        }

        for (let pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }

        console.log(formData.get("english.english_img").name);
        console.log(formData.get("english.english_img").size);
        console.log(formData.get("english.english_img").type);

        if (formData) {
          // Make the request for TestData
          const testScoresResponse = await fetchData(
            "JobSeekerRoutes/updateTestScores",
            "POST",
            formData,
            true
          );

          if (testScoresResponse.message) {
            toast.success("Update successful!");
            fetchUser();
          } else {
            toast.error(
              testScoresResponse.error || "Unknown error updating test scores"
            );
          }
        } else {
          toast.success("Profile updated successfully!");
        }
      } else {
        toast.error(profileResponse.error || "Unknown error updating profile");
      }
    } catch (error) {
      toast.error("There was an error sending the request.");
      console.error("There was an error sending the request:", error);
    }
  };

  const employeeProfileData = currentUser?.employeeProfile;

  useEffect(() => {
    try {
      if (employeeProfileData) {
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
        } = employeeProfileData;

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
    }
  }, [employeeProfileData]);

  return (
    <div className="">
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
    </div>
  );
}

export default UpdateEmployeeProfile;
