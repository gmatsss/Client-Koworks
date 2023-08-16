import SocmedVA from "../../../imgs/social-media-va.png";
import Remoterogrammer from "../../../imgs/remote-programmers.png";
import Graphicdesigner from "../../../imgs/filipino-graphic-designers.png";
import AmazonVa from "../../../imgs/amazon-va.png";
import GenVa from "../../../imgs/general-va.png";
import Seoexpert from "../../../imgs/seo-experts.png";
import Accountant from "../../../imgs/accountants.png";
import Bpoagent from "../../../imgs/bpo.png";

const Talented_f = () => {
  return (
    <section className="content-section white-bg browse-workers">
      <div className="container k-container">
        <div className="row">
          <div className="col col-md-12 px-0">
            <h2 className="section-title">
              <span className="f-45">Browse Talented Filipino Workers</span>
            </h2>
          </div>
        </div>
        <div className="row row-icon-box mtop-75">
          <div className="col col-md-3 px-0">
            <div className="col-icon-box">
              <img src={SocmedVA} alt="Social Media Virtual Assistants" />
              <h3>
                <a href="https://linkagekoworks.viewourdesign.info/search?s=ads">
                  Social Media Virtual Assistants
                </a>
              </h3>
            </div>
          </div>
          <div className="col col-md-3 px-0">
            <div className="col-icon-box">
              <img
                src={Remoterogrammer}
                alt="Remote Programmers and Developers"
              />
              <h3>
                <a href="https://linkagekoworks.viewourdesign.info/search?s=programmers">
                  Remote Programmers and Developers
                </a>
              </h3>
            </div>
          </div>
          <div className="col col-md-3 px-0">
            <div className="col-icon-box">
              <img src={Graphicdesigner} alt="Filipino Graphic Designers" />
              <h3>
                <a href="https://linkagekoworks.viewourdesign.info/search?s=design">
                  Filipino Graphic Designers
                </a>
              </h3>
            </div>
          </div>
          <div className="col col-md-3 px-0">
            <div className="col-icon-box">
              <img src={AmazonVa} alt="Amazon Virtual Assistants" />
              <h3>
                <a href="https://linkagekoworks.viewourdesign.info/search?s=amazon">
                  Amazon Virtual Assistants
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="row row-icon-box">
          <div className="col col-md-3 px-0">
            <div className="col-icon-box">
              <img src={GenVa} alt="General Virtual Assistants" />
              <h3>
                <a href="https://linkagekoworks.viewourdesign.info/search?s=assistant">
                  General Virtual Assistants
                </a>
              </h3>
            </div>
          </div>
          <div className="col col-md-3 px-0">
            <div className="col-icon-box">
              <img src={Seoexpert} alt="SEO Experts / Digital Marketers" />
              <h3>
                <a href="https://linkagekoworks.viewourdesign.info/search?s=seo">
                  SEO Experts / Digital Marketers
                </a>
              </h3>
            </div>
          </div>
          <div className="col col-md-3 px-0">
            <div className="col-icon-box">
              <img src={Accountant} alt="accountants and Bookkepers" />
              <h3>
                <a href="https://linkagekoworks.viewourdesign.info/search?s=account">
                  Accountants and Bookkepers
                </a>
              </h3>
            </div>
          </div>
          <div className="col col-md-3 px-0">
            <div className="col-icon-box">
              <img src={Bpoagent} alt="Telemarketing and Call Center / BPO" />
              <h3>
                <a href="https://linkagekoworks.viewourdesign.info/search?s=bpo">
                  Telemarketing and Call Center / BPO
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talented_f;
