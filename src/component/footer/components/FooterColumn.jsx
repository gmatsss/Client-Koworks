const FooterColumn = ({ title, links }) => (
  <div className="col col-md-3">
    <h3>{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterColumn;
