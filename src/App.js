import Header from "./component/header/header";

import "./app.scss";

//homepage
import Home from "./pages/home/home";

//howitworks
import Employer from "./pages/how-it-works/employer/employer";

import { Routes, Route } from "react-router-dom";
import JobSeeker from "./pages/how-it-works/jobseeker/jobseeker";
import PostAJob from "./pages/PostAJob/PostAJob";
import Jobseek from "./pages/JobSeeker/JobSeeker";
import Pricing from "./pages/Pricing/Pricing";
import Resources from "./pages/Resources/Resources";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/signup";
import Dashboard from "./pages/Dashboard/DJobSeeker/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        {/* index is the induction of base component */}
        <Route index element={<Home />} />

        {/* index is the induction of base component */}
        <Route path="/HowItWorks/employer" element={<Employer />} />
        <Route path="/HowItWorks/jobseeker" element={<JobSeeker />} />
        <Route path="/PostAJob" element={<PostAJob />} />
        <Route path="/Jobseek" element={<Jobseek />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Resources" element={<Resources />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
