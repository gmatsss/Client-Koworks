import { Routes, Route } from "react-router-dom";
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
import SearchJob from "./pages/SearchJob/SearchJob";
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

function App() {
  const { currentUser, loading, fetchUser } = useContext(UserContext);

  useOnce(() => {
    fetchUser();
  });

  function ProtectedRoute({ children }) {
    if (loading) {
      return (
        <div className="spinner-container">
          <DotSpinner size={40} speed={0.9} color="black" />
        </div>
      );
      // Return null while loading
    }

    if (!currentUser) {
      return <Navigate to="/Login" />;
    }

    return children;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
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
          <Route path="/SearchJob" element={<SearchJob />} />
          <Route path="*" element={<NotFound />} />
          {/* Commented out protected routes for adjustment later */}

          <Route
            path="/AccountCreation"
            element={
              <ProtectedRoute>
                <AccountCreationComponent />
              </ProtectedRoute>
            }
          />

          <Route
            path="EmployeeProfileComponent"
            element={
              <ProtectedRoute>
                <EmployeeProfileComponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/DJobSeeker/*"
            element={
              <ProtectedRoute>
                <DJobSeeker />
              </ProtectedRoute>
            }
          />
          <Route
            path="/UpdateAccountForm"
            element={
              <ProtectedRoute>
                <UpdateAccountForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Payments"
            element={
              <ProtectedRoute>
                <Payments />
              </ProtectedRoute>
            }
          />

          <Route
            path="/SkillRatingForm"
            element={
              <ProtectedRoute>
                <SkillRatingForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="/UpdateSkill"
            element={
              <ProtectedRoute>
                <UpdateSkill />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
