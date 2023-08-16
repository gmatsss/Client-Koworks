// HowItWorks.js
import { Outlet } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div>
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

export default HowItWorks;
