import React from "react";
import { Link } from "react-router-dom";

const HiredWorkers = () => {
  return (
    <div className="hired-workers-container mtop-30">
      <h2 className="f-35 blue mbot-40">Recent Hired Workers</h2>
      <p>No workers hired.</p>

      <div className="row mtop-45">
        <div className="col text-center">
          <Link
            href="https://linkagekoworks.viewourdesign.info/search"
            className="btn-default-red small-btn f-16 fn white text-center btn-wide"
          >
            Start Hiring Now
          </Link>
        </div>
        <div className="col text-center">
          <Link
            href="https://linkagekoworks.viewourdesign.info/all-hired-workers"
            className="btn-default-red small-btn f-16 fn white text-center btn-wide"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HiredWorkers;
