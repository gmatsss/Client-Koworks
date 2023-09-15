import { Fragment, useContext, useEffect, useState } from "react";
import RadioInput from "./components/RadioInput";
import LocationInput from "./components/LocationInput";
import LocationAndCurrencyInput from "./components/LocationAndCurrencyInput";
import { UserContext } from "../../../../context/UserContext";
import { toast } from "react-toastify";
import { fetchData } from "../../../../api/api";
import UpdateCredentials from "./components/UpdateCredentials";

const EditAccount = () => {
  const { currentUser, fetchUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser) {
      setFullName(currentUser.fullname);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  const [countriesData, setCountriesData] = useState([]);

  async function fetchCountries() {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching countries:", error);
      return [];
    }
  }

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    fetchCountries().then((data) => {
      setCountriesData(data);
      setAllCountries(data.map((country) => country.name));
    });
  }, []);

  const [fullName, setFullName] = useState(
    currentUser ? currentUser.fullname : ""
  );
  const [email, setEmail] = useState(currentUser ? currentUser.email : "");
  const businessProfile = currentUser ? currentUser.businessProfile : null;

  const [businessName, setBusinessName] = useState(
    businessProfile ? businessProfile.businessName : ""
  );
  const [contactName, setContactName] = useState(
    businessProfile ? businessProfile.contactName : ""
  );
  const [address, setAddress] = useState(
    businessProfile ? businessProfile.address : ""
  );
  const [zipCode, setZipCode] = useState(
    businessProfile ? businessProfile.zipCode : ""
  );
  const [phone, setPhone] = useState(
    businessProfile ? businessProfile.phone : ""
  );
  const [website, setWebsite] = useState(
    businessProfile ? businessProfile.website : ""
  );
  const [gender, setGender] = useState(
    businessProfile ? businessProfile.gender : ""
  );
  const [selectedCountry, setSelectedCountry] = useState(
    businessProfile ? businessProfile.selectedCountry : ""
  );
  const [selectedTimezone, setSelectedTimezone] = useState(
    businessProfile ? businessProfile.selectedTimezone : "Select Timezone"
  );
  const [selectedCurrency, setSelectedCurrency] = useState(
    businessProfile ? businessProfile.selectedCurrency : ""
  );

  useEffect(() => {
    if (currentUser) {
      setFullName(currentUser.fullname);
      setEmail(currentUser.email);

      if (currentUser.businessProfile) {
        const bp = currentUser.businessProfile;
        setBusinessName(bp.businessName);
        setContactName(bp.contactName);
        setAddress(bp.address);
        setZipCode(bp.zipCode);
        setPhone(bp.phone);
        setWebsite(bp.website);
        setGender(bp.gender);
        setSelectedCountry(bp.selectedCountry);
        setSelectedTimezone(bp.selectedTimezone);
        setSelectedCurrency(bp.selectedCurrency);
      }
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formData = {
      fullName,
      email,
      businessName,
      contactName,
      address,
      selectedCountry,
      zipCode,
      phone,
      selectedTimezone,
      selectedCurrency,
      website,
      gender,
    };

    // Validation: Check if all fields have values
    for (const [key, value] of Object.entries(formData)) {
      if (!value || value.trim() === "") {
        toast.warning(`Please provide a value for ${key}`);
        return; // Exit the function if any field is empty
      }
    }

    try {
      const response = await fetchData(
        "EmployerRoutes/updateOrCreateProfile",
        "POST",
        formData
      );

      if (response.message) {
        switch (response.message) {
          case "Business profile updated successfully.":
          case "Business profile created successfully.":
            toast.success(response.message);
            fetchUser();
            break;
          case "User not found.":
          case "You are not authorized.":
            toast.warning(response.message);
            break;
          default:
            toast.info(response.message);
            break;
        }
      }
    } catch (error) {
      console.error("Error updating or creating business profile:", error);
      toast.error(error.message || "An unexpected error occurred");
    }
  };

  return (
    <Fragment>
      <div className="kform-container">
        <form
          onSubmit={handleSubmit} // Attach the handleSubmit function here
          className="kform kform-wider"
        >
          <h3 className="f-35 blue">Personal Information</h3>
          <div className="kform-group colstwo mtop-20 relative">
            <div className="col relative px-0 mright-23">
              <input
                type="text"
                className="kfield gray f-border"
                name="name"
                placeholder="Full name"
                value={fullName} // Use the fullname from currentUser
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="col relative px-0 mleft-23">
              <input
                type="email"
                className="kfield gray f-border"
                name="email"
                placeholder="Email Address"
                value={email} // Use the fullname from currentUser
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="kform-group colstwo mtop-20 relative">
            <div className="col relative px-0 mright-23">
              <input
                type="text"
                className="kfield gray f-border"
                name="business_name"
                placeholder="Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
            <div className="col relative px-0 mleft-23">
              <input
                type="text"
                className="kfield gray f-border"
                name="contact_name"
                placeholder="Contact Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </div>
          </div>
          <div className="kform-group relative mtop-20">
            <input
              type="text"
              name="address"
              className="kfield gray email f-border"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <LocationInput
            onCountryChange={handleCountryChange}
            selectedCountry={selectedCountry}
            allCountries={allCountries}
          />

          <div className="kform-group colstwo mtop-20 relative">
            <div className="col relative px-0 mright-23">
              <input
                type="text"
                className="kfield gray f-border"
                name="zip_code"
                placeholder="Zip/Post Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>
            <div className="col relative px-0 mleft-23">
              <input
                type="text"
                className="kfield gray f-border"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <LocationAndCurrencyInput
            selectedCountry={selectedCountry}
            selectedTimezone={selectedTimezone}
            setSelectedTimezone={setSelectedTimezone}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
            countriesData={countriesData} // Pass countriesData as a prop
          />

          <div className="kform-group relative mtop-20">
            <input
              type="text"
              name="website"
              className="kfield gray email f-border"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="kform-group inline-radio mtop-20">
            <h3 className="f-20 b blue">Gender</h3>
            <RadioInput
              name="gender"
              id="male"
              value="male"
              label="Male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <RadioInput
              name="gender"
              id="female"
              value="female"
              label="Female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />

            <input
              type="submit"
              value="Save Changes"
              id="esubmit"
              className="btn-default-red fn float-right"
            />
          </div>
        </form>
      </div>
      <div className="edit-acct-btns mtop-45">
        <ul className="d-flex list-style-none">
          <li>
            <a href="#" className="btn-default-blue">
              Remove Account
            </a>
          </li>
          <li>
            <a href="#" className="btn-default-blue">
              Upgrade Account
            </a>
          </li>
          <li>
            <a
              href="#"
              className="btn-default-blue"
              data-bs-toggle="modal"
              data-bs-target="#updateCreds"
            >
              Click here to Edit Login
            </a>
          </li>
        </ul>
      </div>

      <UpdateCredentials />

      <div
        className="modal fade"
        id="editPhoto"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="editPhotoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content ptb-40">
            <div className="modal-body text-center">
              <h1 className="f-35 b blue" id="editPhotoLabel">
                Upload Photo
              </h1>

              <form enctype="multipart/form-data">
                <input
                  type="hidden"
                  name="_token"
                  value="uN84ZuNDqkqH34d6No4If7R4lpglWl7KT2LQp1Hi"
                />
                <input
                  type="file"
                  className="kfield gray f-border"
                  name="image"
                />
                <input
                  type="submit"
                  value="Submit"
                  name="upload_photo"
                  id="upload_photo"
                  className="btn-default-red fn small-btn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditAccount;
