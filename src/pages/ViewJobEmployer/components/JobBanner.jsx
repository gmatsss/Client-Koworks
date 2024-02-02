import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faClock,
  faCalendar,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const JobBanner = ({ title, salary, jobType, datePosted, idScore }) => {
  return (
    <section className="banner-section-sa banner-jobs banner-112">
      <div className="container k-container">
        <div className="row">
          <div className="col">
            <h1 className="f-55 white">{title}</h1>
          </div>
        </div>
        <div className="row banner-job-meta text-white">
          <div className="col text-center">
            <span className="salary-banner">
              <FontAwesomeIcon icon={faMoneyBillWave} />
              <span>{salary}</span>
            </span>
          </div>
          <div className="col text-center">
            <span className="job-type-banner">
              <FontAwesomeIcon icon={faClock} />
              {jobType}
            </span>
          </div>
          <div className="col text-center">
            <span className="date-banner">
              <FontAwesomeIcon icon={faCalendar} />
              {datePosted}
            </span>
          </div>
          <div className="col text-center">
            <span className="id-proof">
              <FontAwesomeIcon icon={faIdCard} />
              {idScore}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobBanner;
