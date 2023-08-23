import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "../../../../imgs/icon-dashboard.png";
import EditAccount from "../../../../imgs/icon-edit-account-b.png";
import EditProfile from "../../../../imgs/icon-edit-account.png";
import SkillIcon from "../../../../imgs/icon-skills.png";
import VerifyIcon from "../../../../imgs/icon-verify-your-profile.png";
import SearchIcon from "../../../../imgs/icon-search-workers.png";
import LogoutIcon from "../../../../imgs/icon-logout.png";
import { fetchData } from "../../../../api/api";
import { useLocation } from "react-router-dom";

import { toast } from "react-toastify"; // Assuming you're using react-toastify for toasts
import { Modal } from "bootstrap";
import { UserContext } from "../../../../context/UserContext";
import useOnce from "../../../../api/useOnce";

const MenuItem = ({ icon, altText, link, text }) => (
  <li>
    <span>
      <img src={icon} alt={altText} />
    </span>
    <Link to={link} className="u-case f-20 fn blue">
      {text}
    </Link>
  </li>
);

const Sidebar = () => {
  const { currentUser, fetchUser } = useContext(UserContext);

  const location = useLocation();
  const modalRef = useRef(null);
  const [hasSkill, setHasSkill] = useState(false);

  const [hasEmployeeProfile, setHasEmployeeProfile] = useState(null);
  const [profileImage, setProfileImage] = useState(
    "https://linkagekoworks.viewourdesign.info/storage/images/placeholder-user.png" // default image
  );

  useOnce(checkEmployeeProfile);

  useEffect(() => {
    if (
      currentUser &&
      currentUser.employeeProfile &&
      currentUser.employeeProfile.img
    ) {
      setProfileImage(currentUser.employeeProfile.img);
    } else {
      setProfileImage(
        "https://linkagekoworks.viewourdesign.info/storage/images/placeholder-user.png"
      );
    }
  }, [currentUser]);

  async function checkEmployeeProfile() {
    // Check if the currentUser has an employeeProfile
    if (currentUser) {
      if (currentUser.employeeProfile) {
        setHasEmployeeProfile(true);
        if (currentUser.employeeProfile.img) {
          setProfileImage(currentUser.employeeProfile.img); // set the fetched image URL
        }
      } else {
        setHasEmployeeProfile(false);
      }

      // Check if the currentUser has a skill
      if (currentUser.skill) {
        setHasSkill(true);
      } else {
        setHasSkill(false);
      }
    }
  }

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.warning("Please select an image before submitting.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64 = reader.result;
      try {
        const response = await fetchData(
          "JobSeekerRoutes/Updateprofile",
          "POST",
          { img: base64 }
        );
        if (response && response.data) {
          // Assuming the API returns a success field
          toast.success("Profile image updated successfully.");

          // Fetch the updated user data
          fetchUser();

          // Close the modal
          const bootstrapModal = Modal.getInstance(modalRef.current);
          bootstrapModal.hide();
        } else {
          toast.error(response.message || "Error updating profile image.");
        }
      } catch (error) {
        toast.error("An error occurred while updating the profile image.");
      }
    };
  };

  const showModal = () => {
    const bootstrapModal = new Modal(modalRef.current);
    bootstrapModal.show();
  };

  const handleDivClick = () => {
    if (location.pathname === "/DJobSeeker/UpdateEmployeeProfile") {
      showModal();
    }
  };

  return (
    <div className="jobseekers-sidebar dash-sidebar">
      <div className="jobseekers-img dash-img" onClick={handleDivClick}>
        <img src={profileImage} alt="Profile Photo" />

        <span class="profile-text">Photo required</span>
      </div>

      <div className="jobseekers-menu dash-menu">
        <ul>
          <MenuItem
            icon={DashboardIcon}
            altText="Dashboard"
            link="/DJobSeeker"
            text="Dashboard"
          />
          <MenuItem
            icon={EditAccount}
            altText="Edit Account"
            link="/DJobSeeker/UpdateAccountForm"
            text="Edit Account"
          />
          {hasEmployeeProfile ? (
            <MenuItem
              icon={EditProfile}
              altText="Edit Profile"
              link="/DJobSeeker/UpdateEmployeeProfile"
              text="Edit Profile"
            />
          ) : (
            <MenuItem
              icon={EditProfile}
              altText="Edit Profile"
              link="/EmployeeProfileComponent"
              text="Create Profile"
            />
          )}

          {!hasSkill ? (
            <MenuItem
              icon={SkillIcon}
              altText="Skills"
              link="/SkillRatingForm"
              text="Skills"
            />
          ) : (
            <MenuItem
              icon={SkillIcon}
              altText="Skills"
              link="/updateskill"
              text="Skills"
            />
          )}

          <MenuItem
            icon={VerifyIcon}
            altText="Verify Your Profile"
            link="/"
            text="Verify your Profile"
          />
          <MenuItem
            icon={SearchIcon}
            altText="Search Jobs"
            link="/"
            text="Search Jobs"
          />
          <MenuItem
            icon={LogoutIcon}
            altText="Log Out"
            link="/"
            text="Log Out"
          />
        </ul>
        {hasEmployeeProfile ? (
          <Link
            to="/"
            className="btn-default-red fn small-btn text-center mtop-20 view-profile"
          >
            View Profile
          </Link>
        ) : (
          <Link
            to="/EmployeeProfileComponent"
            className="btn-default-red fn small-btn text-center mtop-20 view-profile"
          >
            Create Profile
          </Link>
        )}
      </div>
      <div
        ref={modalRef}
        class="modal fade"
        id="editPhoto"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="editPhotoLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content ptb-40">
            <div class="modal-body text-center">
              <h1 class="f-35 b blue" id="editPhotoLabel">
                Upload Photo
              </h1>

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input
                  type="file"
                  class="kfield gray f-border"
                  name="image"
                  onChange={handleFileChange}
                />
                <input
                  type="submit"
                  value="Submit"
                  name="upload_photo"
                  id="upload_photo"
                  class="btn-default-red fn small-btn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
