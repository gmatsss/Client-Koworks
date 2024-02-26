import W_stats from "./components/workers.stats";
import W_dbbtn from "./components/workers.databtn";
import W_jobseeker from "./components/workers.jobseeker";
import { useEffect, useState } from "react";
import { fetchData } from "../../../api/api";

const F_workers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsersWithDetails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetchData("User/getUserWithDetails");
        if (response.success) {
          setUsers(response.data);
        } else {
          setError("Failed to fetch users");
          console.error("Failed to fetch users:", response.message);
        }
      } catch (err) {
        setError("An error occurred while fetching users");
        console.error("An error occurred while fetching users:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsersWithDetails();
  }, []);
  return (
    <section className="content-section verified-jobseekers">
      <div className="container k-container">
        <div className="row">
          <div className="col col-md-12 px-0">
            <h2 className="section-title">
              <span>Most Recent Verified Jobseekers</span>
            </h2>
          </div>
        </div>
        <W_jobseeker />
        <W_dbbtn />
        <W_stats users={users} />
      </div>
    </section>
  );
};

export default F_workers;
