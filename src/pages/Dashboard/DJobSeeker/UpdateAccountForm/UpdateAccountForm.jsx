import React, { useState, useContext } from "react";
import { UserContext } from "../../../../context/UserContext"; // Adjust the path to your UserContext
import { fetchData } from "../../../../api/api"; // Adjust the path to your fetchData function
import { toast } from "react-toastify";

const UpdateAccountForm = () => {
  const { currentUser } = useContext(UserContext);
  const [email, setEmail] = useState(currentUser.email || "");
  const [fullName, setFullName] = useState(currentUser.fullname || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match.");
      return;
    }

    const data = {
      currentEmail: currentUser.email,
      email,
      fullname: fullName,
      currentPassword,
      newPassword,
      confirmPassword,
    };

    try {
      const response = await fetchData(
        "https://localhost:8001/JobSeekerRoutes/updateJSeeker",
        "POST",
        data
      );

      if (response && response.success) {
        toast.success(response.msg || "Account updated successfully!");
      } else {
        toast.error(response.err || "Failed to update account.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the account.");
    }
  };
  return (
    <div className="div col px-0">
      <div className="kform-container">
        <form
          method="POST"
          className="kform kform-wider"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="_token"
            value="VsnHox37DWh3uGXa2iKoJZMk4K8y2XspIxU1s0Nk"
          />
          <div className="kform-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              className="kfield gray email f-border"
              placeholder={email === currentUser.email ? "Email" : "New Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="kform-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              className="kfield gray f-border"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="kform-group">
            <label className="text-left d-block" htmlFor="old_password">
              Current Password
            </label>
            <input
              type="password"
              name="old_password"
              className="kfield gray password f-border"
              minLength="8"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="kform-group">
            <label className="text-left d-block" htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              name="password"
              className="kfield gray password f-border"
              minLength="8"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="kform-group">
            <label
              className="text-left d-block"
              htmlFor="password_confirmation"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="password_confirmation"
              className="kfield gray password f-border"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="kform-group inline-radio mtop-20">
            <input
              type="submit"
              value="Save Changes"
              id="employerUpdatePass"
              className="btn-default-red fn"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAccountForm;
