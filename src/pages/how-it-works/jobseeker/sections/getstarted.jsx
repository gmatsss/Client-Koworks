import HowitWorks from "../../../../imgs/how-it-works-jobseekers-img.png";
import Step1 from "../../../../imgs/how-it-works-jobseekers-step-1.png";
import Step2 from "../../../../imgs/how-it-works-jobseekers-step-2.png";
import Step3 from "../../../../imgs/how-it-works-jobseekers-step-3.png";

const Getstarted = () => {
  return (
    <section className="page-content jobseekers-content-section transparent-bg">
      <div className="container k-container">
        <div className="row align-items-center mtop-75 text-center">
          <div className="col">
            <h2 className="f-55 blue">How do I get started?</h2>
            <h3 className="f-55 red">3 SIMPLE STEPS</h3>
            <img
              src={HowitWorks}
              className="mtop-45"
              alt="Jobseekers How It Works"
            />
          </div>
        </div>
        <div className="row mtop-75 jsteps">
          <div className="col">
            <div className="jsteps-box">
              <div className="jbox-img">
                <img src={Step1} alt="Step 1" />
              </div>
              <div className="jbox-content">
                <span>STEP 1</span>
                <h3>
                  Create your FREE
                  <br />
                  Linkage Account
                </h3>
                <ul>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>Select your skills and expertise</span>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>Upload a professional profile photo</span>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>Go through the Verification Center checklist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="jsteps-box">
              <div className="jbox-img">
                <img src={Step2} alt="Step 2" />
              </div>
              <div className="jbox-content">
                <span>STEP 2</span>
                <h3>
                  Search & Apply
                  <br />
                  For Jobs
                </h3>
                <p>
                  We have jobs available for all skills. Maximize your job
                  opportunities by optimizing your filters.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="jsteps-box">
              <div className="jbox-img">
                <img src={Step3} alt="Step 3" />
              </div>
              <div className="jbox-content">
                <span>STEP 3</span>
                <h3>
                  Interview & Get
                  <br />
                  Hired
                </h3>
                <p>
                  Get ready to work once you get hired. Deliver high quality
                  work and earn the agreed amount.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mtop-60 mbot-50">
          <div className="col text-center">
            <a href="/" className="btn-default-red">
              Create a Free Account and Get Started
            </a>
          </div>
        </div>
        <div className="row what-is-va mtop-60">
          <div className="col">
            <div>
              <h4 className="blue f-30 h-style-a mbot-30">
                What is a Virtual Assistant?
              </h4>
              <p>
                A virtual assistant is a person who remotely assists and
                supports a business owner or client. You might work as an
                all-around VA, assisting your customer in several aspects of
                their business, or as a specialist VA dedicated to specific
                tasks. You can either get full-time, part-time, or freelance
                jobs. None of the jobs are commission based.
              </p>
            </div>
            <div>
              <h4 className="blue f-30 h-style-a mbot-30">
                What types of work will I be doing?
              </h4>
              <p>It is entirely dependent on your job and client.</p>
              <p>
                You can work as a Social Media Manager, a Web Developer, a
                Content Writer, an SEO expert, Graphic Designer, Project
                Manager, Copywriter, Accountant, WordPress Developer, Real
                Estate Virtual Assistant, and others. The tasks are diverse. We
                guarantee that you'll be matched with a company that needs your
                skills. You'll almost certainly be requested to learn new skills
                and expand your knowledge!
              </p>
            </div>
          </div>
          <div className="col">
            <img
              src="https://linkagekoworks.viewourdesign.info/imgs/va.jpg"
              alt="Virtual Assistant"
              style={{ maxWidth: "600px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
