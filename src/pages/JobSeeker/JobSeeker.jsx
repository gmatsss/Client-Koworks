import { useState } from "react";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { fetchData } from "../../api/api";
const Jobseek = () => {
  const navigate = useNavigate();
  const [jobseek, setJobseek] = useState({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const register = async () => {
    if (!jobseek.fname) return toast.error("Fullname required");
    if (!jobseek.email) return toast.error("Email required");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!jobseek.email.match(mailformat))
      return toast.error("Enter Valid Email");
    if (!jobseek.password) return toast.error("Password required");
    if (!jobseek.confirmPassword) return toast.error("Confirm you password");

    if (jobseek.password !== jobseek.confirmPassword)
      return toast.error("Password does not match");

    // Example usage for POST request
    const postData = {
      name: jobseek.fname,
      email: jobseek.email,
      password: jobseek.password,
      password_confirmation: jobseek.confirmPassword,
    };
    const response = await fetchData(
      "https://localhost:8001/JobSeekerRoutes/register",
      "POST",
      postData
    );
    console.log(response);

    if (response.err) return toast.error(response.err);

    toast.success(response.msg);
    // return navigate("/DJobSeeker");
  };

  return (
    <section className="content-section employer-post-a-job-section light-red-bg">
      <div className="container k-container">
        <div className="row">
          <div className="col text-center">
            <span className="section-title-sub u-case red-bg">Find Jobs</span>
            <h1 className="f-75 red">Job Seekers</h1>
            <p className="desc f-30">
              Create a Free Jobseeker Account, Find a Job Today!
            </p>

            <div className="kform-container">
              <div className="kform">
                <div className="kform-group">
                  <input
                    type="text"
                    className="kfield full-name red kbox-shadow"
                    name="name"
                    value={jobseek.fname}
                    onChange={(e) => {
                      setJobseek({
                        ...jobseek,
                        fname: e.target.value,
                      });
                    }}
                    required
                    autoFocus
                    placeholder="Full Name"
                  />
                </div>
                <div className="kform-group">
                  <input
                    type="email"
                    className="kfield email red kbox-shadow"
                    name="email"
                    value={jobseek.email}
                    onChange={(e) => {
                      setJobseek({
                        ...jobseek,
                        email: e.target.value,
                      });
                    }}
                    required
                    placeholder="Email Address"
                  />
                </div>
                <div className="kform-group colstwo">
                  <input
                    type="password"
                    className="kfield password red kbox-shadow"
                    name="password"
                    required
                    placeholder="Password"
                    minLength="8"
                    value={jobseek.password}
                    onChange={(e) => {
                      setJobseek({
                        ...jobseek,
                        password: e.target.value,
                      });
                    }}
                  />
                  <input
                    type="password"
                    className="kfield cpassword red kbox-shadow"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    minLength="8"
                    value={jobseek.confirmPassword}
                    onChange={(e) => {
                      setJobseek({
                        ...jobseek,
                        confirmPassword: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="kform-group"></div>
                <div className="kform-group kform-btn">
                  <button
                    className="btn-default-red fn"
                    onClick={() => {
                      register();
                    }}
                  >
                    Create an Account
                  </button>
                </div>
              </div>
            </div>

            <div className="kform-disclaimer text-center">
              <p>
                *By clicking the button you confirm that you accept the Terms &
                Conditions and Privacy Policy
              </p>
              <p className="have-account">
                Already have a Linkage.ph Account?
                <a href="/login" className="red u-case">
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobseek;
