import { useState, useContext } from "react";
import { toast } from "react-toastify";

import { UserContext } from "../../context/UserContext"; // Adjust the path as needed

import { useNavigate } from "react-router-dom";
import { fetchData } from "../../api/api";
import useDebounce from "../../api/debounce";

const Jobseek = () => {
  const { getUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const [jobseek, setJobseek] = useState({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobseek({
      ...jobseek,
      [name]: value,
    });
  };

  // Validation functions
  const isFieldEmpty = (field, message) => {
    if (!field) {
      toast.error(message);
      return true;
    }
    return false;
  };

  const isValidEmail = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      toast.error("Enter Valid Email");
      return false;
    }
    return true;
  };

  const arePasswordsMatching = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      toast.error("Password does not match");
      return false;
    }
    return true;
  };

  const validateForm = () => {
    if (
      isFieldEmpty(jobseek.fname, "Fullname required") ||
      isFieldEmpty(jobseek.email, "Email required") ||
      !isValidEmail(jobseek.email) ||
      isFieldEmpty(jobseek.password, "Password required") ||
      isFieldEmpty(jobseek.confirmPassword, "Confirm your password") ||
      !arePasswordsMatching(jobseek.password, jobseek.confirmPassword)
    ) {
      return false;
    }
    return true;
  };

  // Registration function
  const register = async () => {
    if (!validateForm()) return;

    const registrationData = {
      name: jobseek.fname,
      email: jobseek.email,
      password: jobseek.password,
      password_confirmation: jobseek.confirmPassword,
    };

    const response = await fetchData(
      "https://localhost:8001/JobSeekerRoutes/register",
      "POST",
      registrationData
    );

    if (response.err) return toast.error(response.err);

    const loginCredentials = {
      username: jobseek.email,
      password: jobseek.password,
    };

    const loginResponse = await fetchData(
      "https://localhost:8001/JobSeekerRoutes/login",
      "POST",
      loginCredentials
    );

    if (loginResponse && loginResponse.message === "Login Success") {
      await getUserData();
      toast.success(response.msg);
      return navigate("/AccountCreation");
    }
  };

  const debouncedRegister = useDebounce(register, 300); // 300ms delay as an example

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
                    name="fname"
                    value={jobseek.fname}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                  />
                  <input
                    type="password"
                    className="kfield cpassword red kbox-shadow"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    minLength="8"
                    value={jobseek.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="kform-group"></div>
                <div className="kform-group kform-btn">
                  <button
                    className="btn-default-red fn"
                    onClick={() => {
                      debouncedRegister();
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
