import React, { useEffect, useRef, useState } from "react";
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

const Sidebar = () => {
  const location = useLocation();
  const modalRef = useRef(null);
  const videoRef = useRef(null);
  const [profileImage, setProfileImage] = useState(
    "https://linkagekoworks.viewourdesign.info/storage/images/placeholder-user.png"
  );
  const [base64Image, setBase64Image] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [stream, setStream] = useState(null);

  const [showCamera, setShowCamera] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);

  const handleUploadFileClick = () => {
    setShowFileInput(true);
    setShowCamera(false);
  };

  const handleTakeSelfieClick = () => {
    setShowCamera(true);
    setShowFileInput(false);
    handleCaptureClick(); // Automatically open the camera
  };

  useEffect(() => {
    return () => {
      // Clean up the camera feed when the component is unmounted
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [stream]);

  const handleDivClick = () => {
    if (location.pathname === "/DEmployer/editAccount") {
      showModal();
    }
  };

  const showModal = () => {
    const bootstrapModal = new Modal(modalRef.current);
    bootstrapModal.show();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    // Implement your logout logic here
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBase64Image(reader.result);
      };
    }
  };

  const handleCaptureClick = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopVideoStream = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setStream(null);
    }
  };

  const handleRetakeClick = () => {
    setCapturedImage(null);
    handleCaptureClick();
  };

  const captureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const imageUrl = canvas.toDataURL("image/png");
    setCapturedImage(imageUrl);
    stopVideoStream();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { img: base64Image };
      const response = await fetchData(
        "EmployerRoutes/updateOrCreateProfile",
        "POST",
        data
      );
      if (response.message === "Business profile updated successfully.") {
        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Error uploading image:", response.message);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
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
            <Link to="/post-a-job-form" className="u-case f-20 fn blue">
              Post New Job
            </Link>
          </li>
          <li>
            <span>
              <img src={searchWork} alt="Search Workers" />
            </span>
            <a
              href="https://linkagekoworks.viewourdesign.info/search"
              className="u-case f-20 fn blue"
            >
              Search Workers
            </a>
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

              {!showFileInput && !showCamera && !capturedImage && (
                <>
                  <button
                    onClick={handleUploadFileClick}
                    className="btn-default-red fn small-btn"
                  >
                    Upload File
                  </button>
                  <button
                    onClick={handleTakeSelfieClick}
                    className="btn-default-red fn small-btn"
                  >
                    Take a Selfie
                  </button>
                </>
              )}

              {showFileInput && (
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
                  />
                </form>
              )}

              {showCamera && !capturedImage && (
                <>
                  <video
                    ref={videoRef}
                    width="400"
                    height="300"
                    autoPlay
                  ></video>
                  <button
                    onClick={captureImage}
                    className="btn-default-red fn small-btn"
                  >
                    Capture
                  </button>
                </>
              )}

              {capturedImage && (
                <>
                  <img src={capturedImage} alt="Captured" />
                  <button
                    onClick={handleRetakeClick}
                    className="btn-default-red fn small-btn"
                  >
                    Retake
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
