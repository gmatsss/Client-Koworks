import DashboardIcon from "../../../imgs/icon-dashboard.png";
import EditAccount from "../../../imgs/icon-edit-account-b.png";
import EditProfile from "../../../imgs/icon-edit-account.png";
import SkillIcon from "../../../imgs/icon-skills.png";
import VerifyIcon from "../../../imgs/icon-verify-your-profile.png";
import SearchIcon from "../../../imgs/icon-search-workers.png";
import LogoutIcon from "../../../imgs/icon-logout.png";
import MessageIcon from "../../../imgs/icon-messages.png";
import BookmarkIcon from "../../../imgs/icon-bookmark-employers.png";
import JobpostIcon from "../../../imgs/icon-bookmark-jobposts.png";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <section className="banner-section-sa dashboard">
          <div className="container k-container">
            <div className="row">
              <div className="col-3"></div>
              <div className="col">
                <h1 className="f-55 text-light">jobseekername</h1>
                <p className="f-16 text-light fn">Job Title</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="row">
        {" "}
        <section className="content-section white-bg">
          <div className="container k-container">
            <div className="row">
              <div className="div col-3 px-0 mright-50">
                <div className="jobseekers-sidebar dash-sidebar">
                  <div className="jobseekers-img dash-img">
                    <img
                      src="https://linkagekoworks.viewourdesign.info/storage/images/placeholder-user.png"
                      alt="Profile Photo"
                    />
                    <span className="profile-text">Photo required</span>
                  </div>
                  <div className="jobseekers-menu dash-menu">
                    <ul>
                      <li>
                        <span>
                          <img src={DashboardIcon} alt="Dashboard" />
                        </span>
                        <a href="/" className="u-case f-20 fn blue">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <span>
                          <img src={EditAccount} alt="Edit Account" />
                        </span>
                        <a href="/" className="u-case f-20 fn blue">
                          Edit Account
                        </a>
                      </li>
                      <li>
                        <span>
                          <img src={EditProfile} alt="Edit Profile" />
                        </span>
                        <a href="/" className="u-case f-20 fn blue">
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <span>
                          <img src={SkillIcon} alt="Skills" />
                        </span>
                        <a href="/" className="u-case f-20 fn blue">
                          Skills
                        </a>
                      </li>
                      <li>
                        <span>
                          <img src={VerifyIcon} alt="Verify Your Profile" />
                        </span>
                        <a href="/" className="u-case f-20 fn blue">
                          Verify your Profile
                        </a>
                      </li>
                      <li>
                        <span>
                          <img src={SearchIcon} alt="Search Jobs" />
                        </span>
                        <a href="/" className="u-case f-20 fn blue">
                          Search Jobs
                        </a>
                      </li>

                      <li>
                        <span>
                          <img src={LogoutIcon} alt="Log Out" />
                        </span>
                        <a
                          href="/"
                          className="u-case f-20 fn blue"
                          onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                        >
                          Log Out
                        </a>
                      </li>
                    </ul>
                    <a
                      href="/"
                      target="_blank"
                      className="btn-default-red fn small-btn text-center mtop-20 view-profile"
                    >
                      Create Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="div col px-0">
                <div className="employee-icon-menu">
                  <ul className="d-flex">
                    <li>
                      <div className="ticket-notification"></div>
                      <a href="/">
                        <img src={MessageIcon} alt="Tickets" />
                        <span className="blue fn">Tickets</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={BookmarkIcon} alt="Bookmarked Employers" />
                        <span className="blue fn">Job Board</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://linkagekoworks.viewourdesign.info/bookmark-jobs">
                        <img src={JobpostIcon} alt="Bookmarked Job Posts" />
                        <span className="blue fn">
                          Bookmarked
                          <br />
                          Job Posts
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="verify-content mtop-30">
                  <h2 className="f-35 blue">Verify your Account</h2>
                  <div className="blue-box-content">
                    <form action="/" method="POST" className="d-inline">
                      <input
                        type="hidden"
                        name="_token"
                        value="CTtlAkyYW1mTOABcrburFCdZlDimXQJo38Fn605v"
                      />
                      <p>
                        Click the link in the verification email sent to you.
                      </p>
                      <button
                        type="submit"
                        className="btn-default-red small-btn b blue"
                      >
                        Resend verification email
                      </button>
                    </form>
                  </div>
                  <div className="blue-box-content">
                    <p className="blue f-18">
                      <b>
                        Working via Linkage.ph is very safe, but please follow
                        these warnings:
                      </b>
                    </p>
                    <ol>
                      <li>
                        <span>
                          Never accept money that you are instructed to send to
                          someone else, purchase items, or convert to Bitcoin.
                          Don't send money to an employer/3rd party. Notify us
                          immediately if this is requested.
                        </span>
                      </li>
                      <li>
                        <span>
                          DO NOT allow anybody else to use your account, create
                          secondary accounts, or use fake info. You will be
                          banned from using our site.
                        </span>
                      </li>
                      <li>
                        <span>
                          If possible, ask to be paid each week until you fully
                          trust your employer.
                        </span>
                      </li>
                      <li>
                        <span>
                          Avoid employers that force you to register on a
                          different site as part of the interview process,
                          especially if they request pictures of your passport
                          and other sensitive information.
                        </span>
                      </li>
                    </ol>
                  </div>
                  <div className="blue-box-content">
                    <p className="blue f-18">
                      <b>
                        Your account has now been selected for our required
                        Account Verification Process, shown below:
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
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse molestie.
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
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse molestie.
                      </span>
                    </li>
                    <li>
                      <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse molestie.
                      </span>
                    </li>
                  </ol>
                  <a href="/" className="btn-default-fb large-btn mtop-30">
                    Connect with Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
