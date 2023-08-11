const ProfileBanner = ({ name, jobTitle }) => (
  <section className="banner-section-sa dashboard">
    <div className="container k-container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col">
          <h1 className="f-55 text-light">{name}</h1>
          <p className="f-16 text-light fn">{jobTitle}</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProfileBanner;
