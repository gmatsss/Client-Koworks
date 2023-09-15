import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

// Importing images
import iconPostList from "../../../../imgs/icon-post-list.png";
import iconMessages from "../../../../imgs/icon-messages.png";
import iconHiredWorkers from "../../../../imgs/icon-hired-workers.png";
import iconBookmarkedWorkers from "../../../../imgs/icon-bookmarked-workers.png";
import iconAffiliates from "../../../../imgs/icon-affiliates.png";

const IconMenu = () => (
  <div className="employer-icon-menu">
    <ul className="d-flex nav nav-tabs">
      <li>
        <Link to="/DEmployer/jobposts">
          <img src={iconPostList} alt="Job Posts" />
          <span className="blue fn">Job Posts</span>
        </Link>
      </li>
      <li>
        {/* If the modal behavior is handled by Bootstrap, you might need to keep the <a> tag for this specific link */}
        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#upgradeSubscription"
        >
          <img src={iconMessages} alt="Messages" />
          <span className="blue fn">Messages</span>
        </a>
      </li>
      <li>
        <Link to="/DEmployer/HiredWorkers">
          <img src={iconHiredWorkers} alt="Hire Workers" />
          <span className="blue fn">Hired Workers</span>
        </Link>
      </li>
      <li>
        <Link to="/DEmployer/BookmarkedWorkers">
          <img src={iconBookmarkedWorkers} alt="Bookmarked Workers" />
          <span className="blue fn">Bookmarked Workers</span>
        </Link>
      </li>
      <li>
        {/* If this is an internal route, replace the href with the appropriate route */}
        <Link to="#">
          <img src={iconAffiliates} alt="Affiliates" />
          <span className="blue fn">Affiliates</span>
        </Link>
      </li>
    </ul>
  </div>
);

export default IconMenu;
