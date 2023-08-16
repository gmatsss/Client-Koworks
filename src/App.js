import Header from "./component/header/header";

import "./app.scss";

//homepage
import Home from "./pages/home/home";

//howitworks
import Employer from "./pages/how-it-works/employer/employer";

import Footer from "./component/footer/footer";

import { Routes, Route } from "react-router-dom";
import JobSeeker from "./pages/how-it-works/jobseeker/jobseeker";
import PostAJob from "./pages/PostAJob/PostAJob";
import Jobseek from "./pages/JobSeeker/JobSeeker";
import Pricing from "./pages/Pricing/Pricing";
import Resources from "./pages/Resources/Resources";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/signup";
import DJobSeeker from "./pages/Dashboard/DJobSeeker/DJobSeeker";
import HowItWorks from "./pages/how-it-works/HowItWorks";
import SearchJob from "./pages/SearchJob/SearchJob";
import Payments from "./pages/Payments/Payments";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom"; // Assuming you're using react-router v6
import { UserContext } from "./context/UserContext";
import UpdateAccountForm from "./pages/Dashboard/DJobSeeker/UpdateAccountForm/UpdateAccountForm";
import { toast } from "react-toastify";
import AccountCreationComponent from "./pages/Dashboard/DJobSeeker/AccountCreation/AccountCreation";

function App() {
  const { currentUser, fetchUserPromise } = useContext(UserContext);

  useEffect(() => {
    if (fetchUserPromise) {
      toast.promise(fetchUserPromise, {
        pending: "Fetching user data...",
        success: "User data fetched successfully!",
        error: "Failed to fetch user data.",
      });
    }
  }, [fetchUserPromise]);
  function ProtectedElement({ children, role }) {
    // If currentUser is null, it means the data hasn't been fetched yet.
    if (currentUser === null) {
      return null; // Render nothing until the user data is fetched.
    }
    if (!currentUser) {
      return <Navigate to="/Login" replace />;
    }

    if (currentUser.role !== role) {
      return <Navigate to="/" replace />;
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

          <Route
            path="/AccountCreation"
            element={<AccountCreationComponent />}
          />

          {/* Protected routes for employee */}
          <Route
            path="/DJobSeeker/*"
            element={
              <ProtectedElement role="employee">
                <DJobSeeker />
              </ProtectedElement>
            }
          />
          <Route path="/UpdateAccountForm " element={<UpdateAccountForm />} />

          <Route
            path="/Payments"
            element={
              <ProtectedElement role="employee">
                <Payments />
              </ProtectedElement>
            }
          />

          {/* Protected routes for employer (add routes as needed) */}
          {/* Example:
          <Route
            path="/EmployerDashboard"
            element={
              <ProtectedElement role="employer">
                <EmployerDashboard />
              </ProtectedElement>
            }
          />
          */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
