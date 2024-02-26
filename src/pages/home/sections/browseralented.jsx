import React from "react";
import { useNavigate } from "react-router-dom";

// Import images
import SocmedVA from "../../../imgs/social-media-va.png";
import Remoterogrammer from "../../../imgs/remote-programmers.png";
import Graphicdesigner from "../../../imgs/filipino-graphic-designers.png";
import AmazonVa from "../../../imgs/amazon-va.png";
import GenVa from "../../../imgs/general-va.png";
import Seoexpert from "../../../imgs/seo-experts.png";
import Accountant from "../../../imgs/accountants.png";
import Bpoagent from "../../../imgs/bpo.png";

const Talented_f = () => {
  const navigate = useNavigate();

  const navigateToSearch = (searchParam) => {
    navigate(`/SearchJob?s=${searchParam}`);
  };

  return (
    <section className="content-section white-bg browse-workers">
      <div className="container k-container text-center">
        <div className="row">
          <div className="col col-md-12 px-0">
            <h2 className="section-title">
              <span className="f-45">Browse Talented Filipino Workers</span>
            </h2>
          </div>
        </div>
        <div className="row row-icon-box mtop-75">
          {/* Social Media Virtual Assistants */}
          <div
            className="col col-md-3 px-0"
            onClick={() => navigateToSearch("social-media")}
          >
            <div className="col-icon-box">
              <img src={SocmedVA} alt="Social Media Virtual Assistants" />
              <span className="talented_f_span">
                Social Media Virtual Assistants
              </span>
            </div>
          </div>
          {/* Remote Programmers and Developers */}
          <div
            className="col col-md-3 px-0"
            onClick={() => navigateToSearch("programmers")}
          >
            <div className="col-icon-box">
              <img
                src={Remoterogrammer}
                alt="Remote Programmers and Developers"
              />
              <span className="talented_f_span">
                Programmers and Developers
              </span>
            </div>
          </div>
          {/* Filipino Graphic Designers */}
          <div
            className="col col-md-3 px-0"
            onClick={() => navigateToSearch("graphic-designers")}
          >
            <div className="col-icon-box">
              <img src={Graphicdesigner} alt="Filipino Graphic Designers" />
              <span className="talented_f_span">
                Filipino Graphic Designers
              </span>
            </div>
          </div>
          {/* Amazon Virtual Assistants */}
          <div
            className="col col-md-3 px-0"
            onClick={() => navigateToSearch("amazon-va")}
          >
            <div className="col-icon-box">
              <img src={AmazonVa} alt="Amazon Virtual Assistants" />
              <span className="talented_f_span">Amazon Virtual Assistants</span>
            </div>
          </div>
          {/* General Virtual Assistants */}
          <div
            className="col col-md-3 px-0"
            onClick={() => navigateToSearch("general-va")}
          >
            <div className="col-icon-box">
              <img src={GenVa} alt="General Virtual Assistants" />
              <span className="talented_f_span">
                General Virtual Assistants
              </span>
            </div>
          </div>
          {/* SEO Experts / Digital Marketers */}
          <div
            className="col col-md-3 px-0"
            onClick={() => navigateToSearch("seo-experts")}
          >
            <div className="col-icon-box">
              <img src={Seoexpert} alt="SEO Experts / Digital Marketers" />
              <span className="talented_f_span">
                SEO Experts / Digital Marketers
              </span>
            </div>
          </div>
          {/* Accountants and Bookkeepers */}
          <div
            className="col col-md-3 px-0"
            onClick={() => navigateToSearch("accountants")}
          >
            <div className="col-icon-box">
              <img src={Accountant} alt="Accountants and Bookkeepers" />
              <span className="talented_f_span">
                Accountants and Bookkeepers
              </span>
            </div>
          </div>

          {/* Telemarketing and Call Center / BPO */}
          <div
            className="col col-md-3 px-0"
            onClick={() => navigateToSearch("bpo")}
          >
            <div className="col-icon-box">
              <img src={Bpoagent} alt="Telemarketing and Call Center / BPO" />
              <span className="talented_f_span">
                Telemarketing and Call Center / BPO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talented_f;
