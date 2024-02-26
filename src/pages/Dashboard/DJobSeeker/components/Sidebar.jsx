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
  const { currentUser, fetchUser, profileImage } = useContext(UserContext);

  const location = useLocation();
  const modalRef = useRef(null);
  const [hasSkill, setHasSkill] = useState(false);
  const [hasEmployeeProfile, setHasEmployeeProfile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState(null);

  useOnce(checkEmployeeProfile);

  async function checkEmployeeProfile() {
    // Check if the currentUser has an employeeProfile
    if (currentUser) {
      if (currentUser.employeeProfile) {
        setHasEmployeeProfile(true);
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true); // Set uploading state to true

    if (!file) {
      toast.warning("Please select an image before submitting.");
      setIsUploading(false);
      return;
    }

    const formData = new FormData();
    formData.append("img", file);

    try {
      const response = await fetchData(
        "JobSeekerRoutes/Updateprofile",
        "POST",
        formData,
        true
      );

      if (response && response.data) {
        toast.success("Profile image updated successfully.");
        fetchUser(); // Fetch the updated user data

        const bootstrapModal = Modal.getInstance(modalRef.current);
        bootstrapModal.hide(); // Close the modal
      } else {
        toast.error(response.message || "Error updating profile image.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile image.");
    }
    setIsUploading(false); // Set uploading state back to false
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

  window.shownoModalDialog = function (arg1, arg2, arg3) {
    const mdattrs = arg3.split(";");
    let w, h;
    let resizable = "no";
    let scroll = "no";
    let status = "no";

    for (let i = 0; i < mdattrs.length; i++) {
      const mdattr = mdattrs[i].split(":");
      const n = mdattr[0] ? mdattr[0].trim().toLowerCase() : null;
      const v = mdattr[1] ? mdattr[1].trim().toLowerCase() : null;

      if (!n || !v) continue;

      switch (n) {
        case "dialogheight":
          h = v.replace("px", "");
          break;
        case "dialogwidth":
          w = v.replace("px", "");
          break;
        case "resizable":
          resizable = v;
          break;
        case "scroll":
          scroll = v;
          break;
        case "status":
          status = v;
          break;
      }
    }

    const left = window.screenX + window.outerWidth / 2 - w / 2;
    let top = window.screenY + window.outerHeight / 2 - h / 2;
    if (top > 30) {
      top = top - 30;
    }

    const targetWin = window.open(
      arg1,
      arg2,
      `toolbar=no, location=no, directories=no, status=${status}, menubar=no, scrollbars=${scroll}, resizable=${resizable}, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`
    );

    return targetWin;
  };

  return (
    <div className="jobseekers-sidebar dash-sidebar">
      <div
        className="jobseekers-img dash-img"
        onClick={handleDivClick}
        style={
          location.pathname === "/DJobSeeker/UpdateEmployeeProfile"
            ? { cursor: "pointer" }
            : {}
        }
      >
        <img src={profileImage} alt="Profile Photo" />

        <span className="profile-text">Photo required</span>
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
              text="Create Skills"
            />
          ) : (
            <MenuItem
              icon={SkillIcon}
              altText="Skills"
              link="/updateskill"
              text="Edit Skills"
            />
          )}

          <MenuItem
            icon={VerifyIcon}
            altText="Verify Your Profile(not)"
            link="/VerificationComponent"
            text="Verify your Profile(not yet)"
          />
          <MenuItem
            icon={SearchIcon}
            altText="Search Jobs"
            link="/SearchJob"
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
          <button
            onClick={() =>
              window.shownoModalDialog(
                `/ViewProfile`,
                "ViewProfile",
                "dialogtop:50; dialogleft: 230; center:1; dialogwidth:1690; dialogheight:1670; scroll:0; resizable:1"
              )
            }
            className="btn-default-red fn small-btn text-center mtop-20 view-profile"
          >
            View Profile
          </button>
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
        className="modal fade"
        id="editPhoto"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="editPhotoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content ptb-40">
            <div className="modal-body text-center">
              <h1 className="f-35 b blue" id="editPhotoLabel">
                Upload Photo
              </h1>

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input
                  type="file"
                  className="kfield gray f-border"
                  name="image"
                  onChange={handleFileChange}
                />
                <input
                  type="submit"
                  value={isUploading ? "Uploading..." : "Upload Photo"}
                  disabled={isUploading}
                  name="upload_photo"
                  id="upload_photo"
                  className="btn-default-red fn small-btn"
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
