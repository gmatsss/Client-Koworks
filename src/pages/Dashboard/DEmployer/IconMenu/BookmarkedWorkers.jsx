import React from "react";
import { Link } from "react-router-dom";

const BookmarkedWorkers = () => {
  return (
    <div className="your-bookmarks mtop-30">
      <h2 className="f-35 blue mbot-40">Recent Bookmarked Workers</h2>
      <p>You don't have any pinned workers yet.</p>

      <div className="row">
        <div className="col text-center">
          <Link
            to="https://linkagekoworks.viewourdesign.info/all-bookmark-workers"
            className="btn-default-red small-btn"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookmarkedWorkers;
