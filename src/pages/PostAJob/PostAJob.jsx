import { useContext, useState } from "react";
import { fetchData } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";

const PostAJob = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "employer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if any of the form fields are empty
    for (const key in formData) {
      if (!formData[key]) {
        toast.warning(`Please fill in the ${key} field.`);
        return;
      }
    }

    console.log(formData);
    try {
      const response = await fetchData("user/register", "POST", formData);
      console.log(response);

      // Assuming the response contains a success flag or message
      if (response.success) {
        toast.success("Registration complete!");

        // Login the user after successful registration
        const loginResponse = await login(formData.email, formData.password);
        if (loginResponse.success) {
          navigate("/DEmployer");
        } else {
          toast.warning(
            loginResponse.message ||
              "Login failed after registration. Please try again."
          );
        }
      } else {
        // Handle any specific error messages from the server
        toast.warning(
          response.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Error posting data:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section className="content-section employer-post-a-job-section light-blue-bg">
      <div className="container k-container">
        <div className="row">
          <div className="col text-center">
            <span className="section-title-sub u-case blue-bg">Post Jobs</span>
            <h1 className="f-75 blue">Employers</h1>
            <p className="desc f-30">
              Create a Free Employer Account, Post a Job Today!
            </p>
            <div className="kform">
              <form onSubmit={handleSubmit} className="kform">
                <div className="kform-group">
                  <input
                    type="text"
                    className="kfield full-name blue kbox-shadow"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </div>

                <div className="kform-group">
                  <input
                    type="email"
                    className="kfield email blue kbox-shadow"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                </div>
                <div className="kform-group colstwo">
                  <input
                    type="password"
                    className="kfield password blue kbox-shadow"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    className="kfield cpassword blue kbox-shadow"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="kform-group kform-btn">
                  <input
                    type="submit"
                    value="Create An Account"
                    id="esubmit"
                    className="btn-default-blue"
                  />
                </div>
              </form>
            </div>
            <div className="kform-disclaimer text-center">
              <p>
                *By clicking the button you confirm that you accept the Terms &
                Conditions and Privacy Policy
              </p>
              <p className="have-account">
                Already have a Linkage.ph Account?
                <a
                  href="https://linkagekoworks.viewourdesign.info/login"
                  className="blue u-case"
                >
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

export default PostAJob;
