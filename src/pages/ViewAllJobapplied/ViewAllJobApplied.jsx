import BannerSection from "./components/BannerSection";
import ContentSection from "./components/ContentSection";
import Book from "./components/Book";
import { fetchData } from "../../api/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

const ViewAllJobApplied = () => {
  const [jobListings, setJobListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getJobsApplied = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(
          "JobSeekerRoutes/getUserJobApplications",
          "GET"
        );

        if (data) {
          setJobListings(data);
        }
      } catch (error) {
        console.error("Error fetching job applications:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getJobsApplied();
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

export default ViewAllJobApplied;
