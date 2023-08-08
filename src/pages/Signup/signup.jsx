import ItWorks from "./sections/ItWorks";
import PartFullTime from "./sections/PartFullTime";
import StartCareer from "./sections/StartCareer";

const SignUp = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <StartCareer />
      </div>
      <div className="row">
        <ItWorks />
      </div>
      <div className="row">
        <PartFullTime />
      </div>
    </div>
  );
};

export default SignUp;
