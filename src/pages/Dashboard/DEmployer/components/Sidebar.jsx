import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from React Router

import iconDash from "../../../../imgs/icon-dashboard.png";
import editAcct from "../../../../imgs/icon-edit-account-b.png";
import postJob from "../../../../imgs/icon-post-job.png";
import searchWork from "../../../../imgs/icon-search-workers.png";
import timTrack from "../../../../imgs/icon-time-tracker.png";
import logOut from "../../../../imgs/icon-logout.png";
import { Modal } from "bootstrap";
import { fetchData } from "../../../../api/api";
import { toast } from "react-toastify";
import { UserContext } from "../../../../context/UserContext";
import useOnce from "../../../../api/useOnce";

const Sidebar = () => {
  const { fetchUser, profileImage } = useContext(UserContext);
  const location = useLocation();
  const modalRef = useRef(null); // Reference for the modal
  const [isUploading, setIsUploading] = useState(false);

  const handleDivClick = () => {
    if (location.pathname === "/DEmployer/editAccount") {
      showModal();
    }
  };

  const [modalInstance, setModalInstance] = useState(null); // State to hold the modal instance

  const showModal = () => {
    const instance = new Modal(modalRef.current); // Create a new modal instance
    setModalInstance(instance); // Set the modal instance to the state
    instance.show();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    // Implement your logout logic here
  };

  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true); // Set uploading state to true
    try {
      if (!imageFile) {
        toast.warning("Please select an image before submitting.");
        setIsUploading(false);
        return;
      }

      const formData = new FormData();
      formData.append("img", imageFile);
      formData.append("sample", "sample data");

      // Use fetchData with useFormData set to true
      const response = await fetchData(
        "EmployerRoutes/updateOrCreateProfile",
        "POST",
        formData,
        true
      );

      // Handle the response as needed
      if (response.message === "Business profile updated successfully.") {
        toast.success("Image uploaded successfully!");
        if (modalInstance) {
          modalInstance.hide(); // Close the modal upon successful upload
        }

        // Add a delay before re-fetching the user data
        setTimeout(() => {
          fetchUser();
        }, 2000); // 2 seconds delay
      } else {
        toast.error("Error uploading image:", response.message);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
    setIsUploading(false); // Set uploading state back to false
  };

  return (
    <div className="employer-sidebar dash-sidebar">
      <div
        className="employer-img dash-img"
        onClick={handleDivClick}
        style={
          location.pathname === "/DEmployer/editAccount"
            ? { cursor: "pointer" }
            : {}
        }
      >
        <img src={profileImage} alt="Profile Photo" />
        <span className="profile-text">Photo required</span>
      </div>
      <div className="employer-menu dash-menu">
        <ul>
          <li>
            <span>
              <img src={iconDash} alt="Dashboard" />
            </span>
            <Link to="/DEmployer/" className="u-case f-20 fn blue">
              Dashboard
            </Link>
          </li>
          <li>
            <span>
              <img src={editAcct} alt="Edit Account" />
            </span>
            <Link to="/DEmployer/editAccount" className="u-case f-20 fn blue">
              Edit Account
            </Link>
          </li>
          <li>
            <span>
              <img src={postJob} alt="Post New Job" />
            </span>
            <Link to="/DEmployer/postnewjob" className="u-case f-20 fn blue">
              Post New Job
            </Link>
          </li>
          <li>
            <span>
              <img src={searchWork} alt="Search Workers" />
            </span>
            <Link to="/SearchEmployee" className="u-case f-20 fn blue">
              Search Workers
            </Link>
          </li>
          <li>
            <span>
              <img src={timTrack} alt="Time Tracker" />
            </span>
            <Link to="#" className="u-case f-20 fn blue">
              Time Tracker
            </Link>
          </li>
          <li>
            <span>
              <img src={logOut} alt="Log Out" />
            </span>
            <a className="u-case f-20 fn blue" onClick={handleLogout}>
              Log Out
            </a>
          </li>
        </ul>
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
                  name="upload_photo"
                  className="btn-default-red fn small-btn"
                  value={isUploading ? "Uploading..." : "Upload Photo"}
                  disabled={isUploading}
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
