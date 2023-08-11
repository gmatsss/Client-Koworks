import React from "react";
import logo from "../../imgs/linkage-logo.png";
import FooterColumn from "./components/FooterColumn";

const Footer = () => {
  const columns = [
    {
      title: "Employers",
      links: [
        { href: "/", text: "How It Works" },
        { href: "/", text: "Register" },
        { href: "/", text: "Post a Job" },
        { href: "/", text: "Blog" },
        { href: "/", text: "FAQ" },
        { href: "#", text: "Timeproof" },
      ],
    },
    {
      title: "Workers",
      links: [
        { href: "/", text: "How It Works" },
        { href: "/", text: "Register" },
        { href: "/", text: "Post your skills" },
        { href: "/", text: "Job Search" },
        { href: "/", text: "Life as Virtual Assistant" },
      ],
    },
    {
      title: "Talented VA's",
      links: [
        { href: "/", text: "SEO VA's" },
        { href: "/", text: "WordPress Experts" },
        { href: "/", text: "Graphic Designers" },
        { href: "/", text: "Content Writers" },
        { href: "/", text: "Bookkeeping VA's" },
        { href: "/", text: "Social Media Manager" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { href: "/", text: "FAQ" },
        { href: "/", text: "Blog" },
        { href: "/", text: "About Us" },
        { href: "/", text: "Contact Us" },
        { href: "/", text: "Privacy Policy" },
        { href: "/", text: "Terms of Use" },
      ],
    },
  ];

  return (
    <footer>
      <section className="top-footer">
        <div className="container k-container">
          <div className="row">
            {columns.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bottom-footer">
        <div className="container k-container">
          <div className="row align-items-center">
            <div className="col col-md-6">
              <a href="/">
                <img src={logo} alt="Linkage Logo" />
              </a>
            </div>
            <div className="col col-md-6 text-center">
              <p className="copy">
                Copyright © 2023 Linkage.ph. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
