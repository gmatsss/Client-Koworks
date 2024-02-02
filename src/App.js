import { Routes, Route, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom"; // Assuming you're using react-router v6

// Components
import Header from "./component/header/header";
import Footer from "./component/footer/footer";

// Pages
import Home from "./pages/home/home";
import HowItWorks from "./pages/how-it-works/HowItWorks";
import Employer from "./pages/how-it-works/employer/employer";
import JobSeeker from "./pages/how-it-works/jobseeker/jobseeker";
import PostAJob from "./pages/PostAJob/PostAJob";
import Jobseek from "./pages/JobSeeker/JobSeeker";
import Pricing from "./pages/Pricing/Pricing";
import Resources from "./pages/Resources/Resources";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/signup";
import SearchEmployee from "./pages/SearchEmployee/SearchEmployee";
import AccountCreationComponent from "./pages/Dashboard/DJobSeeker/AccountCreation/AccountCreation";
import EmployeeProfileComponent from "./pages/Dashboard/DJobSeeker/EmployeeProfile/EmployeeProfileComponent";

// Styles
import "./app.scss";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import DJobSeeker from "./pages/Dashboard/DJobSeeker/DJobSeeker";
import UpdateAccountForm from "./pages/Dashboard/DJobSeeker/UpdateAccountForm/UpdateAccountForm";
import Payments from "./pages/Payments/Payments";
import { toast } from "react-toastify";
import useOnce from "./api/useOnce";
import { DotSpinner } from "@uiball/loaders";
import NotFound from "./pages/NotFound/NotFound";
import SkillRatingForm from "./pages/Dashboard/DJobSeeker/skill/SkillRatingForm";
import UpdateSkill from "./pages/Dashboard/DJobSeeker/updateskill/UpdateSkill";
import ViewProfile from "./pages/Dashboard/DJobSeeker/ViewProfile/ViewProfile";
import BookSection from "./pages/Dashboard/DJobSeeker/components/booksection";
import VerificationComponent from "./pages/Dashboard/DJobSeeker/VerifyProfile/VerificationComponent";
import ProfileVerification from "./pages/Dashboard/DJobSeeker/VerifyProfile/ProfileVerification/ProfileVerification";
import VerifyAddressComponent from "./pages/Dashboard/DJobSeeker/VerifyProfile/VerifyAddress/VerifyAddressComponent";
import PhoneVerification from "./pages/Dashboard/DJobSeeker/VerifyProfile/PhoneVerification/PhoneVerification";
import DEmployer from "./pages/Dashboard/DEmployer/DEmployer";
import Employerjob from "./pages/JobEmployerlist/Employerjob";
import ViewJobEmployer from "./pages/ViewJobEmployer/ViewJobEmployer";

function App() {
  const location = useLocation();
  const { currentUser, loading, fetchUser } = useContext(UserContext);

  useOnce(() => {
    fetchUser();
  });

  if (loading) {
    return (
      <div className="spinner-container">
        <DotSpinner size={80} speed={0.9} color="black" />
      </div>
    );
  }

  function ProtectedRoute({ children, role }) {
    if (!currentUser) {
      return <Navigate to="/Login" />;
    }

    if (role && currentUser.role !== role) {
      return <Navigate to="/" />;
    }

    return children;
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HowItWorks" element={<HowItWorks />}>
          <Route path="employer" element={<Employer />} />
          <Route path="jobseeker" element={<JobSeeker />} />
        </Route>
        <Route path="/PostAJob" element={<PostAJob />} />
        <Route path="/Jobseek" element={<Jobseek />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/SearchEmployee" element={<SearchEmployee />} />
        <Route
          path="/AccountCreation"
          element={
            <ProtectedRoute role="employee">
              <AccountCreationComponent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/EmployeeProfileComponent"
          element={
            <ProtectedRoute role="employee">
              <EmployeeProfileComponent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ViewProfile"
          element={
            <ProtectedRoute role="employee">
              <ViewProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ProfileVerification"
          element={
            <ProtectedRoute role="employee">
              <ProfileVerification />
            </ProtectedRoute>
          }
        />
        <Route
          path="/VerificationComponent"
          element={
            <ProtectedRoute role="employee">
              <VerificationComponent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/PhoneVerification"
          element={
            <ProtectedRoute role="employee">
              <PhoneVerification />
            </ProtectedRoute>
          }
        />
        <Route
          path="/VerifyAddressComponent"
          element={
            <ProtectedRoute role="employee">
              <VerifyAddressComponent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/DJobSeeker/*"
          element={
            <ProtectedRoute role="employee">
              <DJobSeeker />
            </ProtectedRoute>
          }
        />
        <Route
          path="/UpdateAccountForm"
          element={
            <ProtectedRoute role="employee">
              <UpdateAccountForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Payments"
          element={
            <ProtectedRoute role="employee">
              <Payments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/SkillRatingForm"
          element={
            <ProtectedRoute role="employee">
              <SkillRatingForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/UpdateSkill"
          element={
            <ProtectedRoute role="employee">
              <UpdateSkill />
            </ProtectedRoute>
          }
        />
        <Route
          path="/DEmployer/*"
          element={
            <ProtectedRoute role="employer">
              <DEmployer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Employerjob"
          element={
            <ProtectedRoute role="employer">
              <Employerjob />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ViewJobEmployer/:id"
          element={
            <ProtectedRoute role="employer">
              <ViewJobEmployer />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname.includes("updateskill") && <BookSection />}
      <Footer />
    </div>
  );
}

export default App;
