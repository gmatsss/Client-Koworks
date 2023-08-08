const Login = () => {
  return (
    <section className="content-section login-section">
      <div className="container k-container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Login</div>

              <div className="card-body">
                <form
                  method="POST"
                  action="https://linkagekoworks.viewourdesign.info/login"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="pNnmZD5isCAvKyMPzuQSP9sRmfy9JUKVK1R3ai2P"
                  />
                  <div className="form-group row">
                    <label
                      for="email"
                      className="col-md-4 col-form-label text-md-right"
                    >
                      E-Mail Address
                    </label>

                    <div className="col-md-6">
                      <input
                        id="email"
                        type="email"
                        className="form-control "
                        name="email"
                        value=""
                        required
                        autocomplete="email"
                        autofocus
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      for="password"
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
                        autocomplete="current-password"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-6 offset-md-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                          id="remember"
                        />

                        <label className="form-check-label" for="remember">
                          Remember Me
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group row mb-0">
                    <div className="col-md-8 offset-md-4">
                      <button type="submit" className="btn-default-red">
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
