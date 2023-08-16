import B_categories from "./components/bridge.categ";
import B_content from "./components/bridge.content";
import B_form from "./components/bridge.form";
import sampleJobs from "../../SearchJob/sampleJobs.json";
const Bridge_gap = () => {
  const uniqueTitles = Array.from(
    new Set(sampleJobs.jobs.map((job) => job.title))
  ).map((title, index) => ({ id: index + 1, title: title }));

  return (
    <section className="banner-section ">
      <div className="container k-container">
        <div className="row align-items-center">
          <div className="col col-md-7 px-0">
            <B_content />
            <B_form />
            <B_categories categories={uniqueTitles} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridge_gap;
