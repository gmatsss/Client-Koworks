const EmployeeProfileForm = ({
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
}) => {
  // The JSX for the form fields goes here
  return (
    <div>
      <div className="kform-group">
        <input
          type="text"
          className="kfield gray f-border"
          name="job_title"
          placeholder="Job Title"
          required
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>
      <div className="kform-group">
        <textarea
          name="summary"
          id="summary"
          className="ckeditor"
          placeholder="Summary of your Skills"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>
      </div>
      <div className="kform-group colstwo mtop-20">
        <div className="col relative px-0 mright-23">
          <label for="video_embed_code" className="e-label fn">
            Video ID or URL
          </label>
          <input
            type="text"
            className="kfield gray f-border"
            name="video_embed_code"
            id="video_embed_code"
            value={videoEmbedCode}
            onChange={(e) => setVideoEmbedCode(e.target.value)}
          />
        </div>
        <div className="col relative px-0 mleft-23">
          <div className="k-select m-0">
            <label for="experience" className="e-label fn">
              Video Type
            </label>
            <select
              name="video_type"
              id="video_type"
              required
              value={videoType}
              onChange={(e) => setVideoType(e.target.value)}
            >
              <option value="youtube">Youtube</option>
              <option value="vimeo">Vimeo</option>
            </select>
          </div>
        </div>
      </div>
      <div className="kform-group mtop-10 relative">
        <h3 className="f-20 b blue">Desired Salary</h3>
        <input
          type="number"
          className="kfield f-border"
          name="salary"
          placeholder="100 - 10,000"
          required
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <span className="ds">$</span>
      </div>
      <div className="kform-group relative">
        <h3 className="f-20 b blue">Hourly Rate</h3>
        <input
          type="text"
          className="kfield f-border"
          name="hourly_rate"
          placeholder="Hourly Rate"
          required
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
        />
        <span className="ds">$</span>
      </div>
      <div className="kform-group" data-toggle="buttons">
        <h3 className="f-20 b blue">Highest Education Attainment</h3>
        <div className="f-radio-b mtop-20">
          <input
            type="radio"
            name="education"
            id="educ_a"
            value="did-not-graduate-hschool"
            required
            checked={education === "did-not-graduate-hschool"}
            onChange={(e) => setEducation(e.target.value)}
          />
          <label for="educ_a" className="f-16 fn">
            I didn't graduate from high school
          </label>
          <span className="check"></span>
        </div>
        <div className="f-radio-b">
          <input
            type="radio"
            name="education"
            id="educ_b"
            value="high-school"
            required
            checked={education === "high-school"}
            onChange={(e) => setEducation(e.target.value)}
          />
          <label for="educ_b" className="f-16 fn">
            High School Diploma
          </label>
          <span className="check"></span>
        </div>
        <div className="f-radio-b">
          <input
            type="radio"
            name="education"
            id="educ_c"
            value="associates-degree"
            required
            checked={education === "associates-degree"}
            onChange={(e) => setEducation(e.target.value)}
          />
          <label for="educ_c" className="f-16 fn">
            Associates Degree
          </label>
          <span className="check"></span>
        </div>
        <div className="f-radio-b">
          <input
            type="radio"
            name="education"
            id="educ_d"
            value="bachelors-degree"
            required
            checked={education === "bachelors-degree"}
            onChange={(e) => setEducation(e.target.value)}
          />
          <label for="educ_d" className="f-16 fn">
            Bachelors Degree
          </label>
          <span className="check"></span>
        </div>
        <div className="f-radio-b">
          <input
            type="radio"
            name="education"
            id="educ_e"
            value="masters-degree"
            required
            checked={education === "masters-degree"}
            onChange={(e) => setEducation(e.target.value)}
          />
          <label for="educ_e" className="f-16 fn">
            Masters Degree
          </label>
          <span className="check"></span>
        </div>
        <div className="f-radio-b">
          <input
            type="radio"
            name="education"
            id="educ_f"
            value="doctorate-degree"
            required
            checked={education === "doctorate-degree"}
            onChange={(e) => setEducation(e.target.value)}
          />
          <label for="educ_f" className="f-16 fn">
            Doctorate Degree
          </label>
          <span className="check"></span>
        </div>
      </div>
      <div className="kform-group colstwo mtop-20 relative">
        <label for="experience" className="e-label fn">
          Year of Experience
        </label>
        <input
          type="text"
          id="experience"
          className="kfield gray f-border mright-23 mbot-0"
          name="experience"
          placeholder="Year of Experience"
          required
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <div className="k-select relative">
          <label for="experience" className="e-label fn">
            Employment Status
          </label>
          <select
            name="employmeny_status"
            id="emp_status"
            required
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
      <div className="kform-group colstwo mtop-20">
        <div className="col relative px-0 mright-23">
          <div className="row working-hours">
            <label for="working_hours" className="e-label fn">
              Available Working Hours (EST Time)
            </label>
            <div className="row">
              <div className="col-5">
                <input
                  type="time"
                  className="kfield gray f-border"
                  name="working_hours_from"
                  placeholder="Working Hours"
                  required
                  value={workingHoursFrom}
                  onChange={(e) => setWorkingHoursFrom(e.target.value)}
                />
              </div>
              <div className="col-1 text-center">
                <i className="fas fa-arrow-right"></i>
              </div>
              <div className="col-6">
                <input
                  type="time"
                  className="kfield gray f-border"
                  name="working_hours_to"
                  placeholder="Working Hours"
                  required
                  value={workingHoursTo}
                  onChange={(e) => setWorkingHoursTo(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col relative px-0 mleft-23">
          <label for="bday" className="e-label fn">
            Date of Birth
          </label>
          <input
            type="date"
            className="kfield gray f-border"
            name="bday"
            placeholder="Date of Birth"
            required
            value={bday}
            onChange={(e) => setBday(e.target.value)}
          />
        </div>
      </div>
      <div className="kform-group colstwo mtop-20">
        <input
          type="text"
          className="kfield gray f-border mright-23"
          name="contact"
          placeholder="Contact Number"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="text"
          className="kfield gray f-border mleft-23"
          name="website"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="kform-group inline-radio mtop-10">
        <h3 className="f-20 b blue">Gender</h3>
        <div className="f-radio-b mtop-20 mright-40 d-inline-block">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            required
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />

          <label for="male" className="f-16 fn">
            Male
          </label>
          <span className="check"></span>
        </div>
        <div className="f-radio-b d-inline-block">
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            required
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="female" className="f-16 fn">
            Female
          </label>
          <span className="check"></span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfileForm;
