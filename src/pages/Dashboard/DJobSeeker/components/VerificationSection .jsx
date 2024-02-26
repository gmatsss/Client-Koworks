import React from "react";
import { useNavigate } from "react-router-dom";

const VerificationSection = ({ currentUser }) => {
  const navigate = useNavigate();

  // Updated check based on verificationStatus
  const hasProfileAndSkill =
    currentUser?.verificationStatus?.profileCompleted &&
    currentUser?.verificationStatus?.skillCompleted;

  const navigateToProfileCreation = () => {
    navigate("/EmployeeProfileComponent"); // Adjust the path as needed
  };

  const navigateToSkillCreation = () => {
    navigate("/SkillRatingForm"); // Adjust the path as needed
  };

  console.log(currentUser);

  return (
    <>
      <div className="verify-content mtop-30">
        <h2 className="f-35 blue">Verify your Account</h2>
        <div className="blue-box-content">
          <form action="/" method="POST" className="d-inline">
            <input
              type="hidden"
              name="_token"
              value="CTtlAkyYW1mTOABcrburFCdZlDimXQJo38Fn605v"
            />
            <p>Click the link in the verification email sent to you.</p>
            <button type="submit" className="btn-default-red small-btn b blue">
              Resend verification email
            </button>
          </form>
        </div>

        {!hasProfileAndSkill && (
          <div>
            <h2 className="f-35 blue mt-5">Finish your Account</h2>
            <div className="red-box-content">
              <p>
                To find jobs please complete your profile just click the buttons
                and fill up those information.
              </p>
              {!currentUser?.verificationStatus?.profileCompleted && (
                <button
                  type="button"
                  className="btn-default-red m-2"
                  onClick={navigateToProfileCreation}
                >
                  Create profile
                </button>
              )}
              {!currentUser?.verificationStatus?.skillCompleted && (
                <button
                  type="button"
                  className="btn-default-red m-2"
                  onClick={navigateToSkillCreation}
                >
                  Create skill
                </button>
              )}
            </div>
          </div>
        )}

        <div className="blue-box-content">
          <p className="blue f-18">
            <b>
              Working via Linkage.ph is very safe, but please follow these
              warnings:
            </b>
          </p>
          <ol>
            <li>
              <span>
                Never accept money that you are instructed to send to someone
                else, purchase items, or convert to Bitcoin. Don't send money to
                an employer/3rd party. Notify us immediately if this is
                requested.
              </span>
            </li>
            <li>
              <span>
                DO NOT allow anybody else to use your account, create secondary
                accounts, or use fake info. You will be banned from using our
                site.
              </span>
            </li>
            <li>
              <span>
                If possible, ask to be paid each week until you fully trust your
                employer.
              </span>
            </li>
            <li>
              <span>
                Avoid employers that force you to register on a different site
                as part of the interview process, especially if they request
                pictures of your passport and other sensitive information.
              </span>
            </li>
          </ol>
        </div>
        <div className="blue-box-content">
          <p className="blue f-18">
            <b>
              Your account has now been selected for our required Account
              Verification Process, shown below:
            </b>
          </p>
          <ol>
            <li>
              <span>Upload profile picture</span>
            </li>
            <li>
              <span>Upload government ID</span>
            </li>
            <li>
              <span>Upload selfie picture</span>
            </li>
            <li>
              <span>Add your address</span>
            </li>
            <li>
              <span>Upload utility bill</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="verify-content mtop-30">
        <h2 className="f-35 blue">Strengthen your Profile</h2>
        <div className="row mtop-20">
          <div className="col-2">
            <img
              src="../../imgs/strengthen-you-profile.png"
              alt="Strengthen your Profile"
            />
          </div>
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie.
            </p>
          </div>
        </div>
        <a href="/" className="btn-default-red large-btn mtop-30">
          Begin Verification
        </a>
        <p className="blue f-18 mtop-60">
          <b>Increase your chances of getting jobs by:</b>
        </p>
        <ol className="number-list">
          <li>
            <span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie.
            </span>
          </li>
          <li>
            <span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie.
            </span>
          </li>
        </ol>
        <a href="/" className="btn-default-fb large-btn mtop-30">
          Connect with Facebook
        </a>
      </div>
    </>
  );
};

export default VerificationSection;
