import BannerSection from "./components/BannerSection";
import ContentSection from "./components/ContentSection";
import Book from "./components/Book";
import { fetchData } from "../../api/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

const ViewAllPinJob = () => {
  const [jobListings, setJobListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPinJobs = async () => {
      setIsLoading(true); // Start loading
      try {
        const data = await fetchData("JobSeekerRoutes/getPinJobs", "GET");
        if (data && data.success) {
          setJobListings(data.data); // Set the jobs data
        } else {
          console.error("Failed to fetch pinned jobs:", data.message);
        }
      } catch (error) {
        console.error("Error fetching pinned jobs:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    };

    getPinJobs();
  }, []);

  return (
    <>
      <BannerSection
        name={currentUser?.fullname}
        title={currentUser?.employeeProfile?.job_title}
      />

      <ContentSection jobListings={jobListings} isLoading={isLoading} />

      <Book />
    </>
  );
};

export default ViewAllPinJob;
