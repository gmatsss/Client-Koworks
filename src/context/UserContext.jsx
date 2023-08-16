import { createContext, useEffect, useState, useMemo } from "react";
import { fetchData } from "../api/api";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  getUserData: () => null,
  fetchUserPromise: null, // Add this line
  loading: true,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [fetchUserPromise, setFetchUserPromise] = useState(null); // Add this line

  useEffect(() => {
    getUserData();
  }, []); // Added currentUser as a dependency

  async function getUserData() {
    const promise = fetchData(
      "https://localhost:8001/JobSeekerRoutes/getjobseek"
    );
    setFetchUserPromise(promise); // Set the promise

    try {
      const res = await promise;
      setCurrentUser(res.user);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  const value = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      getUserData,
      fetchUserPromise, // Add this line
    }),
    [currentUser, fetchUserPromise] // Add fetchUserPromise as a dependency
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
