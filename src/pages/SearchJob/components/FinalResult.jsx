import JobResult from "./JobResult";
import NoResultsFound from "./NoResultsFound";

const FinalResult = ({ jobs }) => (
  <div id="search-results" className="div col px-0">
    {jobs.length > 0 ? (
      jobs.map((job) => <JobResult job={job} key={job.id} />)
    ) : (
      <NoResultsFound />
    )}
  </div>
);

export default FinalResult;
