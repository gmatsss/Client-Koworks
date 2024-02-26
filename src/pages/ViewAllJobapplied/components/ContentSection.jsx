import React from "react";
import JobListing from "./JobListing"; // Ensure the path is correct
import { DotWave } from "@uiball/loaders";

const ContentSection = ({ jobListings, isLoading }) => {
  if (isLoading) {
    return (
      <div
        className="loader-container"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px 0",
        }}
      >
        <DotWave size={50} speed={1.4} color="blue" />
      </div>
    );
  }

  console.log(jobListings);
  return (
    <section className="content-section white-bg">
      <div className="container k-container">
        <div className="row">
          <div className="div col px-0">
            <div className="row mtop-30">
              <div className="col">
                <h2 className="f-35 blue">Jobs Applied</h2>
              </div>
            </div>
            <div className="list-of-jobs">
              {jobListings.map((listing) => (
                <JobListing
                  key={listing._id}
                  pinJobId={listing._id} // Passing the PinJob's _id
                  job={listing.job}
                  notes={listing.notes}
                  applicationStatus={listing.status}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
