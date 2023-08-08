import Laptop from "../../../imgs/laptop-img.jpg";
const ItWorks = () => {
  return (
    <section className="content-section white-bg how-it-works">
      <div className="container k-container">
        <div className="row">
          <div className="col col-md-12 px-0">
            <h2 className="section-title">
              <span className="f-45">
                See How It Works So You Can Do It Yourself
              </span>
            </h2>
            <p className="text-center f-30">
              Choose from our
              <span className="red b">Database of 100,000+</span> Filipino
              Workers.
              <br />
              You'll hire them like freelancers / contractors and pay them
              direct.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-12 px-0">
            <div className="hiw-bg">
              <img src={Laptop} alt="How It Works" />
            </div>
          </div>
        </div>
      </div>
      <div className="container k-container">
        <div className="row">
          <div className="col col-md-12 px-0 mtop-75 text-center">
            <a href="jobseek" className="btn-default-red mright-15">
              Find Workers
            </a>
            <a href="/postajob" className="btn-default-blue">
              Post Job
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItWorks;
