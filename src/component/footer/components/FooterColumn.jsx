import { Link } from "react-router-dom";
const FooterColumn = ({ title, links }) => (
  <div className="col col-md-3">
    <h3>{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.href}>{link.text}</Link>{" "}
          {/* Using Link here instead of a */}
        </li>
      ))}
    </ul>
  </div>
);

export default FooterColumn;
