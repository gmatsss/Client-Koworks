const VerificationSection = () => (
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
    <div className="blue-box-content">
      <p className="blue f-18">
        <b>
          Working via Linkage.ph is very safe, but please follow these warnings:
        </b>
      </p>
      <ol>
        <li>
          <span>
            Never accept money that you are instructed to send to someone else,
            purchase items, or convert to Bitcoin. Don't send money to an
            employer/3rd party. Notify us immediately if this is requested.
          </span>
        </li>
        <li>
          <span>
            DO NOT allow anybody else to use your account, create secondary
            accounts, or use fake info. You will be banned from using our site.
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
            Avoid employers that force you to register on a different site as
            part of the interview process, especially if they request pictures
            of your passport and other sensitive information.
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
);

export default VerificationSection;
