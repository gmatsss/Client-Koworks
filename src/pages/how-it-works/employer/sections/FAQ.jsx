import { useState } from "react";
import Item from "./components/item.FAQ";
const Faq = () => {
  const [val, setVal] = useState(false);
  const Collapse = () => {
    setVal(!val);
    console.log("Collapse");
  };
  return (
    <section class="content-section content-testimonials white-bg">
      <div class="container k-container">
        <div class="row">
          <div class="col text-center">
            <h2 class="content-title f-45 blue">
              Frequently Asked Questions (Employers)
            </h2>
          </div>
        </div>
        <div class="row mtop-90">
          <div class="col">
            <h3 class="blue">Linkage Virtual Assistants</h3>
            <div class="accordion mtop-30" id="faqAP">
              <Item
                question={"What is a VA and why do I need one?"}
                answer={
                  "A virtual assistant (VA) is someon who has all of your desired skills and works for you on your preferred schedule. To ensure they're 100 percent productive, all of their job tools, apps, and computer programs are solely for your task requirements."
                }
                id={"faqOne"}
              />

              <Item
                question={"What are the skill sets of your VA's ?"}
                answer={
                  "We employ virtual assistants with a diverse set of abilities. Anything that may be done through the Internet or over the phone can be handled by our organization. Data entry, making or receiving phone calls, web research, invoicing assistance, payroll processing, recruiting assistance, email management, website updates, MS Office assistance (Word, Excel, and PowerPoint), real estate assistance (short sales, loss mitigation, uploading MLS information to various websites), social networking assistance (Twitter, Facebook, and LinkedIn), and other tasks are among the services we can provide. Our capabilities are not limited to only these. As long as you can provide training and a list of tasks that need to be done, we can help you with pretty much anything that can be done remotely."
                }
                id={"faqTwo"}
              />

              <Item
                question={"Where will my VA be located?"}
                answer={
                  " Our virtual assistants are based in the Philippines and have passed our HR team's rigorous testing. Majority have at least 2-3 years of experience working in the BPO industry, primarily for clients based in the United States. This guarantees that the VAs are exposed to and knowledgeable about American culture, which is critical to their performance as VAs for American clients."
                }
                id={"faqThree"}
              />

              <Item
                question={"Is my VA fluent in the English language?"}
                answer={
                  " Our virtual assistants are fluent in English, not just verbally but also in writing. You may rest confident that, in addition to excellent communication skills, they are also excellent listeners. There's no need to keep repeating directions. This is something we excel at."
                }
                id={"faqFour"}
              />

              <Item
                question={" How well trained are your virtual assistants?"}
                answer={
                  " Before joining Linkage, our VAs must go through a comprehensive selection process. Many of them have worked in the business world and/or have a college education.Virtual Assistants can even train to become 'Dedicated Virtual Assistants' (DVAs) in order to move further in our firm."
                }
                id={"faqFive"}
              />
            </div>
          </div>
        </div>
        <div class="row mtop-45">
          <div class="col">
            <h3 class="blue">Having a Dedicated VA</h3>
            <div class="accordion mtop-30" id="faqDVA">
              <Item
                question={" What does having a dedicated VA entail?"}
                answer={
                  " A dedicated VA is someone who will be your primary point of contact on a regular basis. Simply treat your VA like a regular employee and train them to accomplish things the way you desire. Our virtual assistants are well-versed in the majority of the common tasks that we receive from our clients; nevertheless, because each client has unique needs, we encourage that you spend some time with your dedicated VA to discuss what you need done and how you want it done. Spending some time with your VA at the start is always beneficial in the long term."
                }
                id={"faqDVAOne"}
              />

              <div class="accordion-item">
                <a
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqDVATwo"
                  aria-expanded="false"
                  aria-controls="faqDVATwo"
                >
                  Will my hired VA be working on weekends or on holidays?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqDVATwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqDVA"
                >
                  <div class="accordion-body">
                    <p>
                      Your virtual assistant will work as long as you need them
                      to. Our virtual assistants work outside of normal business
                      hours. Do you need them to work on weekends or even on US
                      holidays for a unique project? That's not an issue! Just
                      let the VA know ahead of time that you'd like them to work
                      on certain days, and they'll be happy to accommodate.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <a
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqDVAThree"
                  aria-expanded="false"
                  aria-controls="faqDVAThree"
                >
                  What schedule will my VA follow?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqDVAThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqDVA"
                >
                  <div class="accordion-body">
                    <p>
                      Your hired VA will work in the American time zone or in
                      whatever time zone of their customer is. Despite the fact
                      that they are physically located in the Philippines, the
                      time difference will not be an issue because the VAs are
                      accustomed to working at night or on American time. Your
                      VA will work with your schedule because they are always
                      adapting and coping with their clients' needs and
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mtop-45">
          <div class="col">
            <h3 class="blue">Recruitment</h3>
            <div class="accordion mtop-30" id="faqRQ">
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqRQOne"
                  aria-expanded="true"
                  aria-controls="faqRQOne"
                >
                  Will you hire people particularly to meet our needs? Or do you
                  already have a team of people in place?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqRQOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqRQ"
                >
                  <div class="accordion-body">
                    <p>
                      Our main goal is to match the right clients with the right
                      employees in order to create a win-win situation and a
                      pleasant working environment. We normally hire people that
                      are precisely suited to your needs. We usually have
                      stand-by staff ready to start for more general VA duties.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqRQTwo"
                  aria-expanded="true"
                  aria-controls="faqRQTwo"
                >
                  How do I know that my business and customer details will be
                  safe?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqRQTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqRQ"
                >
                  <div class="accordion-body">
                    <p>
                      Our business relies heavily on confidentiality. We provide
                      all of our clients with a legally binding NDA
                      (non-disclosure agreement). We take all security and
                      privacy concerns very seriously, and we expect our
                      employees to act with the utmost professionalism at all
                      times. On a need-to-know basis, Linkage shares
                      confidential information with its employees. Furthermore,
                      all VAs are obliged to sign NDAs individually.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mtop-45">
          <div class="col">
            <h3 class="blue">Supervision</h3>
            <div class="accordion mtop-30" id="faqSV">
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqSVOne"
                  aria-expanded="true"
                  aria-controls="faqSVOne"
                >
                  Is it possible for my VA to work during my preferred
                  hours/time zone?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqSVOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqSV"
                >
                  <div class="accordion-body">
                    <p>
                      Yes. We can source for VA’s who are willing to work
                      depending on the work schedule you have specified.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqSVTwo"
                  aria-expanded="true"
                  aria-controls="faqSVTwo"
                >
                  What if I need someone with flexible hours, instead of the
                  normal 9 to 5?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqSVTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqSV"
                >
                  <div class="accordion-body">
                    <p>
                      Linkage realizes that a flexible approach to working hours
                      is often linked to the success of certain clients. Our
                      services are geared to accommodate your time schedule,
                      whatever the need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mtop-45">
          <div class="col">
            <h3 class="blue">Signing Up</h3>
            <div class="accordion mtop-30" id="faqSU">
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqSUOne"
                  aria-expanded="true"
                  aria-controls="faqSUOne"
                >
                  After I sign up, what happens next?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqSUOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqSU"
                >
                  <div class="accordion-body">
                    <p>
                      Within 12 to 24 hours of signing up, one of our Project
                      Managers will contact you and assign you a dedicated VA
                      who, based on your needs, they believe will be the
                      greatest fit for you. After you sign up, you may usually
                      start sending your work the next day (within 24 hours).
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqSUTwo"
                  aria-expanded="true"
                  aria-controls="faqSUTwo"
                >
                  What does the free account get me?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqSUTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqSU"
                >
                  <div class="accordion-body">
                    <p>
                      You may post a job and see job applications for free. It
                      provides you a good indication of whether or not you'll be
                      able to discover someone suitable. You won't be able to
                      see or speak with applicants until you upgrade.
                    </p>
                    <p>
                      We don't provide a free trial for a reason. After you've
                      paid for an account, you'll be able to interview workers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mtop-45">
          <div class="col">
            <h3 class="blue">Cancellations</h3>
            <div class="accordion mtop-30" id="faqCCS">
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCCSOne"
                  aria-expanded="true"
                  aria-controls="faqCCSOne"
                >
                  If I commit, am I locked in to any contracts?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqCCSOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqCCS"
                >
                  <div class="accordion-body">
                    <p>
                      If you are unhappy with the present VA, you may always
                      contact your Project Manager and share your issues. If you
                      let us know about it, we'll either replace them or
                      terminate your contract right away. You have nothing to
                      lose and everything to gain by taking this chance.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCCSTwo"
                  aria-expanded="true"
                  aria-controls="faqCCSTwo"
                >
                  Can I cancel any time?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqCCSTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqCCS"
                >
                  <div class="accordion-body">
                    <p>
                      There are no contracts, and you can upgrade, downgrade, or
                      cancel your subscription at any time before the end of
                      your current monthly cycle. Just send us an email to
                      support@linkage.ph or inform your Project Manager/VA of
                      the change, and we'll make the necessary changes to your
                      plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mtop-45">
          <div class="col">
            <h3 class="blue">Connecting With Your VAs</h3>
            <div class="accordion mtop-30" id="faqCVA">
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCVAOne"
                  aria-expanded="true"
                  aria-controls="faqCVAOne"
                >
                  How will I communicate with my Virtual Assistant?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqCVAOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqCVA"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>
                        We provide a vast range of communication options to suit
                        all client needs. Our aim is to make communication easy
                        and simple, just like they were working in your own
                        office. These include:
                      </li>
                      <li>
                        An office phone with a local number in ‘your’ city. (at
                        no additional charge to you)
                      </li>
                      <li>Skype</li>
                      <li>Email</li>
                      <li>
                        Online management tools such as Base Camp, SmartSheet or
                        others.
                      </li>
                      <li>
                        An office phone with a local number in ‘your’ city for
                        normal use (at no additional charge to you)
                      </li>
                      <li>
                        NB – VOIP phone cost has changed – Outgoing calls are
                        now rated.
                      </li>
                      <li>Skype or others</li>
                      <li>Email</li>
                      <li>
                        Online management tools that you use like Trello, Base
                        Camp or Smartsheet that you use
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCVATwo"
                  aria-expanded="true"
                  aria-controls="faqCVATwo"
                >
                  Can we put our virtual assistant’s details on our website?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqCVATwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqCVA"
                >
                  <div class="accordion-body">
                    <p>
                      Yes, you certainly can. In fact, we strongly advise it. We
                      recommend that you approach your new employee as though he
                      or she were any other new employee.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCVAThree"
                  aria-expanded="true"
                  aria-controls="faqCVAThree"
                >
                  Can we issue our virtual assistant an email address?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqCVAThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqCVA"
                >
                  <div class="accordion-body">
                    <p>
                      Yes, you certainly can. You might wish to create an email
                      header with your workplace information and possibly a
                      photo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mtop-45">
          <div class="col">
            <h3 class="blue">Paying Your VAs</h3>
            <div class="accordion mtop-30" id="faqPVA">
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqPVAOne"
                  aria-expanded="true"
                  aria-controls="faqPVAOne"
                >
                  How much should I pay my Filipino Virtual Assistant?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqPVAOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqPVA"
                >
                  <div class="accordion-body">
                    <p>
                      The majority of Filipino VAs have earned a bachelor's
                      degree or higher.
                    </p>
                    <p>
                      Virtual assistant salaries range from $350-$450 per month
                      for entry-level positions, with experienced and more
                      specialized virtual assistants earning between $450 and
                      $650 per month.
                    </p>
                    <p>
                      This is built on a database of over 100,000 virtual
                      assistants in Linkage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mtop-45">
          <div class="col">
            <h3 class="blue">Rewards</h3>
            <div class="accordion mtop-30" id="faqRW">
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqRWOne"
                  aria-expanded="true"
                  aria-controls="faqRWOne"
                >
                  Is it possible to compensate our virtual assistant for their
                  efforts?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqRWOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqRW"
                >
                  <div class="accordion-body">
                    <p>
                      Yes, you certainly can. Our advice is to let us know how
                      much you'd like to donate, and we'll add it to your next
                      monthly invoice and send it to you in full.
                    </p>
                    <p>
                      Bonuses are not expected, but they are greatly
                      appreciated. We have our own bonus structure here at
                      linkage to reward their efforts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mtop-45">
          <div class="col">
            <h3 class="blue">Culture</h3>
            <div class="accordion mtop-30" id="faqCT">
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCTOne"
                  aria-expanded="true"
                  aria-controls="faqCTOne"
                >
                  I keep hearing about this 13th Month Pay, what is it?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqCTOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqCT"
                >
                  <div class="accordion-body">
                    <p>
                      In summary,the 13th Month Pay benefit in the Philippines
                      is a legislative and mandated benefit that companies are
                      required to pay to rank-and-file employees on a yearly
                      basis.
                    </p>
                    <p>
                      To put it simply, covered employees are entitled to an
                      extra compensation benefit equivalent to one-twelfth
                      (1/12) of their income for the same calendar year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mtop-45">
          <div class="col">
            <h3 class="blue">Other FAQs</h3>
            <div class="accordion mtop-30" id="faqOFQ">
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqOFQOne"
                  aria-expanded="true"
                  aria-controls="faqOFQOne"
                >
                  Do you have any clients or sorts of businesses that you won't
                  work with?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqOFQOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqOFQ"
                >
                  <div class="accordion-body">
                    <p>
                      Yes, they do exist. We shall not promote clients or
                      enterprises that we believe are unethical or could expose
                      our employees or firm to disgrace or embarrassment. In
                      fact, we screen' our clients in the same way that we do
                      our employees! That is correct. We're seeking for
                      employees and clients that want to work with us for a long
                      time. That a result, it's critical that we select clients
                      with the same care as we do our employees.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <a
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqOFQTwo"
                  aria-expanded="true"
                  aria-controls="faqOFQTwo"
                >
                  Why outsource to the Philippines?
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div
                  id="faqOFQTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqOFQ"
                >
                  <div class="accordion-body">
                    <p>
                      You may free up your on-shore team to focus on core
                      business activities by outsourcing to the Philippines, and
                      have the off-shore staff handle the manual processes and
                      administrative tasks. Outsourcing allows you to expand
                      your business quickly while also giving you the freedom
                      you require. It saves money on infrastructure, office
                      space, consumables, and human resources functions.
                      Outsourcing is not only cost-effective, but it also allows
                      you to expand your service offerings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center mtop-60">
          <div class="col">
            <a href="#" class="btn-default-red">
              More Great FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
