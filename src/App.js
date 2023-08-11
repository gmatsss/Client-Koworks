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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* index is the induction of base component */}
          <Route index element={<Home />} />

          {/* Parent route for Employer and JobSeeker */}
          <Route path="/HowItWorks" element={<div />}>
            <Route path="employer" element={<Employer />} />
            <Route path="jobseeker" element={<JobSeeker />} />
          </Route>

          <Route path="/PostAJob" element={<PostAJob />} />
          <Route path="/Jobseek" element={<Jobseek />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/DJobSeeker" element={<DJobSeeker />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
