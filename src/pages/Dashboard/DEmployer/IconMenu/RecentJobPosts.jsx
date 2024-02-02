import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../../../api/api";
import { DotWave } from "@uiball/loaders";

const RecentJobPosts = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getJobPosts = async () => {
      try {
        setIsLoading(true); // Start loading
        const response = await fetchData("EmployerRoutes/getJobsByUser");
        if (response.success) {
          setJobPosts(response.data);
        }
        setIsLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching job posts:", error);
        setIsLoading(false); // Stop loading in case of error
      }
    };

    getJobPosts();
  }, []);

  return (
    <div className="your-job-posts mtop-30">
      <h2 className="f-35 blue mbot-40">Recent Job Posts</h2>
      {isLoading ? (
        <div className="loader-container d-flex justify-content-center">
          <DotWave size={40} speed={2} color="blue" />
        </div>
      ) : (
        <>
          <div className="job-posts">
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Applicants</th>
                  <th>Hits</th>
                  <th>Status</th>
                  <th>Date Added</th>
                </tr>
              </thead>
              <tbody>
                {jobPosts.length > 0 ? (
                  jobPosts.map((post, index) => (
                    <tr key={index}>
                      <td>{post.jobTitle}</td>
                      <td>{post.applicants.length}</td>
                      <td>{post.hits}</td>
                      <td>{post.status}</td>
                      <td>{new Date(post.created).toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No Jobs found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="row mtop-45">
            <div className="col text-center">
              <Link to="/Employerjob" className="btn-default-red small-btn">
                View All
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecentJobPosts;
