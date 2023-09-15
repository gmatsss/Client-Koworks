import sampid from "../../../../../imgs/sample-id.png";
import sampid_b from "../../../../../imgs/sample-id-b.png";
import sampid_c from "../../../../../imgs/sample-id-c.png";
const ProfileVerification = () => {
  return (
    <div>
      <section className="banner-section-sa banner-page banner-verify-id">
        <div className="container k-container">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <p className="banner-title-sub red-bg">JOBSEEKERS</p>
                <h1 className="banner-title" style={{ color: "#0A73B8" }}>
                  Verify your Profile
                </h1>
                <p>Required Documents to verify your Linkage account</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section white-bg verify-id-content">
        <div className="container k-container">
          <div className="row">
            <div className="col">
              <h2 className="blue text-center">
                You will need to take a picture of your
                <br />
                government-issued ID in order to verify your identity.
              </h2>
            </div>
          </div>
          <div className="row mtop-30 align-items-center">
            <div className="col">
              <figure>
                <img src={sampid} alt="Sample ID" />
              </figure>
            </div>
            <div className="col">
              <ul>
                <li>
                  This ID must include your picture, signature, name, date of
                  birth, and address, with the exception of passports, which
                  don’t need your address
                </li>
                <li>
                  Acceptable documents include passport, national ID card
                  (NIC/CNIC), driver’s license, NBI Clearance (Philippines
                  only), tax ID, voter ID, postal ID, or any other valid
                  government-issued photo ID that meets these criteria
                </li>
              </ul>
            </div>
          </div>
          <div className="row mtop-45 align-items-center">
            <div className="col">
              <ul>
                <li>
                  Don’t crop, rotate, touch up, adjust colors, or alter the
                  images in any way.
                </li>
                <li>
                  Your ID should be the same person as your Linkage profile
                  photo, and your profile name.
                </li>
                <li>It should match your Linkage profile address.</li>
                <li>
                  Note that we cannot accept Student IDs, employee IDs, library
                  cards, handwritten IDs, temporary IDs, photocopied IDs,
                  military IDs, and health cards.
                </li>
              </ul>
            </div>
            <div className="col">
              <figure>
                <img src={sampid_b} alt="Sample ID" />
              </figure>
            </div>
          </div>
          <div className="row mtop-75">
            <div className="col">
              <h2 className="blue text-center">
                Tips for taking a photo of your government ID
              </h2>
            </div>
          </div>
          <div className="row mtop-55 align-items-center">
            <div className="col">
              <figure>
                <img src={sampid_c} alt="Sample ID" />
              </figure>
            </div>
            <div className="col">
              <ul>
                <li>Take a photo of the front of your ID, without flash</li>
                <li>
                  Capture the image from above, with your ID on a flat surface
                </li>
                <li>Ensure all four corners of your ID are showing</li>
                <li>Take the photo in color (at least 200 dpi)</li>
                <li>Upload your photo in PNG, JPEG</li>
              </ul>
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#verifyID"
                className="btn-default-red text-center small-btn mtop-45"
              >
                Upload Photo
              </a>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="verifyID"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="verifyIDLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content ptb-40">
            <div className="modal-body text-center">
              <h1 className="f-35 b blue" id="verifyIDLabel">
                Upload Images
              </h1>
              <div className="kform-container">
                <form
                  action="https://linkagekoworks.viewourdesign.info/verify-id"
                  method="POST"
                  enctype="multipart/form-data"
                  className="kform kform-wider"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="Th7NgqHYVlsWaenmn3Ov6WICbc2VUv0x1WNCFCkQ"
                  />
                  <div
                    className="alert alert-success"
                    style={{ display: "none" }}
                  ></div>
                  <div className="kform-group">
                    <label className="text-left d-block" for="government_id">
                      Government ID
                    </label>
                    <input
                      type="file"
                      name="government_id"
                      className="kfield gray f-border"
                      required
                    />
                  </div>
                  <div className="kform-group">
                    <label className="text-left d-block" for="photo_with_id">
                      Photo with ID
                    </label>
                    <input
                      type="file"
                      name="photo_with_id"
                      className="kfield gray f-border"
                      required
                    />
                  </div>
                  <div className="kform-group inline-radio mtop-20">
                    <input
                      type="submit"
                      value="Upload Photos"
                      id="upload_photos"
                      className="btn-default-red fn"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileVerification;
