import ProfileBanner from "./components/ProfileBanner";
import Sidebar from "./components/Sidebar";
import EmployeeIconMenu from "./components/EmployeeIconMenu";
import VerificationSection from "./components/VerificationSection ";
import StrengthenProfileSection from "./components/StrengthenProfileSection ";

const DJobSeeker = () => (
  <div className="container-fluid">
    <div className="row">
      <ProfileBanner name="jobseekername" jobTitle="Job Title" />
    </div>
    <div className="row">
      <section className="content-section white-bg">
        <div className="container k-container">
          <div className="row">
            <div className="div col-3 px-0 mright-50">
              <Sidebar />
            </div>
            <div className="div col px-0">
              <EmployeeIconMenu />
              <VerificationSection />
              <StrengthenProfileSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default DJobSeeker;
