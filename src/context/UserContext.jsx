import { createContext, useEffect, useState } from "react";
import { fetchData } from "../api/api";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  getUserData: () => null, // Add this line
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getUserData();
  }, []); // Added currentUser as a dependency

  async function getUserData() {
    try {
      const res = await fetchData(
        "https://localhost:8001/JobSeekerRoutes/getjobseek"
      );
      setCurrentUser(res.user);
      console.log(res.user);
    } catch (error) {
      console.log(error);
    }
  }

  const value = { currentUser, setCurrentUser, getUserData }; // Include getUserData here

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
