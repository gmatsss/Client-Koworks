const PhoneVerification = () => {
  return (
    <div>
      {" "}
      <section className="banner-section-sa banner-page banner-verify-phone">
        <div className="container k-container">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <p className="banner-title-sub red-bg">JOBSEEKERS</p>
                <h1 className="banner-title" style={{ color: "#0A73B8" }}>
                  Verify your Mobile Number
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section white-bg verify-phone-content">
        <div className="container k-container">
          <div className="row">
            <div className="col">
              <div className="alert alert-success d-none">
                Phone Verification Complete!
              </div>
              <form
                id="phone-form"
                action="https://linkagekoworks.viewourdesign.info/verify-phone"
                method="POST"
                className="kform kform-wider"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="Th7NgqHYVlsWaenmn3Ov6WICbc2VUv0x1WNCFCkQ"
                />
                <div className="kform-group">
                  <label className="text-left d-block b" for="number">
                    Enter your Mobile Number
                  </label>
                  <span className="note">
                    Note: Mobile number must be valid number from the
                    Philippines.
                  </span>
                  <div className="phone-field">
                    <span className="phone-text">+63</span>
                    <input
                      type="text"
                      name="number"
                      className="kfield gray f-border"
                      placeholder="example: 9151234567"
                      required
                    />
                  </div>
                </div>
                <div className="kform-group inline-radio mtop-30">
                  <input
                    type="submit"
                    value="Send Verification"
                    id="verify-phone"
                    className="btn-default-red fn"
                  />
                </div>
                <p className="mtop-45 b u-case">Your phone is verified.</p>
              </form>

              <form
                id="code-form"
                action="https://linkagekoworks.viewourdesign.info/verify-code"
                method="POST"
                className="kform kform-wider d-none"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="Th7NgqHYVlsWaenmn3Ov6WICbc2VUv0x1WNCFCkQ"
                />
                <div className="kform-group">
                  <label className="text-left d-block b" for="number">
                    Enter the verification code
                  </label>
                  <input
                    type="text"
                    name="phone_code"
                    className="kfield gray f-border"
                    required
                  />
                </div>
                <div className="kform-group inline-radio mtop-30">
                  <input
                    type="submit"
                    value="Send Code"
                    id="verify-code"
                    className="btn-default-red fn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhoneVerification;
