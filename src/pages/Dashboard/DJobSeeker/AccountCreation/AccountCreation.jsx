import React from "react";

const AccountCreationComponent = () => {
  return (
    <div>
      <section className="steps-section red-bg-before">
        <div className="container k-container">
          <div className="row a-st1">
            <div className="col px-0 text-center steps step-1 red-bg active">
              <span className="step-title">Register for An Account</span>
            </div>
            <div className="col px-0 text-center steps step-2 blue-bg">
              <span className="step-title">Create Profile</span>
            </div>
            <div className="col px-0 text-center steps step-3 light-dark-blue-bg">
              <span className="step-title">Rate your Skills</span>
            </div>
            <div className="col px-0 text-center steps step-4 dark-blue-bg">
              <span className="step-title">View Available Job</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section jobs-form acct-msg-created white-bg">
        <div className="container k-container">
          <div className="row">
            <div className="col text-center">
              <img
                src="imgs/congrats-img.png"
                alt="Congratulations!"
                className="mbot-20"
              />
              <h1 className="f-75 blue">Congratulations!</h1>
              <h2 className="f-30 red fn mbot-50">
                Your Account has been created
              </h2>
              <p className="f-16 fn mbot-40">
                Please check your email for the verification link.
              </p>
              <a href="create-profile" className="btn-default-red fn mbot-40">
                Ok, got it!
              </a>
              <p className="text-center f-16 fn">
                Already have a Linkage.ph Account?
                <span className="d-block">
                  <a
                    href="https://linkagekoworks.viewourdesign.info/login"
                    className="u-case red b"
                  >
                    Sign In
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section white-bg find-a-job-section ptop-0 type-2">
        <div className="container k-container">
          <div className="row">
            <div className="col col-md-12 px-0">
              <h2 className="section-title">
                <span className="f-45">Want to</span>
                <span className="red u-case f-60">
                  Find A Part-time / Full-time
                </span>
                <span className="f-45">Online Job in the Philippines</span>
              </h2>
            </div>
          </div>
          <div className="row find-a-job-icons">
            {[
              {
                src: "imgs/apply-icon.png",
                alt: "APPLY FOR ONLINE JOBS",
                title: "Apply For <br />Online Jobs",
              },
              {
                src: "imgs/become-friend-icon.png",
                alt: "BECOME OUR FACEBOOK FRIEND",
                title: "Become Our <br />Facebook Friend",
              },
              {
                src: "imgs/work-from-home.png",
                alt: "HOW TO WORK FROM HOME",
                title: "How To Work <br />From Home",
              },
              {
                src: "imgs/home-based.png",
                alt: "HOME-BASED JOBS",
                title: "Home-Based <br />Jobs",
              },
            ].map((item, index) => (
              <div key={index} className="col col-md-3">
                <img src={item.src} alt={item.alt} />
                <h3
                  className="u-case"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountCreationComponent;
