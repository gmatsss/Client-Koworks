import MessageIcon from "../../../../imgs/icon-messages.png";
import BookmarkIcon from "../../../../imgs/icon-bookmark-employers.png";
import JobpostIcon from "../../../../imgs/icon-bookmark-jobposts.png";
import { Link } from "react-router-dom";

const EmployeeIconMenu = () => (
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
        <Link to="/DJobSeeker/Lisofjobapplied">
          <img src={BookmarkIcon} alt="Bookmarked Employers" />
          <span className="blue fn">Job Applied</span>
        </Link>
      </li>
      <li>
        <Link to="/DJobSeeker/listofpinjobs">
          <img src={JobpostIcon} alt="Bookmarked Job Posts" />
          <span className="blue fn">
            Bookmarked
            <br />
            Job Posts
          </span>
        </Link>
      </li>
    </ul>
  </div>
);

export default EmployeeIconMenu;
