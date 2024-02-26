import JobResult from "./JobResult";
import NoResultsFound from "./NoResultsFound";

const FinalResult = ({ jobs }) => {
  // Filter jobs to include only those with both a non-null employeeProfile and non-null skill
  const validJobs = jobs.filter(
    (job) => job.employeeProfile !== null && job.skill !== null
  );

  return (
    <div id="search-results" className="div col px-0">
      {validJobs.length > 0 ? (
        validJobs.map((job) => <JobResult job={job} key={job._id} />) // Make sure to use _id as key if id is not available
      ) : (
        <NoResultsFound />
      )}
    </div>
  );
};

export default FinalResult;
