import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../api/api";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const data = await fetchData("user/getjobseek");
      setCurrentUser(data.user);
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
        return { success: true, message: Login.message };
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

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ currentUser, loading, error, login, logout, fetchUser }} // Expose fetchUser so it can be used elsewhere
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
