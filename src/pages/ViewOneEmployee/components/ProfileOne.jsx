import React from "react";

const ProfileOne = ({ user = {} }) => {
  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const ageDiff = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const age = user.employeeProfile?.bday
    ? calculateAge(user.employeeProfile.bday)
    : "No data yet";
  const gender = user.employeeProfile?.gender || "No data yet";
  const location = "Not specified"; // Replace with actual logic if available
  const iqScore = user.testScores?.iq?.iq_score || "No data yet";
  const englishScore = user.testScores?.english?.english_score || "No data yet";
  const lastActive = user.lastLogin
    ? new Date(user.lastLogin).toLocaleDateString("en-US")
    : "No data yet";
  const memberSince = user.created
    ? new Date(user.created).toLocaleDateString("en-US")
    : "No data yet";
  const compliance = user.testScores?.disc?.compliance_score || "No data yet";
  const dominance = user.testScores?.disc?.dominance_score || "No data yet";
  const influence = user.testScores?.disc?.influence_score || "No data yet";
  const steadiness = user.testScores?.disc?.steadiness_score || "No data yet";

  return (
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
          Location: <span className="b">{location}</span>
        </li>
      </ul>
      <ul className="pr-disc">
        <h5>Test taken</h5>
        <li>
          IQ Score: <span className="b">{iqScore}</span>
        </li>
        <li>
          Compliance: <span className="b">{compliance}</span>
        </li>
        <li>
          Dominance: <span className="b">{dominance}</span>
        </li>
        <li>
          Influence: <span className="b">{influence}</span>
        </li>
        <li>
          Steadiness: <span className="b">{steadiness}</span>
        </li>

        <li>
          English Proficiency: <span className="b">{englishScore}</span>
        </li>
      </ul>
      <ul class="pr-binfo-meta">
        <h5>Membership Information</h5>
        <li>
          Last Active: <span className="b">{lastActive}</span>
        </li>
        <li>
          Member Since: <span className="b">{memberSince}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileOne;
