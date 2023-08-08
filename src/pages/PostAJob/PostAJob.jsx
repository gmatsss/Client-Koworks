const PostAJob = () => {
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
              <form
                method="POST"
                action="https://linkagekoworks.viewourdesign.info/employer"
                className="kform"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="K62eAkPaIxJUlm7cV0nHbvP0wodYDrS9COVQSArz"
                />
                <div className="kform-group">
                  <input
                    type="text"
                    className="kfield full-name blue kbox-shadow"
                    name="name"
                    value=""
                    required
                    autocomplete="name"
                    autofocus
                    placeholder="Full Name"
                  />
                </div>
                <div className="kform-group">
                  <input
                    type="email"
                    className="kfield email blue kbox-shadow"
                    name="email"
                    value=""
                    required
                    autocomplete="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="kform-group colstwo">
                  <input
                    type="password"
                    className="kfield password blue kbox-shadow"
                    name="password"
                    required
                    autocomplete="password"
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    className="kfield cpassword blue kbox-shadow"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="kform-group"></div>
                <div className="kform-group kform-btn">
                  <input type="hidden" id="role" name="role" value="employer" />
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
