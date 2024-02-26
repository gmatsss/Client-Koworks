import React from "react";

const BannerSection = ({ name, title }) => {
  return (
    <section className="banner-section-sa dashboard">
      <div className="container k-container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col">
            <h1 className="f-55 white">{name}</h1>
            <p className="f-16 white fn">{title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
