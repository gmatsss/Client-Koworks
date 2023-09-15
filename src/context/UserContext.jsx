import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../api/api";
import useOnce from "../api/useOnce";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const DEFAULT_IMAGE_URL =
    "https://linkagekoworks.viewourdesign.info/storage/images/placeholder-user.png";

  const [profileImage, setProfileImage] = useState(DEFAULT_IMAGE_URL);

  const fetchProfileImage = async () => {
    try {
      const response = await fetchData(
        `EmployerRoutes/getUserProfileImage`,
        "GET"
      );
      if (response.blob) {
        const imageUrl = URL.createObjectURL(response.blob);
        setProfileImage(imageUrl);
      } else if (response.message === "No image file uploaded yet") {
        setProfileImage(DEFAULT_IMAGE_URL);
      }
    } catch (error) {
      console.error("Error fetching profile image:", error);
      setProfileImage(DEFAULT_IMAGE_URL);
    }
  };

  const fetchUser = async () => {
    try {
      setLoading(true);
      const data = await fetchData("user/getjobseek");
      setCurrentUser(data.user);
      if (data.user) {
        await fetchProfileImage();
      }
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const LoginData = {
        email: email,
        password: password,
      };
      const Login = await fetchData("User/login", "POST", LoginData);

      if (Login && Login.message === "Login successful") {
        await fetchUser(); // Fetch the user data after successful login
        return { success: true, message: Login.message, user: Login.user };
      } else {
        return { success: false, message: Login.message };
      }
    } catch (err) {
      setError(err);
      return { success: false, message: err.message };
    }
  };

  const logout = async () => {
    try {
      const response = await fetchData("User/logoutjobseek", "POST");
      if (response.message === "Successfully logged out.") {
        setCurrentUser(null); // Clear the current user from context
        return { success: true, message: response.message };
      } else {
        return { success: false, message: response.message };
      }
    } catch (err) {
      setError(err);
      return { success: false, message: err.message };
    }
  };

  useOnce(fetchUser);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        profileImage,
        loading,
        error,
        login,
        logout,
        fetchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
