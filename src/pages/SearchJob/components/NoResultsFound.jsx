const NoResultsFound = () => {
  return (
    <div className="result-container">
      <div className="job-card">
        <h3>No Results Found</h3>
        <p>
          We couldn't find any jobs that match your search criteria. Please try
          again with different keywords or filters.
        </p>
      </div>
    </div>
  );
};

export default NoResultsFound;
