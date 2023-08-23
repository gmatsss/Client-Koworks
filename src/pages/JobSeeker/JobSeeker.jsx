import { useState, useContext } from "react";
import { toast } from "react-toastify";

import { UserContext } from "../../context/UserContext"; // Adjust the path as needed

import { useNavigate } from "react-router-dom";
import { fetchData } from "../../api/api";

const Jobseek = () => {
  const { login } = useContext(UserContext);

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
      fullname: jobseek.fname,
      email: jobseek.email,
      password: jobseek.password,
      password_confirmation: jobseek.confirmPassword,
    };

    const response = await fetchData("User/register", "POST", registrationData);

    console.log(response);

    // Check if the registration was successful
    if (response) {
      if (!response.success) {
        // Check for specific messages or conditions
        if (response.message === "User with this email already exists") {
          toast.warning(response.message);
        } else {
          toast.error(response.message || "Registration failed.");
        }
      } else {
        toast.success(response.message || "Registration successful.");
        // Automatically login the user after successful registration
        const loginResponse = await login(jobseek.email, jobseek.password);
        if (loginResponse && loginResponse.success) {
          navigate("/AccountCreation");
        } else {
          toast.error(loginResponse.message || "Error during automatic login.");
        }
      }
    } else {
      toast.error("No response from server.");
    }
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
