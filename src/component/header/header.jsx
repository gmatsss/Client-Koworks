import { Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import { ToastContainer, Zoom } from "react-toastify";

import Logo from "./components/logo";
import UserButton from "./components/userbutton";
import NavLink from "./components/links";
import SeekerLink from "./components/Seeker_link";

import { UserContext } from "../../context/UserContext";
import MobileNav from "./components/MobileNav";

const NavigationLinks = ({ currentUser, loading }) => {
  if (loading) return <NavLink />; // Return nothing if still loading

  if (currentUser && currentUser.role === "employee") {
    return <SeekerLink />;
  }
  return <NavLink />;
};

const Header = () => {
  const { currentUser, loading } = useContext(UserContext);
  const [mobileview, setMobileView] = useState(false);
  const callback = (data) => setMobileView(data);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom} // Add this line
      />
      <header>
        <MobileNav mobileview={mobileview} callback={callback} />
        <div className="container k-container">
          <div className="row align-items-center">
            <div className="col col-md-3 px-0 h-logo ">
              <Logo />
            </div>
            <div className="col col-md-6 px-0 h-menu ">
              <NavigationLinks currentUser={currentUser} loading={loading} />
            </div>
            <UserButton onClick={callback} loading={loading} />
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
