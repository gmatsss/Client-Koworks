import Userimgdefault from "../../../../imgs/default-user-image.png";
import Dollarsign from "../../../../imgs/dollar-sign.png";
import Noteicon from "../../../../imgs/note-icon.png";
import Fbicon from "../../../../imgs/fb-icon.png";

const W_jobseeker = () => {
    return (
        <div className="row recent-jobseekers">
            <div className="col col-3 px-0 text-center">
                <div className="box-white">
                    <a href="https://linkagekoworks.viewourdesign.info/profile/1004">
                        <img src={Userimgdefault} alt="Virtual Assistants" />
                        <h3 className="regular-header">
                            Senior Project Manager &amp; Operations Manager
                        </h3>
                        <p>Years of Experience: 6</p>
                        <div className="user-meta">
                            <div className="umeta-left">
                                <span className="salary">
                                    <img
                                        src={Dollarsign}
                                        alt="Expected Salary"
                                    />
                                    <span>1,900/month</span>
                                </span>
                            </div>
                            <div className="umeta-right">
                                <span className="comment">
                                    <img src={Noteicon} alt="Comments" />
                                </span>
                                <span className="fb">
                                    <img src={Fbicon} alt="Facebook Account" />
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default W_jobseeker;
