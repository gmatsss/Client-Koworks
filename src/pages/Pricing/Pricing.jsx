import Faq from "../how-it-works/employer/sections/FAQ";
import Emp_online from "../how-it-works/employer/sections/emponline";
import Resources from "../how-it-works/employer/sections/resources";
import FAQseeker from "../how-it-works/jobseeker/sections/FAQseeker";
import Banner from "./sections/banner";
import Option from "./sections/option";

const Pricing = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Banner />
      </div>

      <div className="row">
        <Option />
      </div>
      <div className="row">
        <FAQseeker />
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

export default Pricing;
