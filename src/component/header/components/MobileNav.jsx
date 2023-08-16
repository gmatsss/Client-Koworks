// MobileNav.js
import React from "react";

const MobileNav = ({ mobileview, callback }) => (
  <nav
    className="mobile-nav-content nav-overlay"
    style={{ width: mobileview ? "100%" : "0%" }}
  >
    <a href="#" className="closebtn" onClick={() => callback(false)}>
      &times;
    </a>
    <ul>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#" className="">
            How It Works
          </a>
          <ul className="sub-menu">
            <li>
              <a href="/HowitWorks/employer">Employer</a>
            </li>
            <li>
              <a href="/HowitWorks/jobseeker">Job Seeker</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="PostAJob" className="">
            Post A Job
          </a>
        </li>
        <li>
          <a href="/Jobseek" className="">
            Job Seeker
          </a>
        </li>
        <li>
          <a href="/Pricing" className="">
            Pricing
          </a>
        </li>
        <li>
          <a href="/Resources" className="">
            Resources
          </a>
        </li>
      </ul>
    </ul>
  </nav>
);

export default MobileNav;
