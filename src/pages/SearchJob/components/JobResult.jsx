const JobResult = ({ job }) => {
  return (
    <div className="result-container">
      <div className="result-header">
        <h2 className="job-title">
          {job.title}
          <span className={`job-type ${job.typeClass}`}>{job.type}</span>
        </h2>
        <div
          id={`rha-${job.id}`}
          className="result-header-actions"
          data-jid={job.id}
        >
          <a
            href="#"
            className="pin-emp"
            data-bs-toggle="modal"
            data-bs-target="#bookmarkJob"
            data-uid={job.id}
          >
            <span>
              <img src="../../imgs/icons/pin-icon-small.png" alt="Pin" />
              PIN
            </span>
          </a>
        </div>
      </div>
      <div className="result-content">
        <div className="row">
          <div className="col">{job.description}</div>
        </div>
        <div className="row">
          <div className="col">
            <span className="salary mright-40">
              <img src="imgs/dollar-sign.png" alt="Expected Salary" />
              <span>{job.salary}</span>
            </span>
          </div>
          <div className="col text-right">
            <a href={job.link} className="see-more blue">
              See more
            </a>
          </div>
        </div>
        <div className="row mtop-20">
          <div className="col">
            <ul className="list-skills">
              {job.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobResult;
