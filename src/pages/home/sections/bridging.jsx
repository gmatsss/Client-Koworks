import React, { useContext, useEffect, useState } from "react";
import B_categories from "./components/bridge.categ";
import B_content from "./components/bridge.content";
import B_form from "./components/bridge.form";
import { fetchData } from "../../../api/api"; // Adjust the import path as necessary
import { DotPulse } from "@uiball/loaders";
import { UserContext } from "../../../context/UserContext";

const Bridge_gap = () => {
  const [uniqueTitles, setUniqueTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const fetchConditionally = async () => {
      setIsLoading(true);
      let endpoint = "";

      endpoint =
        currentUser?.role === "employee"
          ? "JobSeekerRoutes/getAllJobsForEmployers"
          : "EmployerRoutes/getEmployees";

      try {
        const response = await fetchData(endpoint);
        if (response.error) {
          console.error("Error fetching data:", response.error);
          setIsLoading(false);
          return;
        }

        if (endpoint === "EmployerRoutes/getEmployees") {
          const jobTitles = response.data
            .map((employee) => employee.employeeProfile?.job_title)
            .filter(Boolean);
          const uniqueJobTitles = Array.from(new Set(jobTitles));
          const randomTitles = uniqueJobTitles
            .sort(() => 0.5 - Math.random())
            .slice(0, 5)
            .map((title, index) => ({
              id: index + 1,
              title,
            }));
          setUniqueTitles(randomTitles);
        } else {
          // Extract job titles, ensure uniqueness, randomize, and limit to 5
          const jobTitles = response.data.map((job) => job.jobTitle);
          const uniqueJobTitles = Array.from(new Set(jobTitles));
          const randomTitles = uniqueJobTitles
            .sort(() => 0.5 - Math.random())
            .slice(0, 5)
            .map((title, index) => ({
              id: index + 1,
              title,
            }));

          setUniqueTitles(randomTitles);
        }
      } catch (error) {
        console.error("Error fetching conditionally:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConditionally();
  }, [currentUser]); // Re-run when currentUser changes

  return (
    <section className="banner-section">
      <div className="container k-container">
        <div className="row align-items-center">
          <div className="col col-md-7 px-0">
            <B_content />
            <B_form userRole={currentUser?.role} />
            {isLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DotPulse size={40} speed={1.5} color="black" />
              </div>
            ) : (
              // Inside Bridge_gap component
              <B_categories
                categories={uniqueTitles}
                userRole={currentUser?.role}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridge_gap;
