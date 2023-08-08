import FAQ from "../employer/sections/FAQ";
import Emp_online from "../employer/sections/emponline";
import Resources from "../employer/sections/resources";
import FAQseeker from "./sections/FAQseeker";
import BannerPage from "./sections/bannerpage";
import Difference from "./sections/difference";
import Getstarted from "./sections/getstarted";
const JobSeeker = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <BannerPage />
      </div>
      <div className="row">
        <Difference />
      </div>
      <div className="row">
        <Getstarted />
      </div>
      <div className="row">
        <FAQseeker />
      </div>
      <div className="row">
        <FAQ />
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

export default JobSeeker;
