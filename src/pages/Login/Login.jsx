import { useState } from "react";
import { fetchData } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext"; // Adjust the path as needed
import useDebounce from "../../api/debounce";

const Login = () => {
  const { getUserData } = useContext(UserContext); // Destructure getUserData from the context

  const navigate = useNavigate();
  const [jobseek, setJobseek] = useState({
    email: "",
    password: "",
  });

  const debouncedRequest = useDebounce(async () => {
    const LoginData = {
      username: jobseek.email,
      password: jobseek.password,
    };
    const Login = await fetchData(
      "https://localhost:8001/JobSeekerRoutes/login",
      "POST",
      LoginData
    );

    // Check if the response indicates success
    if (Login && Login.message === "Login Success") {
      // Call the getUserData function to fetch the user data
      await getUserData();
      // Navigate to the desired page on success
      toast.success(Login.message);
      return navigate("/DJobSeeker");
    } else {
      toast.warning(Login.message);
    }
  }, 500); // 500ms delay

  const login = () => {
    debouncedRequest();
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    await login(); // Call the login function
  };

  return (
    <section className="content-section login-section">
      <div className="container k-container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Login</div>

              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="_token"
                    value="pNnmZD5isCAvKyMPzuQSP9sRmfy9JUKVK1R3ai2P"
                  />
                  <div className="form-group row">
                    <label
                      htmlFor="email"
                      className="col-md-4 col-form-label text-md-right"
                    >
                      E-Mail Address
                    </label>

                    <div className="col-md-6">
                      <input
                        id="email"
                        type="email"
                        className="form-control "
                        value={jobseek.email}
                        onChange={(e) => {
                          setJobseek({
                            ...jobseek,
                            email: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      htmlFor="password"
                      className="col-md-4 col-form-label text-md-right"
                    >
                      Password
                    </label>

                    <div className="col-md-6">
                      <input
                        id="password"
                        type="password"
                        className="form-control "
                        name="password"
                        required
                        value={jobseek.password}
                        onChange={(e) => {
                          setJobseek({
                            ...jobseek,
                            password: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-group row">
                      <div className="col-md-6 offset-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            id="remember"
                          />

                          <label
                            className="form-check-label"
                            htmlFor="remember"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row mb-0">
                      <div className="col-md-8 offset-md-4">
                        <button
                          type="submit"
                          className="btn-default-red"
                          onClick={() => {
                            login();
                          }}
                        >
                          Login
                        </button>

                        <a
                          className="btn btn-link"
                          href="https://linkagekoworks.viewourdesign.info/password/reset"
                        >
                          Forgot Your Password?
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
