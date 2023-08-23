import React from "react";

function ProfileForm({
  jobTitle,
  setJobTitle,
  summary,
  setSummary,
  videoEmbedCode,
  setVideoEmbedCode,
  videoType,
  setVideoType,
  salary,
  setSalary,
  hourlyRate,
  setHourlyRate,
  education,
  setEducation,
  experience,
  setExperience,
  employmentStatus,
  setEmploymentStatus,
  workingHoursFrom,
  setWorkingHoursFrom,
  workingHoursTo,
  setWorkingHoursTo,
  bday,
  setBday,
  contact,
  setContact,
  website,
  setWebsite,
  gender,
  setGender,
  handleSubmit,
}) {
  return (
    <div className="kform-container">
      <form
        enctype="multipart/form-data"
        method="POST"
        class="kform kform-wider"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_token" />
        <div class="kform-group">
          <input
            type="text"
            class="kfield gray f-border"
            name="job_title"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div class="kform-group">
          <textarea
            name="summary"
            id="summary"
            class="ckeditor"
            placeholder="Summary of your Skills"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
        </div>
        <div class="kform-group colstwo mtop-20">
          <div class="col relative px-0 mright-23">
            <label for="video_embed_code" class="e-label fn">
              Video ID or URL
            </label>
            <input
              type="text"
              class="kfield gray f-border"
              name="video_embed_code"
              id="video_embed_code"
              value={videoEmbedCode}
              onChange={(e) => setVideoEmbedCode(e.target.value)}
            />
          </div>
          <div class="col relative px-0 mleft-23">
            <div class="k-select m-0">
              <label for="experience" class="e-label fn">
                Video Type
              </label>
              <select
                name="video_type"
                id="video_type"
                value={videoType}
                onChange={(e) => setVideoType(e.target.value)}
              >
                <option value="youtube">Youtube</option>
                <option value="vimeo">Vimeo</option>
              </select>
            </div>
          </div>
        </div>
        <div class="kform-group mtop-10 relative">
          <h3 class="f-20 b blue">Desired Salary</h3>
          <input
            type="number"
            class="kfield f-border"
            name="salary"
            placeholder="100 - 10,000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <span class="ds">$</span>
        </div>
        <div class="kform-group relative">
          <h3 class="f-20 b blue">Hourly Rate</h3>
          <input
            type="text"
            class="kfield f-border"
            name="hourly_rate"
            placeholder="Hourly Rate"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
          />
          <span class="ds">$</span>
        </div>
        <div class="kform-group" data-toggle="buttons">
          <h3 class="f-20 b blue">Highest Education Attainment</h3>
          <div class="f-radio-b mtop-20">
            <input
              type="radio"
              name="education"
              id="educ_a"
              value="did-not-graduate-hschool"
              checked={education === "did-not-graduate-hschool"}
              onChange={(e) => setEducation(e.target.value)}
            />
            <label for="educ_a" class="f-16 fn">
              I didn't graduate from high school
            </label>
            <span class="check"></span>
          </div>
          <div class="f-radio-b">
            <input
              type="radio"
              name="education"
              id="educ_b"
              value="high-school"
              checked={education === "high-school"}
              onChange={(e) => setEducation(e.target.value)}
            />
            <label for="educ_b" class="f-16 fn">
              High School Diploma
            </label>
            <span class="check"></span>
          </div>
          <div class="f-radio-b">
            <input
              type="radio"
              name="education"
              id="educ_c"
              value="associates-degree"
              checked={education === "associates-degree"}
              onChange={(e) => setEducation(e.target.value)}
            />
            <label for="educ_c" class="f-16 fn">
              Associates Degree
            </label>
            <span class="check"></span>
          </div>
          <div class="f-radio-b">
            <input
              type="radio"
              name="education"
              id="educ_d"
              value="bachelors-degree"
              checked={education === "bachelors-degree"}
              onChange={(e) => setEducation(e.target.value)}
            />
            <label for="educ_d" class="f-16 fn">
              Bachelors Degree
            </label>
            <span class="check"></span>
          </div>
          <div class="f-radio-b">
            <input
              type="radio"
              name="education"
              id="educ_e"
              value="masters-degree"
              checked={education === "masters-degree"}
              onChange={(e) => setEducation(e.target.value)}
            />
            <label for="educ_e" class="f-16 fn">
              Masters Degree
            </label>
            <span class="check"></span>
          </div>
          <div class="f-radio-b">
            <input
              type="radio"
              name="education"
              id="educ_f"
              value="doctorate-degree"
              checked={education === "doctorate-degree"}
              onChange={(e) => setEducation(e.target.value)}
            />
            <label for="educ_f" class="f-16 fn">
              Doctorate Degree
            </label>
            <span class="check"></span>
          </div>
        </div>
        <div class="kform-group colstwo mtop-20 relative">
          <label for="experience" class="e-label fn">
            Year of Experience
          </label>
          <input
            type="text"
            id="experience"
            class="kfield gray f-border mright-23 mbot-0"
            name="experience"
            placeholder="Year of Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <div class="k-select relative">
            <label for="experience" class="e-label fn">
              Employment Status
            </label>
            <select
              name="employmeny_status"
              id="emp_status"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
            >
              <option value="">Employment Status</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>
        </div>
        <div class="kform-group colstwo mtop-20">
          <div class="col relative px-0 mright-23">
            <div class="row working-hours">
              <label for="working_hours" class="e-label fn">
                Available Working Hours (EST Time)
              </label>
              <div class="col-6">
                <input
                  type="time"
                  class="kfield gray f-border"
                  name="working_hours_from"
                  placeholder="Working Hours"
                  value={workingHoursFrom}
                  onChange={(e) => setWorkingHoursFrom(e.target.value)}
                />
                <span>to</span>
              </div>
              <div class="col-6">
                <input
                  type="time"
                  class="kfield gray f-border"
                  name="working_hours_to"
                  placeholder="Working Hours"
                  value={workingHoursTo}
                  onChange={(e) => setWorkingHoursTo(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div class="col relative px-0 mleft-23">
            <label for="bday" class="e-label fn">
              Date of Birth
            </label>
            <input
              type="date"
              class="kfield gray f-border"
              name="bday"
              placeholder="Date of Birth"
              value={bday}
              onChange={(e) => setBday(e.target.value)}
            />
          </div>
        </div>
        <div class="kform-group colstwo mtop-20">
          <input
            type="text"
            class="kfield gray f-border mright-23"
            name="contact"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            type="text"
            class="kfield gray f-border mleft-23"
            name="website"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div class="kform-group inline-radio mtop-10">
          <h3 class="f-20 b blue">Gender</h3>
          <div class="f-radio-b mtop-20 mright-40 d-inline-block">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />

            <label for="male" class="f-16 fn">
              Male
            </label>
            <span class="check"></span>
          </div>
          <div class="f-radio-b d-inline-block">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label for="female" class="f-16 fn">
              Female
            </label>
            <span class="check"></span>
          </div>
        </div>
        <div class="kform-group kform-btn text-center">
          <input
            type="submit"
            value="Done"
            id="crsubmit"
            class="btn-default-red fn"
          />
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
