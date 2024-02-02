import FilterForm from "./components/FilterForm";
import Pagination from "./components/Pagination";
import BookmarkJobModal from "./components/BookmarkJobModal";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FinalResult from "./components/FinalResult";
import { fetchData } from "../../api/api";
import { DotPulse } from "@uiball/loaders";
import SkillTabs from "./components/SkillTabs";

const SearchEmployee = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("s");
  const [filterCriteria, setFilterCriteria] = useState({ searchText });
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsData, setJobsData] = useState({ jobs: [], totalPages: 1 });
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [skillRatings, setSkillRatings] = useState([]);

  const handleSearch = (newFilterCriteria, resetSkills = false) => {
    let updatedSkills = resetSkills ? [] : skillRatings;
    const updatedFilterCriteria = {
      ...newFilterCriteria,
      skills: updatedSkills,
    };
    setCurrentPage(1);
    setFilterCriteria(updatedFilterCriteria);
    fetchJobsForPage(1, updatedFilterCriteria);
    if (updatedSkills.length > 0) {
      setShowAdvancedSearch(false);
    }
  };

  const onClearFilters = () => {
    // Define what the cleared state should look like
    const clearedFilterCriteria = {
      searchText: "",
      employmentType: "",
      salaryRangeLow: "",
      salaryRangeHigh: "",
      lastActive: "",
    };

    // Reset skill ratings and any other state as needed
    resetSkillRatings(); // This resets skillRatings to []

    // Call handleSearch with cleared filters and indicate to reset skills
    handleSearch(clearedFilterCriteria, true);

    // Optionally, reset currentPage to 1 and any other state as needed
    setCurrentPage(1);
  };

  const onPageChange = (page) => {
    if (page >= 1 && page <= jobsData.totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    fetchJobsForPage(currentPage);
  }, [currentPage]);

  const fetchJobsForPage = async (page, filterCriteria = {}) => {
    setIsLoading(true);
    try {
      const endpoint = "EmployerRoutes/getEmployees";
      const response = await fetchData(endpoint);

      if (response.error) {
        console.error("Error fetching employees:", response.error);
        return;
      }

      // Assuming the response contains an array of jobs
      const allJobs = response.data || [];
      // console.log("All Jobs:", JSON.stringify(allJobs, null, 2));

      // Filter the jobs based on the filter criteria
      const filteredJobs = allJobs.filter((job) => {
        if (
          filterCriteria.searchText &&
          !job.employeeProfile.job_title
            .toLowerCase()
            .includes(filterCriteria.searchText.toLowerCase())
        ) {
          return false;
        }

        // Employment type filter
        if (
          filterCriteria.employmentType &&
          job.employeeProfile.employment_status
            .replace("-", " ")
            .toLowerCase() !== filterCriteria.employmentType.toLowerCase()
        ) {
          return false;
        }

        // Salary range filter
        const salary = job.employeeProfile.salary;
        if (
          filterCriteria.salaryRangeLow &&
          salary < filterCriteria.salaryRangeLow
        ) {
          return false;
        }

        if (
          filterCriteria.salaryRangeHigh &&
          salary > filterCriteria.salaryRangeHigh
        ) {
          return false;
        }

        if (filterCriteria.lastActive && job.lastLogin) {
          // Check if the 'Any' option is selected
          if (filterCriteria.lastActive === "any") {
            // No need to return anything as we are including all jobs when 'Any' is selected
          } else {
            const lastLoginDate = new Date(job.lastLogin);
            const currentDate = new Date();
            const differenceInDays = Math.ceil(
              (currentDate - lastLoginDate) / (1000 * 3600 * 24)
            );
            const lastActiveDays = parseInt(filterCriteria.lastActive);

            // Define the maximum days for each range
            const ranges = {
              7: 0, // A week or less
              31: 7, // A month or less
              93: 31, // 3 months or less
              186: 93, // 6 months or less
              366: 186, // Up to a year
            };

            // Find the minimum days for the selected range
            const minDays = ranges[lastActiveDays];

            // Adjusted condition: Include jobs where the last login falls within the selected range
            if (
              differenceInDays > minDays &&
              differenceInDays <= lastActiveDays
            ) {
              // Including job based on the 'Last Active' filter criteria
            } else {
              return false; // Excluding job based on the 'Last Active' filter criteria
            }
          }
        } else if (
          !filterCriteria.lastActive ||
          filterCriteria.lastActive === "any"
        ) {
          // If 'Last Active' filter is not set or set to 'Any', include all jobs
        }

        // Function to flatten the job's skills into a single array
        const flattenJobSkills = (job) => {
          if (!job.skill) {
            console.error(
              "Job skill data is missing or not structured as expected:",
              job
            );
            return [];
          }

          const skillCategories = job.skill; // Assuming 'skill' contains the skill categories
          return Object.keys(skillCategories).reduce((acc, category) => {
            // Check if the category is an array before attempting to map over it
            if (Array.isArray(skillCategories[category])) {
              const skills = skillCategories[category].map((skill) => ({
                name: skill.name,
                rating: skill.rating,
              }));
              return acc.concat(skills);
            } else {
              console.warn(
                `Expected an array for category '${category}', but received:`,
                skillCategories[category]
              );
              return acc;
            }
          }, []);
        };

        if (filterCriteria.skills && filterCriteria.skills.length > 0) {
          return filterCriteria.skills.some((filterSkill) => {
            console.log("Checking skill:", filterSkill);

            // Flatten the job's skills
            const jobSkills = flattenJobSkills(job);
            console.log("Flattened job skills:", jobSkills);

            // Check if the job has at least one of the skills with the exact required rating
            return jobSkills.some((jobSkill) => {
              const jobSkillNameNormalized = normalizeSkillName(jobSkill.name);
              const filterSkillNameNormalized = normalizeSkillName(
                filterSkill.name
              );

              const match =
                jobSkillNameNormalized === filterSkillNameNormalized &&
                jobSkill.rating === filterSkill.rating; // Changed from >= to ===
              console.log(
                `Comparing job skill ${jobSkill.name} with rating ${jobSkill.rating} to required skill ${filterSkill.name} with rating ${filterSkill.rating}:`,
                match
              );
              return match;
            });
          });
        } else {
          // If there are no skills in the filter criteria, skip this filtering step
          console.log("No skills filter applied.");
        }

        return true;
      });

      // Calculate the total number of pages
      const pageSize = 5; // You can adjust the page size as needed
      const totalFilteredJobs = filteredJobs.length;
      const calculatedTotalPages = Math.ceil(totalFilteredJobs / pageSize);

      // Paginate the filtered jobs
      const newJobs = filteredJobs.slice(
        (page - 1) * pageSize,
        page * pageSize
      );

      // Update the jobs and totalPages state
      setJobsData({ jobs: newJobs, totalPages: calculatedTotalPages });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  // Function to update skill ratings from SkillTabs
  const updateSkillRatings = (newRatings) => {
    setSkillRatings(newRatings);
  };

  const handleEditSkillsClick = () => {
    setShowAdvancedSearch(true);
  };

  const normalizeSkillName = (name) => {
    return name.toLowerCase().replace(/[_\s]/g, "");
  };

  const resetSkillRatings = () => {
    setSkillRatings([]);
  };

  return (
    <div>
      <section className="content-section white-bg">
        <div className="container k-container">
          <div className="row">
            <FilterForm
              onSearch={handleSearch}
              initialSearchText={searchText}
              toggleAdvancedSearch={toggleAdvancedSearch}
              showAdvancedSearch={showAdvancedSearch}
              skillRatings={skillRatings}
              onEditSkillsClick={handleEditSkillsClick}
              onClearFilters={onClearFilters} // Pass the reset method as a prop
            />

            {/* Conditional rendering based on showAdvancedSearch */}
            {showAdvancedSearch ? (
              <div className="col-9 skill-filter">
                <div className="filter-header mbot-20">
                  <h2>Advanced Filter</h2>
                </div>
                <div className="kform-group">
                  <label htmlFor="primary-skills">Jobseeker Skills</label>
                  <SkillTabs updateSkillRatings={updateSkillRatings} />
                </div>
              </div>
            ) : (
              <div id="search-results" className="div col px-0">
                {isLoading ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100vh", // Adjust the height as needed
                    }}
                  >
                    <DotPulse size={40} speed={1.5} color="black" />
                  </div>
                ) : (
                  <>
                    <FinalResult jobs={jobsData.jobs} />
                    <Pagination
                      currentPage={currentPage}
                      totalPages={jobsData.totalPages}
                      onPageChange={onPageChange}
                    />
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      <BookmarkJobModal />
    </div>
  );
};

export default SearchEmployee;
