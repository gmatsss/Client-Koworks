import W_stats from "./components/workers.stats";
import W_dbbtn from "./components/workers.databtn";
import W_jobseeker from "./components/workers.jobseeker";

const F_workers = () => {
    return (
        <section className="content-section verified-jobseekers">
            <div className="container k-container">
                <div className="row">
                    <div className="col col-md-12 px-0">
                        <h2 className="section-title">
                            <span>Most Recent Verified Jobseekers</span>
                        </h2>
                    </div>
                </div>
                <W_jobseeker />
                <W_dbbtn />
                <W_stats />
            </div>
        </section>
    );
};

export default F_workers;
