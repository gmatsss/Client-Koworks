import { Outlet, Link } from "react-router-dom";
import Banner_page from "./sections/bannerpage";
import Employee_cont from "./sections/empcontent";
import Faq from "./sections/FAQ";
import Emp_online from "./sections/emponline";
import Resources from "./sections/resources";
const Employer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Banner_page />
      </div>
      <div className="row">
        <Employee_cont />
      </div>
      <div className="row">
        <Faq />
      </div>
      <div className="row">
        <Emp_online />
      </div>
      <div className="row">
        <Resources />
      </div>
    </div>
  );
};

export default Employer;
