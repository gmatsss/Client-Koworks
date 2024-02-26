import { useContext, useEffect, useState } from "react";
import { fetchData } from "../../api/api";
import JobResults from "./components/JobResults";
import SearchForm from "./components/SearchForm";
import { UserContext } from "../../context/UserContext";
import { useLocation } from "react-router-dom";
import CompleteProfilePrompt from "../../component/CompleteProfilePrompt/CompleteProfilePrompt";

const SearchJob = () => {
  const { search } = useLocation(); // Use useLocation to get the query string
  const query = new URLSearchParams(search);
  const jobTitle = query.get("s"); // Get the job title from the query parameters

  const { currentUser } = useContext(UserContext);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [refreshJobs, setRefreshJobs] = useState(false);
  const [originalJobs, setOriginalJobs] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [uniqueSkills, setUniqueSkills] = useState([]);

  useEffect(() => {
    // This function applies the filter based on the job title.
    const filterJobsByTitle = () => {
      if (!jobTitle) return; // If there's no job title, do nothing.

      const filteredJobs = originalJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase())
      );

      setJobs(filteredJobs);
    };

    // Call the filter function if there's a job title.
    if (jobTitle && originalJobs.length > 0) {
      filterJobsByTitle();
    }
  }, [jobTitle, originalJobs]); // Depend on jobTitle and originalJobs so it re-runs when either changes.

  useEffect(() => {
    const getJobs = async () => {
      setIsLoading(true);
      try {
        const response = await fetchData("JobSeekerRoutes/getAllJobs");
        if (response.success) {
          setOriginalJobs(response.data); // Keep original list
          setJobs(response.data); // Displayed list, initially the same
          setTotalPages(response.totalPages || 1);
        } else {
          console.error("Failed to fetch jobs:", response.message);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getJobs();
  }, [refreshJobs]); // Removed jobTitle from the dependency array
  // Add jobTitle as a dependency to refetch jobs if it changes

  useEffect(() => {
    // Extract unique categories
    const categories = new Set(jobs.map((job) => job.selectedCategory));
    setUniqueCategories([...categories]);

    // Extract unique skills
    const skills = new Set(jobs.flatMap((job) => job.jobSkills));
    setUniqueSkills([...skills]);
  }, [jobs]);

  const toggleRefreshJobs = () => {
    setRefreshJobs((prev) => !prev);
  };

  const handleSearch = (searchText, employmentType, category, skill) => {
    let filteredJobs = originalJobs;

    // Filter by job title if searchText is provided
    if (searchText.trim()) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Further filter by employment type if it's not set to "any"
    if (employmentType !== "any") {
      filteredJobs = filteredJobs.filter(
        (job) => job.employmentType === employmentType
      );
    }

    // Filter by category if it's not set to "any"
    if (category !== "any") {
      filteredJobs = filteredJobs.filter(
        (job) => job.selectedCategory === category
      );
    }

    // Filter by skill if it's not set to "any"
    if (skill !== "any") {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobSkills.includes(skill)
      );
    }

    setJobs(filteredJobs);
  };

  // Check if the user's profile and skill are completed
  const isProfileAndSkillCompleted =
    currentUser?.verificationStatus?.profileCompleted &&
    currentUser?.verificationStatus?.skillCompleted;

  // If the user is logged in, an employee, and either profile or skill is incomplete, display a message
  if (
    currentUser &&
    currentUser.role === "employee" &&
    !isProfileAndSkillCompleted
  ) {
    return <CompleteProfilePrompt />;
  }

  return (
    <div>
      <section className="content-section white-bg">
        <div className="container k-container">
          <div className="row">
            <SearchForm
              onSearch={handleSearch}
              categories={uniqueCategories}
              allSkills={uniqueSkills}
              jobs={jobs}
              initialSearchText={jobTitle || ""}
            />

            <JobResults
              jobs={jobs}
              isLoading={isLoading}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              showPin={currentUser && currentUser.role === "employee"}
              onRefreshJobs={toggleRefreshJobs}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchJob;
