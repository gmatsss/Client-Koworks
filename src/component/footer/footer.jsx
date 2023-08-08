import logo from "../../imgs/linkage-logo.png";
const Footer = () => {
  return (
    <footer>
      <section className="top-footer">
        <div className="container k-container">
          <div className="row">
            <div className="col col-md-3">
              <h3>Employers</h3>
              <ul>
                <li>
                  <a href="/">How It Works</a>
                </li>
                <li>
                  <a href="/">Register</a>
                </li>
                <li>
                  <a href="/">Post a Job</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="#">Timeproof</a>
                </li>
              </ul>
            </div>
            <div className="col col-md-3">
              <h3>Workers</h3>
              <ul>
                <li>
                  <a href="/">How It Works</a>
                </li>
                <li>
                  <a href="/">Register</a>
                </li>
                <li>
                  <a href="/">Post your skills</a>
                </li>
                <li>
                  <a href="/">Job Search</a>
                </li>
                <li>
                  <a href="/">Life as Virtual Assistant</a>
                </li>
              </ul>
            </div>
            <div className="col col-md-3">
              <h3>Talended VA'S</h3>
              <ul>
                <li>
                  <a href="/">Seo VA's</a>
                </li>
                <li>
                  <a href="/">Wordpress Experts</a>
                </li>
                <li>
                  <a href="/">Graphic Designers</a>
                </li>
                <li>
                  <a href="/">Content Writers</a>
                </li>
                <li>
                  <a href="/">Bookkeeping VA's</a>
                </li>
                <li>
                  <a href="/">Social Media Manager</a>
                </li>
              </ul>
            </div>
            <div className="col col-md-3">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-footer">
        <div className="container k-container">
          <div className="row align-items-center">
            <div className="col col-md-6">
              <a href="/">
                <img src={logo} />
              </a>
            </div>
            <div className="col col-md-6 text-center">
              <p className="copy">
                Copyright © 2023 Linkage.ph. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
