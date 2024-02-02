import React, { useEffect, useState } from "react";
import B_categories from "./components/bridge.categ";
import B_content from "./components/bridge.content";
import B_form from "./components/bridge.form";
import { fetchData } from "../../../api/api"; // Adjust the import path as necessary
import { DotPulse } from "@uiball/loaders";

const Bridge_gap = () => {
  const [uniqueTitles, setUniqueTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    const fetchEmployees = async () => {
      setIsLoading(true); // Start loading
      const endpoint = "EmployerRoutes/getEmployees";
      try {
        const response = await fetchData(endpoint);
        if (response.error) {
          console.error("Error fetching employees:", response.error);
        } else {
          // Assuming the response data is an array of employee objects
          const jobTitles = response.data
            .map((employee) => employee.employeeProfile?.job_title)
            .filter(Boolean);
          const uniqueJobTitles = Array.from(new Set(jobTitles));
          // Randomly select 5 unique job titles
          const randomTitles = uniqueJobTitles
            .sort(() => 0.5 - Math.random())
            .slice(0, 5)
            .map((title, index) => ({
              id: index + 1,
              title: title,
            }));
          setUniqueTitles(randomTitles);
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchEmployees();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className="banner-section ">
      <div className="container k-container">
        <div className="row align-items-center">
          <div className="col col-md-7 px-0">
            <B_content />
            <B_form />
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
              <B_categories categories={uniqueTitles} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridge_gap;
