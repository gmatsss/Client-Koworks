import { useEffect, useState } from "react";

import { fetchData } from "../../../../api/api";
import useOnce from "../../../../api/useOnce";

function TestScores({ onTestScoresChange }) {
  // State for test scores
  const [dominanceScore, setDominanceScore] = useState("");
  const [influenceScore, setInfluenceScore] = useState("");
  const [steadinessScore, setSteadinessScore] = useState("");
  const [complianceScore, setComplianceScore] = useState("");
  const [discImg, setDiscImg] = useState(null);
  const [iqScore, setIqScore] = useState("");
  const [iqImg, setIqImg] = useState(null);
  const [englishScore, setEnglishScore] = useState("");
  const [englishImg, setEnglishImg] = useState(null);
  // State variables for base64 representations
  const [discImgBase64, setDiscImgBase64] = useState(null);
  const [iqImgBase64, setIqImgBase64] = useState(null);
  const [englishImgBase64, setEnglishImgBase64] = useState(null);

  // Helper function to convert file to base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  useEffect(() => {
    // Convert discImg to base64
    if (discImg) {
      toBase64(discImg)
        .then((result) => setDiscImgBase64(result))
        .catch((error) =>
          console.error("Error converting discImg to base64:", error)
        );
    }

    // Convert iqImg to base64
    if (iqImg) {
      toBase64(iqImg)
        .then((result) => setIqImgBase64(result))
        .catch((error) =>
          console.error("Error converting iqImg to base64:", error)
        );
    }

    // Convert englishImg to base64
    if (englishImg) {
      toBase64(englishImg)
        .then((result) => setEnglishImgBase64(result))
        .catch((error) =>
          console.error("Error converting englishImg to base64:", error)
        );
    }
  }, [discImg, iqImg, englishImg]);

  useEffect(() => {
    // Whenever test scores change, we'll notify the parent component
    onTestScoresChange({
      disc: {
        dominance_score: dominanceScore,
        influence_score: influenceScore,
        steadiness_score: steadinessScore,
        compliance_score: complianceScore,
        disc_img: discImgBase64,
      },
      iq: {
        iq_score: iqScore,
        iq_img: iqImgBase64,
      },
      english: {
        english_score: englishScore,
        english_img: englishImgBase64,
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

  const FetchtestScores = async () => {
    const testScoresResponse = await fetchData(
      "JobSeekerRoutes/getTestScoresByUserId"
    );
    if (testScoresResponse.data) {
      const testData = testScoresResponse.data;
      // Assuming you have similar useState hooks for TestData
      setDominanceScore(testData.disc.dominance_score || null);
      setInfluenceScore(testData.disc.influence_score || null);
      setSteadinessScore(testData.disc.steadiness_score || null);
      setComplianceScore(testData.disc.compliance_score || null);
      setDiscImg(testData.disc.disc_img || null);
      setIqScore(testData.iq.iq_score || null);
      setIqImg(testData.iq.iq_img || null);
      setEnglishScore(testData.english.english_score || null);
      setEnglishImg(testData.english.english_img || null);
    }
  };

  useOnce(FetchtestScores);

  // Render the test scores form elements here...
  return (
    // ... JSX code for the test scores form elements ...
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
