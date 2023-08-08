const Option = () => {
  return (
    <section className="content-section pricing-details">
      <div className="container k-container">
        <div className="row row-eq-height">
          <div className="col">
            <div className="pricing-plan-content pp-green">
              <div className="pp-price text-center mbot-35">
                <h2>
                  <span>FREE</span>
                  <span>Why No Free Trial?</span>
                </h2>
                <h3>
                  <span>
                    FREE<i>?</i>
                  </span>
                  <span>forever</span>
                </h3>
                <p>Up to job posts (3)</p>
                <p>2 day Job approval.</p>
              </div>
              <div className="pp-desc text-center">
                <p>Employer Dashboard</p>
                <p>Browse & Bookmark Va's</p>
                <p>Review Job Applications</p>
              </div>
              <div className="pp-btn-container">
                <a href="#" className="pp-btn pp-btn-green">
                  Register <span>"No Credit Card Required"</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="pricing-plan-content pp-blue">
              <div className="pp-price text-center mbot-35">
                <h2>
                  <span>STARTER</span>
                  <span></span>
                </h2>
                <h3>
                  <span>$50</span>
                  <span>per month</span>
                </h3>
                <p>Up to job posts (3)</p>
                <p>
                  Instant approval. <br />
                  Can review and message <br />
                  up to <b>25 VA's profiles</b>
                </p>
              </div>
              <div className="pp-desc text-center">
                <p>Employer Dashboard</p>
                <p>Browse & Bookmark Va's</p>
                <p>Review Job Applications</p>

                <p className="p-bg p-bg-blue">
                  <b>Hire</b> VA's
                </p>
                <p className="p-bg p-bg-blue">
                  <b>Time Tracking</b>
                </p>
                <p className="p-bg p-bg-blue">
                  <b>Easy Payments</b>
                </p>
              </div>
              <div className="pp-btn-container">
                <a
                  href="https://linkagekoworks.viewourdesign.info/checkout"
                  className="pp-btn pp-btn-blue"
                >
                  <span>Upgrade</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="pricing-plan-content pp-red">
              <div className="pp-price text-center">
                <h2>
                  <span>PRO</span>
                  <span></span>
                </h2>
                <h3>
                  <span>$100</span>
                  <span>per month</span>
                </h3>
                <p>Up to job posts (3)</p>
                <p>
                  Instant approval. <br />
                  Can review and message <br /> brup to <b>50 VA's profiles</b>
                </p>
              </div>
              <div className="pp-desc text-center">
                <p>Employer Dashboard</p>
                <p>Browse & Bookmark Va's</p>
                <p>Review Job Applications</p>

                <p className="p-bg p-bg-red">
                  <b>Hire</b> VA's
                </p>
                <p className="p-bg p-bg-red">
                  <b>Time Tracking</b>
                </p>
                <p className="p-bg p-bg-red">
                  <b>Easy Payments</b>
                </p>
                <p className="p-bg p-bg-red">
                  <b>Pre-Vetted Linkage VA's</b>
                </p>
                <p className="p-bg p-bg-red">
                  <b>Outsourcing Guide</b>
                </p>
              </div>
              <div className="pp-btn-container">
                <a
                  href="https://linkagekoworks.viewourdesign.info/checkout"
                  className="pp-btn pp-btn-red"
                >
                  Upgrade
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Option;
