import React from "react";
import govid from "../../../../imgs/government-id-verification.png";
import address from "../../../../imgs/address-verification.png";
import phonno from "../../../../imgs/mobile-phone-number-verification.png";
import { Link } from "react-router-dom";

const VerificationComponent = () => {
  return (
    <div>
      <section className="banner-section-sa verify-banner">
        <div className="container k-container">
          <div className="row">
            <div className="col text-center">
              <h1 className="f-35 white">
                Verify your Identity in 3 Easy Steps
              </h1>
              <p className="f-16 white fn">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container k-container">
          <div className="row">
            {/* Government ID Verification */}
            <div className="col">
              <div className="verify-box text-center">
                <div className="vb-img">
                  <img src={govid} alt="Government ID Verification" />
                </div>
                <div className="vb-content">
                  <h4>
                    Government ID
                    <br />
                    Verification (Required)
                  </h4>
                  <h5 className="red">+25 ID PROOF</h5>
                  <p>
                    Upload a photo of your valid Government ID and a selfie
                    holding it
                  </p>
                  <Link
                    to="/ProfileVerification"
                    className="btn-default-blue text-center small-btn"
                  >
                    Verify My ID
                  </Link>
                </div>
              </div>
            </div>

            {/* Address Verification */}
            <div className="col">
              <div className="verify-box text-center">
                <div className="vb-img">
                  <img src={address} alt="Address Verification" />
                </div>
                <div className="vb-content">
                  <h4>
                    Address Verification <br />
                    (Optional)
                  </h4>
                  <h5 className="red">+20 ID PROOF</h5>
                  <p>
                    Upload a photo of the document showing your billing address
                  </p>
                  <Link
                    to="/VerifyAddressComponent"
                    className="btn-default-blue text-center small-btn"
                  >
                    Verify My Address
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Number Verification */}
            <div className="col">
              <div className="verify-box text-center">
                <div className="vb-img">
                  <img src={phonno} alt="Mobile Number Verification" />
                </div>
                <div className="vb-content">
                  <h4>
                    Mobile Number
                    <br />
                    Verification (Optional)
                  </h4>
                  <h5 className="red">+20 ID PROOF</h5>
                  <p>
                    Enter your mobile number and we’ll send you a verification
                    code
                  </p>

                  <Link
                    to="/PhoneVerification"
                    className="btn-default-blue text-center small-btn"
                  >
                    Verify My Number
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center mtop-60">
            <div>
              <Link
                to="/DJobSeeker"
                className="btn-default-red small-btn btd-btn"
              >
                Back To Profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerificationComponent;
