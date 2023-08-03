import Step1 from "../../../../imgs/employer-step-1.png";
import Step2 from "../../../../imgs/employer-step-2.png";
import Step3 from "../../../../imgs/employer-step-3.png";
import Step4 from "../../../../imgs/employer-step-4.png";
import Step5 from "../../../../imgs/employer-step-5.png";

const Employee_cont = () => {
    return (
        <section className="page-content employer-content-section transparent-bg">
            <div className="container k-container">
                <div className="row align-items-center e-steps mtop-45 mbot-40">
                    <div className="col text-center e-step-img">
                        <img src={Step1} alt="" />
                    </div>
                    <div className="col e-step-content">
                        <span>Step 1</span>
                        <h2>
                            Create your
                            <br />
                            employer account
                        </h2>
                        <p>
                            Create an employer account before you can advertise
                            your vacancy on Linkage. Navigate to the register
                            page and provide your company name and email
                            address. The account verification process will begin
                            once you click “Continue.”
                        </p>
                        <a
                            href="https://linkagekoworks.viewourdesign.info/sign-up"
                            className="btn-default-red text-center"
                        >
                            Continue
                        </a>
                    </div>
                </div>
                <div className="row align-items-center e-steps mtop-45 mbot-40 ptb-40">
                    <div className="col e-step-content">
                        <span>Step 2</span>
                        <h2>
                            Get a monthly, yearly
                            <br />
                            or life-time plan
                        </h2>
                        <p>
                            Make your next great hire with Linkage. Check our
                            pricing and see what works best for you!
                        </p>
                        <a
                            href="https://linkagekoworks.viewourdesign.info/page/pricing"
                            className="btn-default-red text-center"
                        >
                            See Pricing
                        </a>
                    </div>
                    <div className="col text-center e-step-img">
                        <img src={Step2} alt="" />
                    </div>
                </div>
                <div className="row align-items-center e-steps mtop-45 mbot-40 ptb-40">
                    <div className="col text-center e-step-img">
                        <img src={Step3} alt="" />
                    </div>
                    <div className="col e-step-content">
                        <span>Step 3</span>
                        <h2>
                            Post Jobs or Contact Filipino
                            <br />
                            online job seekers direct
                        </h2>
                        <p>
                            <span className="red f-18">Search Resumes</span>
                            <br />
                            Proactively look for people who have the skills,
                            abilities, and experience you require ahead of time.
                        </p>
                        <p>
                            <span className="red f-18">Post a Job</span>
                            <br />
                            Let talented individuals come to you and apply for
                            positions.
                        </p>
                    </div>
                </div>
                <div className="row align-items-center e-steps mtop-45 mbot-40 ptb-40">
                    <div className="col e-step-content">
                        <span>Step 4</span>
                        <h2>
                            Interview and Hire your
                            <br />
                            new Virtual Staff
                        </h2>
                        <ul>
                            <li>Set an interview via email.</li>
                            <li>
                                Interview candidates like you would for a
                                regular employee.
                            </li>
                            <li>Find the ideal match.</li>
                        </ul>
                        <a
                            href="https://linkagekoworks.viewourdesign.info/search"
                            className="btn-default-red text-center"
                        >
                            Schedule Interview
                        </a>
                    </div>
                    <div className="col text-center e-step-img">
                        <img src={Step4} alt="" />
                    </div>
                </div>
                <div className="row align-items-center e-steps mtop-45 mbot-40 ptb-40">
                    <div className="col text-center e-step-img">
                        <img src={Step5} alt="" />
                    </div>
                    <div className="col e-step-content">
                        <span>Step 5</span>
                        <h2>
                            Get them to work and
                            <br />
                            start growing your business!
                        </h2>
                        <ul>
                            <li>
                                Make a job offer and negotiate pay, working
                                hours,andexpection.
                            </li>
                            <li>
                                Manage work hours of employees through our
                                exclusive platforms and pay them online.
                            </li>
                            <li>No taxes to pay.</li>
                            <li>
                                Get good at hiring and managing your Filipino
                                virtual staff.
                            </li>
                        </ul>
                        <a
                            href="https://linkagekoworks.viewourdesign.info/post-a-job"
                            className="btn-default-red text-center"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Employee_cont;
