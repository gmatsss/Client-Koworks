import FilterForm from "./components/FilterForm";
import Pagination from "./components/Pagination";
import BookmarkJobModal from "./components/BookmarkJobModal";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import sampleJobs from "./sampleJobs.json";
import FinalResult from "./components/FinalResult";

const SearchJob = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("s");
  const [filterCriteria, setFilterCriteria] = useState({ searchText });
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsData, setJobsData] = useState({ jobs: [], totalPages: 1 });

  useEffect(() => {
    fetchJobsForPage(currentPage, filterCriteria);
  }, [currentPage, filterCriteria]);

  const handleSearch = (newFilterCriteria) => {
    setCurrentPage(1);
    setFilterCriteria(newFilterCriteria);
    fetchJobsForPage(1, newFilterCriteria);
  };

  const onPageChange = (page) => {
    if (page >= 1 && page <= jobsData.totalPages) {
      setCurrentPage(page);
    }
  };

  const fetchJobsForPage = (page, filterCriteria = {}) => {
    // Simulate a delay, such as a network request
    setTimeout(() => {
      // Sample data (replace with actual data from your backend)
      const allJobs = sampleJobs.jobs;

      // Filter the jobs based on the filter criteria
      const filteredJobs = allJobs.filter((job) => {
        if (
          filterCriteria.searchText &&
          !job.title.includes(filterCriteria.searchText)
        ) {
          return false;
        }
        if (
          filterCriteria.employmentType &&
          job.type !== filterCriteria.employmentType
        ) {
          return false;
        }
        return true;
      });

      // Calculate the total number of pages
      const pageSize = 5;
      const totalFilteredJobs = filteredJobs.length;
      const calculatedTotalPages = Math.ceil(totalFilteredJobs / pageSize);

      // Paginate the filtered jobs
      const newJobs = filteredJobs.slice(
        (page - 1) * pageSize,
        page * pageSize
      );

      // Update the jobs and totalPages state
      setJobsData({ jobs: newJobs, totalPages: calculatedTotalPages });
    }, 1000);
  };

  return (
    <div>
      <section className="content-section white-bg">
        <div className="container k-container">
          <div className="row">
            <FilterForm
              onSearch={handleSearch}
              initialSearchText={searchText}
            />

            <div id="search-results" className="div col px-0">
              <div id="ajax-spinner" className="spinner-container d-none">
                <div className="spinner-border m-5" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <FinalResult jobs={jobsData.jobs} />

              <Pagination
                currentPage={currentPage}
                totalPages={jobsData.totalPages}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </div>
      </section>
      <BookmarkJobModal />
    </div>
  );
};

export default SearchJob;
