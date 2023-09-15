import React, { useContext, useState } from "react";
import { UserContext } from "../../../../../context/UserContext";
import { fetchData } from "../../../../../api/api";
import { toast } from "react-toastify";

const UpdateCredentials = () => {
  const { currentUser, fetchUser } = useContext(UserContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Define the data to send
    const data = {
      _id: currentUser._id, // Assuming you have access to the current user's ID
      email: currentUser.email, // Assuming you have a state or prop for the email
      currentPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };

    try {
      // Call fetchData to send the request
      const response = await fetchData("User/updateJSeeker", "POST", data);

      // Handle the response based on the returned data
      if (response.success) {
        toast.success(response.message);
        // Handle successful update, e.g., show a success message or redirect the user
      } else {
        toast.error(response.message);
        // Handle errors, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle unexpected errors, e.g., show a generic error message to the user
    }
  };

  return (
    <div
      className="modal fade"
      id="updateCreds"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="updateCredsLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content ptb-40">
          <div className="modal-body text-center">
            <h1 className="f-35 b blue" id="updateCredsLabel">
              Update User Credentials
            </h1>
            <div className="kform-container">
              <form
                className="kform kform-wider"
                id="empUpdatePass"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="_token"
                  value="uN84ZuNDqkqH34d6No4If7R4lpglWl7KT2LQp1Hi"
                />
                <div className="kform-group">
                  <label className="text-start d-block" htmlFor="old_password">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="old_password"
                    className="kfield gray password f-border"
                    required
                    minLength="8"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>
                <div className="kform-group">
                  <label className="text-start d-block" htmlFor="password">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="kfield gray password f-border"
                    required
                    minLength="8"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="kform-group">
                  <label
                    className="text-start d-block"
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
        </div>
      </div>
    </div>
  );
};

export default UpdateCredentials;
