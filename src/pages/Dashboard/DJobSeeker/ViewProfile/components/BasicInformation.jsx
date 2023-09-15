const BasicInformation = ({ currentUser }) => {
  // Extracting the necessary fields from currentUser with default values
  const { employeeProfile = {}, testScores = {}, created } = currentUser;
  const {
    gender = "No Data yet",
    bday = "No Data yet",
    location = "No Data yet",
  } = employeeProfile;
  const { disc = {}, english = {} } = testScores;

  // Calculate age based on the birthday
  const age =
    bday !== "No Data yet"
      ? new Date().getFullYear() - new Date(bday).getFullYear()
      : "No Data yet";

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="col">
      <div className="pr-info">
        <h3>Basic Information</h3>
        <ul className="pr-binfo">
          <li>
            Age: <span className="b">{age}</span>
          </li>
          <li>
            Gender: <span className="b">{gender}</span>
          </li>
          <li>
            Location:{" "}
            <span className="b">
              {location.country}, {location.city}
            </span>
          </li>
          <li>Tests Taken:</li>
          <li>
            IQ Score: <span className="b">No Data yet</span>
          </li>
        </ul>
        <ul className="pr-disc">
          <li>DISC</li>
          <li>
            Compliance:{" "}
            <span className="b">{disc.compliance_score ?? "No Data yet"}</span>
          </li>
          <li>
            Dominance:{" "}
            <span className="b">{disc.dominance_score ?? "No Data yet"}</span>
          </li>
          <li>
            Influence:{" "}
            <span className="b">{disc.influence_score ?? "No Data yet"}</span>
          </li>
          <li>
            Steadiness:{" "}
            <span className="b">{disc.steadiness_score ?? "No Data yet"}</span>
          </li>
        </ul>
        <ul className="pr-binfo-meta">
          <li>
            English:{" "}
            <span className="b">{english.english_score ?? "No Data yet"}</span>
          </li>
          <li>
            Last Active: <span className="b">No Data yet</span>
          </li>
          <li>
            Member Since:
            <span className="b">{formatDate(created)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BasicInformation;
