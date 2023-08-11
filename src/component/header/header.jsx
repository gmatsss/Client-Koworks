import { Outlet } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import Logo from "./components/logo";
import UserButton from "./components/userbutton";
import NavLink from "./components/links";

const Header = () => {
  const [mobileview, setMobileView] = useState(false);
  const callback = (data) => {
    setMobileView(data);
  };

  console.log(mobileview);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
    </div>
  );
};

export default Header;
