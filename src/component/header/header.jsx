import { Outlet } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Logo from "./components/logo";
import UserButton from "./components/userbutton";
import NavLink from "./components/links";

import Footer from "../footer/footer";

const Header = () => {
  const [mobileview, setMobileView] = useState(false);
  const callback = (data) => {
    setMobileView(data);
  };

  console.log(mobileview);

  return (
    <div>
      <header>
        <nav
          className="mobile-nav-content nav-overlay"
          style={{ width: mobileview ? "100%" : "0%" }}
        >
          <a
            href="#"
            className="closebtn"
            onClick={() => {
              callback(false);
            }}
          >
            &times;
          </a>
          <ul>
            <li>
              <a href="https://linkagekoworks.viewourdesign.info">Home</a>
            </li>
            <li>
              <a href="#" className="">
                How It Works
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="https://linkagekoworks.viewourdesign.info/page/employer">
                    Employer
                  </a>
                </li>
                <li>
                  <a href="https://linkagekoworks.viewourdesign.info/page/job-seeker">
                    Job Seeker
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="https://linkagekoworks.viewourdesign.info/post-a-job"
                className=""
              >
                Post A Job
              </a>
            </li>
            <li>
              <a
                href="https://linkagekoworks.viewourdesign.info/job-seekers"
                className=""
              >
                Job Seeker
              </a>
            </li>
            <li>
              <a
                href="https://linkagekoworks.viewourdesign.info/page/pricing"
                className=""
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="https://linkagekoworks.viewourdesign.info/resources"
                className=""
              >
                Resources
              </a>
            </li>
          </ul>
        </nav>
        <div className="container k-container">
          <div className="row align-items-center">
            <div className="col col-md-3 px-0 h-logo ">
              <Logo />
            </div>
            <div className="col col-md-6 px-0 h-menu ">
              <NavLink />
            </div>

            <UserButton onClick={callback} />
          </div>
        </div>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Header;
