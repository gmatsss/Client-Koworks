import React, { useState } from "react";

import samp_address from "../../../../../imgs/sample-address.jpg";

const AddressForm = () => {
  const [location, setLocation] = useState({
    roomFloorUnitOrBuildingName: "",
    houseLotAndBlockNumber: "",
    streetName: "",
    subdivision: "",
    barangayOrDistrict: "",
    cityOrMunicipality: "",
    province: "",
    postCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form action="#" method="POST" className="" onSubmit={handleSubmit}>
      <div className="kform-group row">
        <div className="col">
          <label htmlFor="roomFloorUnitOrBuildingName" className="b">
            Room/Floor/Unit No. or Bldg. Name
          </label>
          <input
            type="text"
            className="kfield gray f-border"
            name="roomFloorUnitOrBuildingName"
            value={location.roomFloorUnitOrBuildingName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <label htmlFor="houseLotAndBlockNumber" className="b">
            House/Lot & Blk No.
          </label>
          <input
            type="text"
            className="kfield gray f-border"
            name="houseLotAndBlockNumber"
            value={location.houseLotAndBlockNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <label htmlFor="streetName" className="b">
            Street Name
          </label>
          <input
            type="text"
            className="kfield gray f-border"
            name="streetName"
            value={location.streetName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="kform-group row">
        <div className="col">
          <label htmlFor="subdivision" className="b">
            Subdivision
          </label>
          <input
            type="text"
            className="kfield gray f-border"
            name="subdivision"
            value={location.subdivision}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <label htmlFor="barangayOrDistrict" className="b">
            Barangay/District/Locality
          </label>
          <input
            type="text"
            className="kfield gray f-border"
            name="barangayOrDistrict"
            value={location.barangayOrDistrict}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="kform-group row">
        <div className="col">
          <label htmlFor="cityOrMunicipality" className="b">
            City/Municipality
          </label>
          <input
            type="text"
            className="kfield gray f-border"
            name="cityOrMunicipality"
            value={location.cityOrMunicipality}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col">
          <label htmlFor="province" className="b">
            Province
          </label>
          <input
            type="text"
            className="kfield gray f-border"
            name="province"
            value={location.province}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <label htmlFor="postCode" className="b">
            Post Code
          </label>
          <input
            type="number"
            className="kfield gray f-border"
            name="postCode"
            value={location.postCode}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="kform-group kform-btn text-center">
        <input
          type="submit"
          value="Add Address"
          id="address_add"
          className="btn-default-red fn"
        />
      </div>
    </form>
  );
};

const VerifyAddressComponent = () => {
  return (
    <div>
      <section className="banner-section-sa banner-page banner-verify-id">
        <div className="container k-container">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <p className="banner-title-sub red-bg">JOBSEEKERS</p>
                <h1 className="banner-title" style={{ color: "#0A73B8" }}>
                  Verify your Address
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
            <div className="col"></div>
          </div>
          <div className="row mtop-30 align-items-center">
            <div className="col">
              <ul>
                <li>
                  Acceptable documents show your billing address with your name
                  on it, from a (recently issued within last 3 months)
                  telephone, cable, electric, water or other utility bill, or an
                  unexpired (issued within a year) NBI, police or barangay
                  clearance.
                </li>
                <li>
                  If you don't have one, you can use the billing address of a
                  relative. The family name in the billing address should be the
                  same as the family name of the jobseeker in order for this to
                  be approved.
                </li>
                <li>
                  You can also upload a second government ID that shows your
                  address, though it needs to be DIFFERENT than the ID you
                  already uploaded for your account verification.
                </li>
              </ul>
            </div>
          </div>
          <div className="row mtop-45 align-items-center">
            <div className="col">
              <AddressForm />
            </div>
          </div>
          <div className="row mtop-75">
            <div className="col">
              <h2 className="blue text-center">
                Tips for taking a photo of your Billing Address
              </h2>
            </div>
          </div>
          <div className="row mtop-55 align-items-center">
            <div className="col">
              <figure>
                <img src={samp_address} alt="Sample Billing Address" />
              </figure>
            </div>
            <div className="col">
              <ul>
                <li>
                  On a flat surface, take a front photo of your ID (colored, no
                  flash). Make sure all details are captured in the photo.
                  Upload in PNG, JPEG, or PDF format.
                </li>
                <li>
                  Clear photo with the right billing address and full name
                  details
                </li>
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
                Upload Image
              </h1>
              <div className="kform-container">
                <form
                  action="https://linkagekoworks.viewourdesign.info/verify-billing-address"
                  method="POST"
                  enctype="multipart/form-data"
                  className="kform kform-wider"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="Th7NgqHYVlsWaenmn3Ov6WICbc2VUv0x1WNCFCkQ"
                  />
                  <div className="kform-group">
                    <label
                      className="text-left d-block"
                      for="billing_address_img"
                    >
                      Billing Address
                    </label>
                    <input
                      type="file"
                      name="billing_address_img"
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

export default VerifyAddressComponent;
