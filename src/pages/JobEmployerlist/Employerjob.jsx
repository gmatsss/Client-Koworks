import React, { useState, useEffect } from "react";
import TableBody from "./components/TableBody";
import TableFooter from "./components/TableFooter";
import TableHeader from "./components/TableHeader";
import { fetchData } from "../../api/api";

const Employerjob = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [rowsToShow, setRowsToShow] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getJobPosts = async () => {
      try {
        const response = await fetchData("EmployerRoutes/getJobsByUser");
        if (response.success) {
          setJobs(response.data);
        }
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    };

    getJobPosts();
  }, []);

  const refreshJobPosts = async () => {
    try {
      const response = await fetchData("EmployerRoutes/getJobsByUser");
      if (response.success) {
        setJobs(response.data);
      }
    } catch (error) {
      console.error("Error fetching job posts:", error);
    }
  };

  useEffect(() => {
    const filtered = jobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(filtered);

    const rowsCount = parseInt(rowsToShow, 10) || 5;
    const startIndex = (currentPage - 1) * rowsCount;
    const endIndex = startIndex + rowsCount;

    setDisplayJobs(filtered.slice(startIndex, endIndex));
  }, [searchQuery, rowsToShow, currentPage, jobs]);

  const totalPages = Math.ceil(filteredJobs.length / rowsToShow);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleRowsChange = (newRowsToShow) => {
    setRowsToShow(newRowsToShow);
    setCurrentPage(1); // Reset to first page on rows change
  };

  return (
    <div className="content-section employer-dashboard white-bg">
      <div className="container k-container">
        <div className="row">
          <div className="col px-0">
            <div className="your-job-posts mtop-30">
              <h2 className="f-35 blue mbot-40">Your Job Posts</h2>

              <div className="table-container table-responsive">
                <table className="table table-borderless">
                  <TableHeader
                    searchQuery={searchQuery}
                    rowsToShow={rowsToShow}
                    onSearchChange={handleSearchChange}
                    onRowsChange={handleRowsChange}
                  />
                  <TableBody jobs={displayJobs} onRefresh={refreshJobPosts} />
                  <TableFooter
                    start={(currentPage - 1) * rowsToShow + 1}
                    end={currentPage * rowsToShow}
                    total={filteredJobs.length} // Use filteredJobs.length here
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                  />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employerjob;
