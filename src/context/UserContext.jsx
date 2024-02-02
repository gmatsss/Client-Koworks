import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../api/api";
import useOnce from "../api/useOnce";
import { toast } from "react-toastify"; // Ensure you've imported toast

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const DEFAULT_IMAGE_URL =
    "https://linkagekoworks.viewourdesign.info/storage/images/placeholder-user.png";

  const [profileImage, setProfileImage] = useState(DEFAULT_IMAGE_URL);

  const fetchUser = () => {
    setLoading(true);
    fetchData("user/getjobseek")
      .then((data) => {
        setCurrentUser(data.user);

        if (data.profileImageData) {
          setProfileImage(`data:image/png;base64,${data.profileImageData}`);
        } else {
          setProfileImage(profileImage);
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        toast.error("Error fetching user.", { autoClose: 3000 }); // Error toast
      });
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

  console.log(currentUser);

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
