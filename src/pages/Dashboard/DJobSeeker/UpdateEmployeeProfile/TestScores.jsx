import { useContext, useEffect, useState } from "react";

import { fetchData } from "../../../../api/api";
import useOnce from "../../../../api/useOnce";
import { UserContext } from "../../../../context/UserContext";

function TestScores({ onTestScoresChange }) {
  const { currentUser } = useContext(UserContext);

  const [dominanceScore, setDominanceScore] = useState("");
  const [influenceScore, setInfluenceScore] = useState("");
  const [steadinessScore, setSteadinessScore] = useState("");
  const [complianceScore, setComplianceScore] = useState("");
  const [discImg, setDiscImg] = useState(null);
  const [iqScore, setIqScore] = useState("");
  const [iqImg, setIqImg] = useState(null);
  const [englishScore, setEnglishScore] = useState("");
  const [englishImg, setEnglishImg] = useState(null);

  useEffect(() => {
    // Whenever test scores change, we'll notify the parent component
    onTestScoresChange({
      disc: {
        dominance_score: dominanceScore,
        influence_score: influenceScore,
        steadiness_score: steadinessScore,
        compliance_score: complianceScore,
        disc_img: discImg,
      },
      iq: {
        iq_score: iqScore,
        iq_img: iqImg,
      },
      english: {
        english_score: englishScore,
        english_img: englishImg,
      },
    });
  }, [
    dominanceScore,
    influenceScore,
    steadinessScore,
    complianceScore,
    discImg,
    iqScore,
    iqImg,
    englishScore,
    englishImg,
  ]);

  // Use the TestScores data from currentUser
  const testScoresData = currentUser?.testScores;
  useEffect(() => {
    if (testScoresData) {
      setDominanceScore(testScoresData.disc.dominance_score || "");
      setInfluenceScore(testScoresData.disc.influence_score || "");
      setSteadinessScore(testScoresData.disc.steadiness_score || "");
      setComplianceScore(testScoresData.disc.compliance_score || "");
      setDiscImg(testScoresData.disc.disc_img || "");
      setIqScore(testScoresData.iq.iq_score || "");
      setIqImg(testScoresData.iq.iq_img || "");
      setEnglishScore(testScoresData.english.english_score || "");
      setEnglishImg(testScoresData.english.english_img || "");
    }
  }, [testScoresData]);

  return (
    <div className="kform-group mtop-30">
      <h3 className="f-20 b blue">Test Scores</h3>
      <div className="row">
        <div className="col">
          <div className="test-border">
            <h4 className="f-18 blue">DISC</h4>
            <div className="test-form mtop-20">
              <label for="dominance_score" className="fn">
                Dominance Score
              </label>
              <input
                type="number"
                name="dominance_score"
                value={dominanceScore}
                placeholder="Enter Score"
                onChange={(e) => setDominanceScore(e.target.value)}
              />
            </div>
            <div className="test-form mtop-20">
              <label for="influence_score" className="fn">
                Influence Score
              </label>
              <input
                type="number"
                name="influence_score"
                value={influenceScore}
                placeholder="Enter Score"
                onChange={(e) => setInfluenceScore(e.target.value)}
              />
            </div>
            <div className="test-form mtop-20">
              <label for="steadiness_score" className="fn">
                Steadiness Score
              </label>
              <input
                type="number"
                name="steadiness_score"
                value={steadinessScore}
                placeholder="Enter Score"
                onChange={(e) => setSteadinessScore(e.target.value)}
              />
            </div>
            <div className="test-form mtop-20">
              <label for="compliance_score" className="fn">
                Compliance Score
              </label>
              <input
                type="number"
                name="compliance_score"
                value={complianceScore}
                placeholder="Enter Score"
                onChange={(e) => setComplianceScore(e.target.value)}
              />
            </div>
            <div className="test-form mtop-20">
              <label for="disc_img" className="fn">
                Screenshot
              </label>
              <input
                type="file"
                name="disc_img"
                placeholder={discImg ? discImg.name : ""}
                onChange={(e) => setDiscImg(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="test-border">
            <h4 className="f-18 blue">IQ</h4>
            <div className="test-form mtop-20">
              <label for="iq_score" className="fn">
                IQ Score
              </label>
              <input
                type="number"
                name="iq_score"
                value={iqScore}
                placeholder="Enter Score"
                onChange={(e) => setIqScore(e.target.value)}
              />
            </div>
            <div className="test-form mtop-20">
              <label for="iq_img" className="fn">
                Screenshot
              </label>
              <input
                type="file"
                name="iq_img"
                placeholder={iqImg ? iqImg.name : ""}
                onChange={(e) => setIqImg(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="test-border">
            <h4 className="f-18 blue">English</h4>
            <div className="test-form mtop-20">
              <label for="english_score" className="fn">
                English Score
              </label>
              <select
                name="english_score"
                value={englishScore}
                onChange={(e) => setEnglishScore(e.target.value)}
              >
                <option value="">Select score</option>
                <option value="A1(Beginner)">A1(Beginner)</option>
                <option value="A2(Elementary)">A2(Elementary)</option>
                <option value="B1(Intermediate)">B1(Intermediate)</option>
                <option value="B2(Upper Intermediate)">
                  B2(Upper Intermediate)
                </option>
                <option value="C1(Advanced)">C1(Advanced)</option>
                <option value="C2(Advanced/Mastery)">
                  C2(Advanced/Mastery)
                </option>
              </select>
            </div>
            <div className="test-form mtop-20">
              <label for="english_img" className="fn">
                Screenshot
              </label>
              <input
                type="file"
                name="english_img"
                placeholder={englishImg ? englishImg.name : ""}
                onChange={(e) => setEnglishImg(e.target.files[0])}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestScores;
