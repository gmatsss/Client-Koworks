const FAQseeker = () => {
  return (
    <section className="content-section content-testimonials white-bg">
      <div className="container k-container">
        <div className="row">
          <div className="col text-center">
            <h2 className="content-title f-45 blue">
              Frequently Asked Questions (Jobseekers)
            </h2>
          </div>
        </div>
        <div className="row mtop-90">
          <div className="col">
            <h3 className="blue">Becoming a Linkage applicant</h3>
            <div className="accordion mtop-30" id="faqAP">
              <div className="accordion-item">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqOne"
                  aria-expanded="true"
                  aria-controls="faqOne"
                >
                  Do I need a college degree to apply for a job?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </button>
                <div
                  id="faqOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAP"
                >
                  <div className="accordion-body">
                    <p>
                      A university diploma is a plus, but it is not required.
                      You will be accommodated as long as you meet the minimum
                      requirements for a certain position.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <a
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqTwo"
                  aria-expanded="false"
                  aria-controls="faqTwo"
                >
                  Do you accept fresh graduates?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  id="faqTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAP"
                >
                  <div className="accordion-body">
                    <p>
                      YES! On the platform, there are thousands of firms looking
                      to hire people with a variety of skills. Hundreds of
                      thousands of people have found work through Linkage, and
                      we've only had a few instances when someone was unable to
                      find a job.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <a
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqThree"
                  aria-expanded="false"
                  aria-controls="faqThree"
                >
                  Do you have any age limit?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  id="faqThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAP"
                >
                  <div className="accordion-body">
                    <p>
                      We follow the clients' individual requirements and
                      preferences. As long as you’re above 18 and legally
                      permitted to work. Age isn't a consideration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <a
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqFour"
                  aria-expanded="false"
                  aria-controls="faqFour"
                >
                  Is there going to be a job interview?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  id="faqFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAP"
                >
                  <div className="accordion-body">
                    <p>
                      There will be job interviews, of course. Depending on your
                      employer, it could be by email, Skype call, or video call.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Building your profile and finding clients</h3>
            <div className="accordion mtop-30" id="faqCS">
              <div className="accordion-item">
                <a
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCSOne"
                  aria-expanded="true"
                  aria-controls="faqCSOne"
                >
                  How will I get clients?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  id="faqCSOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqCS"
                >
                  <div className="accordion-body">
                    <p>
                      To get an employer or an online job, you need to sign up
                      for a Linkage account. Please provide as much information
                      that you can; the more information, the more chances you
                      have of getting hired.
                    </p>
                    <p>
                      Once your profile is ready, you can apply for jobs , which
                      is more preferable, or wait for employers to contact you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <a
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCSTwo"
                  aria-expanded="false"
                  aria-controls="faqCSTwo"
                >
                  What happens if I make a false statement on my profile?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  id="faqCSTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqCS"
                >
                  <div className="accordion-body">
                    <p>
                      We have real individuals manually checking the profiles,
                      and we make every effort to verify that all of the
                      information on the site is accurate. However, there are
                      times when this is not discovered until it is too late.
                      You risk getting banned from Linkage if you are detected,
                      so be sure all of the information in your profile is
                      accurate.
                    </p>
                    <p>
                      Even if you don't get discovered (which is unusual), you
                      might land a job with an employer that will be
                      disappointed in your work since you didn't have the
                      talents you listed on your resume. The employer is
                      unlikely to pay for work that has (or has not) been
                      completed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <a
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCSThree"
                  aria-expanded="false"
                  aria-controls="faqCSThree"
                >
                  How long will it take before I get hired?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  id="faqCSThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqCS"
                >
                  <div className="accordion-body">
                    <p>
                      This is all up to you. You can wait for an employer to
                      hire you, but this may take some time. Applying for
                      several jobs that you are qualified for and responding
                      quickly to queries is the fastest method to get hired.
                      Only apply for jobs that are a suitable match for your
                      talents and expertise. This is so you don't waste time
                      applying for jobs you don't stand a chance of getting.
                    </p>
                    <p>
                      It also aids in the application process for a variety of
                      employment. Consider your fundamental abilities and how
                      they might be used in a variety of other, if slightly
                      different, careers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Communicating with clients</h3>
            <div className="accordion mtop-30" id="faqCC">
              <div className="accordion-item">
                <a
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCCOne"
                  aria-expanded="true"
                  aria-controls="faqCCOne"
                >
                  Should I be fluent in English to apply for a job?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  id="faqCCOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqCC"
                >
                  <div className="accordion-body">
                    <p>
                      No, however excellent English will give you an advantage.
                      The site's majority of employers are from the United
                      States, the United Kingdom, or Australia (among others).
                      Remember that all interaction will be done in English, so
                      if you have trouble understanding or expressing yourself
                      in English, it may be a little more challenging for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Getting paid</h3>
            <div className="accordion mtop-30" id="faqGP">
              <div className="accordion-item">
                <a
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqGPOne"
                  aria-expanded="true"
                  aria-controls="faqGPOne"
                >
                  How much is the salary?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  id="faqGPOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqGP"
                >
                  <div className="accordion-body">
                    <p>
                      The salary package you'll receive will be determined by
                      your background, job experience, and qualifications as
                      they relate to the position you’re hiring for.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <a
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqGPTwo"
                  aria-expanded="true"
                  aria-controls="faqGPTwo"
                >
                  How do I get paid?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  id="faqGPTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqGP"
                >
                  <div className="accordion-body">
                    <p>
                      Employers pay their employees directly, rather than
                      through Linkage. We do not collect a percentage of salary
                      payments as a charge. As a result, how workers are
                      compensated is decided by both the company and the
                      employee.
                    </p>
                    <p>
                      There are numerous ways for you to get paid. Depending on
                      the service you use, you may even be able to get your
                      money at home.
                    </p>
                    <p>
                      Here are a few websites where your boss can pay you via
                      the internet.
                    </p>
                    <ul>
                      <li>Easypay</li>
                      <li>Payoneer</li>
                      <li>PayPal</li>
                      <li>
                        Western Union is an international money transfer
                        service.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <a
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqGPThree"
                  aria-expanded="true"
                  aria-controls="faqGPThree"
                >
                  When do I get paid?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  id="faqGPThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqGP"
                >
                  <div className="accordion-body">
                    <p>
                      It all depends on the terms of your contract with your
                      employer. You will usually get paid every two weeks or
                      once a month. Workers should, however, request weekly pay
                      when they are first hired to reduce the danger of working
                      for a new business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Support</h3>
            <div className="accordion mtop-30" id="faqSP">
              <div className="accordion-item">
                <a
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqSPOne"
                  aria-expanded="true"
                  aria-controls="faqSPOne"
                >
                  Will I have to install any software in order to utilize
                  Linkage KoWorks?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  id="faqSPOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqSP"
                >
                  <div className="accordion-body">
                    <p>
                      No, other than an Internet browser, Linkage does not
                      require any software to be purchased or placed onto your
                      computer in order to utilize our service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <a
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqSPTwo"
                  aria-expanded="true"
                  aria-controls="faqSPTwo"
                >
                  Where is your office located?
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  id="faqSPTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqSP"
                >
                  <div className="accordion-body">
                    <p>
                      Our main office is located at Quezon Hill, Baguio City.
                    </p>
                    <p>
                      Exact address: #3 G/F Calle Uno Building, First Road
                      Quezon Hill, 2600 Baguio City, Philippines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center mtop-60">
          <div className="col">
            <a href="#" className="btn-default-red">
              More Great FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQseeker;
