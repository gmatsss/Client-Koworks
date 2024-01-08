const Postnewjob = () => {
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
        <form method="POST" className="kform kform-wider" id="post-a-job">
          <input
            type="hidden"
            name="_token"
            value="MZFsF6YzADrVcWzfZqTXYFgHsvvaMm0uv4EoKsOI"
          />
          <h2 className="f-35 blue mbot-30">Job Information</h2>
          <div className="kform-group">
            <input
              type="text"
              className="kfield gray job-title f-border"
              name="job_title"
              placeholder="Job Title"
              required
            />
          </div>
          <div className="kform-group">
            <textarea
              name="job_description"
              className="kfield gray job-description f-border ckeditor"
              cols="30"
              rows="10"
              placeholder="Job Description"
            ></textarea>
          </div>

          <div className="kform-group mtop-20 colstwo">
            <div className="k-select m-0">
              <select name="salary_type" id="salary" required>
                <option value="range">Range</option>
                <option value="exact">Exact Rate</option>
              </select>
            </div>
          </div>
          <div
            id="sel-range"
            className="kform-group colstwo align-items-center mtop-20"
          >
            <span className="input-currency">
              <input
                type="number"
                min="1"
                className="kfield gray text-center f-border"
                name="salary_low"
                placeholder="Salary Rate"
              />
            </span>
            <span className="f-16 fn dark-gray">to</span>
            <span className="input-currency">
              <input
                type="number"
                min="1"
                className="kfield gray text-center f-border"
                name="salary_high"
                placeholder="Salary Rate"
              />
            </span>
          </div>
          <div
            id="sel-exact"
            style={{ display: "none" }}
            className="kform-group colstwo align-items-center mtop-20"
          >
            <span className="input-currency m-0">
              <input
                type="number"
                min="1"
                className="kfield gray text-center f-border m-0"
                name="salary_exact"
                placeholder="Salary Rate"
              />
            </span>
          </div>
          <h3 className="f-20 blue mtop-30 mbot-30">Other Information</h3>
          <div className="kform-group mtop-20 colstwo">
            <div className="k-select">
              <select name="id_proof" id="id_proof" required>
                <option value="">Required ID Proof (Greater than)</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="99">99</option>
              </select>
            </div>
            <div className="k-select">
              <select name="employment_type" id="employment" required>
                <option value="">Type of Employment</option>
                <option value="any">Any</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
              </select>
            </div>
          </div>
          <div className="kform-group mtop-20 colstwo">
            <input
              type="text"
              name="experience"
              className="kfield gray contact text-center f-border mright-23"
              placeholder="Years of Experience"
              required
            />
            <input
              type="text"
              name="working-hours"
              className="kfield gray contact text-center f-border mleft-23"
              placeholder="No. of Working Hours"
            />
          </div>
          <div className="kform-group mtop-20 skills-required">
            <h3 className="f-20 blue mtop-30 mbot-30">Skills Required</h3>
            <div className="d-flex align-items-start">
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="btn-admin-office-virtual-assistant"
                  data-bs-toggle="pill"
                  data-bs-target="#admin-office-virtual-assistant"
                  type="button"
                  role="tab"
                  aria-controls="admin-office-virtual-assistant"
                  aria-selected="true"
                >
                  Admin &amp; Office (Virtual Assistant)
                </button>
                <button
                  className="nav-link"
                  id="btn-advertising"
                  data-bs-toggle="pill"
                  data-bs-target="#advertising"
                  type="button"
                  role="tab"
                  aria-controls="advertising"
                  aria-selected="true"
                >
                  Advertising
                </button>
                <button
                  className="nav-link"
                  id="btn-customer-service-and-admin-support"
                  data-bs-toggle="pill"
                  data-bs-target="#customer-service-and-admin-support"
                  type="button"
                  role="tab"
                  aria-controls="customer-service-and-admin-support"
                  aria-selected="true"
                >
                  Customer Service and Admin Support
                </button>
                <button
                  className="nav-link"
                  id="btn-english-skills"
                  data-bs-toggle="pill"
                  data-bs-target="#english-skills"
                  type="button"
                  role="tab"
                  aria-controls="english-skills"
                  aria-selected="true"
                >
                  English Skills
                </button>
                <button
                  className="nav-link"
                  id="btn-finance-and-management-virtual-accountants"
                  data-bs-toggle="pill"
                  data-bs-target="#finance-and-management-virtual-accountants"
                  type="button"
                  role="tab"
                  aria-controls="finance-and-management-virtual-accountants"
                  aria-selected="true"
                >
                  Finance and Management (Virtual Accountants)
                </button>
                <button
                  className="nav-link"
                  id="btn-graphics-and-multimedia"
                  data-bs-toggle="pill"
                  data-bs-target="#graphics-and-multimedia"
                  type="button"
                  role="tab"
                  aria-controls="graphics-and-multimedia"
                  aria-selected="true"
                >
                  Graphics and Multimedia
                </button>
                <button
                  className="nav-link"
                  id="btn-marketing-sales"
                  data-bs-toggle="pill"
                  data-bs-target="#marketing-sales"
                  type="button"
                  role="tab"
                  aria-controls="marketing-sales"
                  aria-selected="true"
                >
                  Marketing and Sales
                </button>
                <button
                  className="nav-link"
                  id="btn-professional-services"
                  data-bs-toggle="pill"
                  data-bs-target="#professional-services"
                  type="button"
                  role="tab"
                  aria-controls="professional-services"
                  aria-selected="true"
                >
                  Professional Services
                </button>
                <button
                  className="nav-link"
                  id="btn-project-management"
                  data-bs-toggle="pill"
                  data-bs-target="#project-management"
                  type="button"
                  role="tab"
                  aria-controls="project-management"
                  aria-selected="true"
                >
                  Project Management
                </button>
                <button
                  className="nav-link"
                  id="btn-software-development-programming"
                  data-bs-toggle="pill"
                  data-bs-target="#software-development-programming"
                  type="button"
                  role="tab"
                  aria-controls="software-development-programming"
                  aria-selected="true"
                >
                  Software Development / Programming
                </button>
                <button
                  className="nav-link"
                  id="btn-web-development"
                  data-bs-toggle="pill"
                  data-bs-target="#web-development"
                  type="button"
                  role="tab"
                  aria-controls="web-development"
                  aria-selected="true"
                >
                  Web Development
                </button>
                <button
                  className="nav-link"
                  id="btn-webmaster"
                  data-bs-toggle="pill"
                  data-bs-target="#webmaster"
                  type="button"
                  role="tab"
                  aria-controls="webmaster"
                  aria-selected="true"
                >
                  Webmaster
                </button>
                <button
                  className="nav-link"
                  id="btn-writing"
                  data-bs-toggle="pill"
                  data-bs-target="#writing"
                  type="button"
                  role="tab"
                  aria-controls="writing"
                  aria-selected="true"
                >
                  Writing
                </button>
              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="admin-office-virtual-assistant"
                  role="tabpanel"
                  aria-labelledby="admin-office-virtual-assistant"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="1" />
                      <label for="job-skills">Admin Assistant</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="2" />
                      <label for="job-skills">Data Entry</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="3" />
                      <label for="job-skills">Email Management</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="advertising"
                  role="tabpanel"
                  aria-labelledby="advertising"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="4" />
                      <label for="job-skills">Amazon Product Ads</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="5" />
                      <label for="job-skills">Bing Ads</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="6" />
                      <label for="job-skills">Facebook Ads</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="customer-service-and-admin-support"
                  role="tabpanel"
                  aria-labelledby="customer-service-and-admin-support"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="7" />
                      <label for="job-skills">Community Forum Moderation</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="8" />
                      <label for="job-skills">Content Moderation</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="9" />
                      <label for="job-skills">Customer Support</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="english-skills"
                  role="tabpanel"
                  aria-labelledby="english-skills"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="10" />
                      <label for="job-skills">Speaking</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="11" />
                      <label for="job-skills">Translations</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="12" />
                      <label for="job-skills">Tutoring Teaching</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="finance-and-management-virtual-accountants"
                  role="tabpanel"
                  aria-labelledby="finance-and-management-virtual-accountants"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="13" />
                      <label for="job-skills">Accounting</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="14" />
                      <label for="job-skills">Bookkeeping</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="15" />
                      <label for="job-skills">Business Plans</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="graphics-and-multimedia"
                  role="tabpanel"
                  aria-labelledby="graphics-and-multimedia"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="16" />
                      <label for="job-skills">3D Modeling</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="17" />
                      <label for="job-skills">Graphics Editing</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="18" />
                      <label for="job-skills">Logo Design</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="marketing-sales"
                  role="tabpanel"
                  aria-labelledby="marketing-sales"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="19" />
                      <label for="job-skills">Affiliate Marketing</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="20" />
                      <label for="job-skills">
                        ClassnaclassNameified Ads Marketing
                      </label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="21" />
                      <label for="job-skills">Direct Mail Marketing</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="professional-services"
                  role="tabpanel"
                  aria-labelledby="professional-services"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="22" />
                      <label for="job-skills">Legal Services</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="23" />
                      <label for="job-skills">Medical Services</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="24" />
                      <label for="job-skills">Real Estate Services</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="project-management"
                  role="tabpanel"
                  aria-labelledby="project-management"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="25" />
                      <label for="job-skills">Design Project Management</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="26" />
                      <label for="job-skills">
                        Marketing Project Management
                      </label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="27" />
                      <label for="job-skills">Other Project Management</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="software-development-programming"
                  role="tabpanel"
                  aria-labelledby="software-development-programming"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="28" />
                      <label for="job-skills">Android Development</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="29" />
                      <label for="job-skills">Desktop Applications</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="30" />
                      <label for="job-skills">Game Development</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="web-development"
                  role="tabpanel"
                  aria-labelledby="web-development"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="31" />
                      <label for="job-skills">Wordpress Development</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="32" />
                      <label for="job-skills">Shopify</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="33" />
                      <label for="job-skills">Laravel</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="webmaster"
                  role="tabpanel"
                  aria-labelledby="webmaster"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="34" />
                      <label for="job-skills">Content Management</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="35" />
                      <label for="job-skills">WordPress</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="36" />
                      <label for="job-skills">Google Analytics</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="writing"
                  role="tabpanel"
                  aria-labelledby="writing"
                >
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="37" />
                      <label for="job-skills">Blogging</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="38" />
                      <label for="job-skills">Copywriting</label>
                    </div>
                  </div>
                  <div className="job-skill-options">
                    <div className="checkbox-input">
                      <input type="checkbox" name="job_skills[]" value="39" />
                      <label for="job-skills">Creative Writing</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
