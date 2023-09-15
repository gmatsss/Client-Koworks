import React, { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";

const BannerSection = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <section className="banner-section-sa dashboard">
      <div className="container k-container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col">
            <h1 className="f-55 white">{currentUser.fullname}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
