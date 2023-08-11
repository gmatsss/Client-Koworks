import MessageIcon from "../../../../imgs/icon-messages.png";
import BookmarkIcon from "../../../../imgs/icon-bookmark-employers.png";
import JobpostIcon from "../../../../imgs/icon-bookmark-jobposts.png";

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
);

export default EmployeeIconMenu;
