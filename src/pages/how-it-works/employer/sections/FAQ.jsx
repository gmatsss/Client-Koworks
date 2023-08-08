import { useState } from "react";
import Item from "./components/item.FAQ";
const Faq = () => {
  return (
    <section className="content-section content-testimonials white-bg">
      <div className="container k-container">
        <div className="row">
          <div className="col text-center">
            <h2 className="content-title f-45 blue">
              Frequently Asked Questions (Employers)
            </h2>
          </div>
        </div>
        <div className="row mtop-90">
          <div className="col">
            <h3 className="blue">Linkage Virtual Assistants</h3>
            <div className="accordion mtop-30" id="faqAP">
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
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Having a Dedicated VA</h3>
            <div className="accordion mtop-30" id="faqDVA">
              <Item
                question={" What does having a dedicated VA entail?"}
                answer={
                  " A dedicated VA is someone who will be your primary point of contact on a regular basis. Simply treat your VA like a regular employee and train them to accomplish things the way you desire. Our virtual assistants are well-versed in the majority of the common tasks that we receive from our clients; nevertheless, because each client has unique needs, we encourage that you spend some time with your dedicated VA to discuss what you need done and how you want it done. Spending some time with your VA at the start is always beneficial in the long term."
                }
                id={"faqDVAOne"}
              />

              <Item
                question={
                  "Will my hired VA be working on weekends or on holidays?"
                }
                answer={
                  "Your virtual assistant will work as long as you need them to. Our virtual assistants work outside of normal business hours. Do you need them to work on weekends or even on US holidays for a unique project? That's not an issue! Just let the VA know ahead of time that you'd like them to work on certain days, and they'll be happy to accommodate."
                }
                id={"faqDVATwo"}
              />

              <Item
                question={" What schedule will my VA follow?"}
                answer={
                  "Your hired VA will work in the American time zone or in whatever time zone of their customer is. Despite the fact that they are physically located in the Philippines, the time difference will not be an issue because the VAs are accustomed to working at night or on American time. Your VA will work with your schedule because they are always adapting and coping with their clients' needs and expectations."
                }
                id={"faqDVAThree"}
              />
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Recruitment</h3>
            <div className="accordion mtop-30" id="faqRQ">
              <Item
                question={
                  "Will you hire people particularly to meet our needs? Or do you already have a team of people in place?"
                }
                answer={
                  "Our main goal is to match the right clients with the right employees in order to create a win-win situation and a pleasant working environment. We normally hire people that are precisely suited to your needs. We usually have stand-by staff ready to start for more general VA duties."
                }
                id={"faqRQOne"}
              />

              <Item
                question={
                  "How do I know that my business and customer details will be safe?"
                }
                answer={
                  "Our business relies heavily on confidentiality. We provide all of our clients with a legally binding NDA (non-disclosure agreement). We take all security and privacy concerns very seriously, and we expect our employees to act with the utmost professionalism at all times. On a need-to-know basis, Linkage shares confidential information with its employees. Furthermore, all VAs are obliged to sign NDAs individually."
                }
                id={"faqRQTwo"}
              />
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Supervision</h3>
            <div className="accordion mtop-30" id="faqSV">
              <Item
                question={
                  "Is it possible for my VA to work during my preferred hours/time zone?"
                }
                answer={
                  "Yes. We can source for VA’s who are willing to work depending on the work schedule you have specified."
                }
                id={"faqSVOne"}
              />

              <Item
                question={
                  "What if I need someone with flexible hours, instead of the normal 9 to 5?"
                }
                answer={
                  "Linkage realizes that a flexible approach to working hours is often linked to the success of certain clients. Our services are geared to accommodate your time schedule, whatever the need."
                }
                id={"faqSVTwo"}
              />
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Signing Up</h3>
            <div className="accordion mtop-30" id="faqSU">
              <Item
                question={"After I sign up, what happens next?"}
                answer={
                  "Within 12 to 24 hours of signing up, one of our Project Managers will contact you and assign you a dedicated VA who, based on your needs, they believe will be the greatest fit for you. After you sign up, you may usually start sending your work the next day (within 24 hours)."
                }
                id={"faqSUOne"}
              />

              <Item
                question={"   What does the free account get me?"}
                answer={
                  "You may post a job and see job applications for free. It provides you a good indication of whether or not you'll be able to discover someone suitable. You won't be able to see or speak with applicants until you upgrade. We don't provide a free trial for a reason. After you've paid for an account, you'll be able to interview workers."
                }
                id={"faqSUTwo"}
              />
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Cancellations</h3>
            <div className="accordion mtop-30" id="faqCCS">
              <Item
                question={"If I commit, am I locked in to any contracts?"}
                answer={
                  "If you are unhappy with the present VA, you may always contact your Project Manager and share your issues. If you let us know about it, we'll either replace them or terminate your contract right away. You have nothing to lose and everything to gain by taking this chance."
                }
                id={"faqCCSOne"}
              />

              <Item
                question={"Can I cancel any time?"}
                answer={
                  "There are no contracts, and you can upgrade, downgrade, or cancel your subscription at any time before the end of your current monthly cycle. Just send us an email to support@linkage.ph or inform your Project Manager/VA of the change, and we'll make the necessary changes to your plan."
                }
                id={"faqCCSTwo"}
              />
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Connecting With Your VAs</h3>
            <div className="accordion mtop-30" id="faqCVA">
              <Item
                question={"How will I communicate with my Virtual Assistant?"}
                answer={
                  <ul>
                    <li>
                      We provide a vast range of communication options to suit
                      all client needs. Our aim is to make communication easy
                      and simple, just like they were working in your own
                      office. These include:
                    </li>
                    <li>
                      An office phone with a local number in ‘your’ city. (at no
                      additional charge to you)
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
                      NB – VOIP phone cost has changed – Outgoing calls are now
                      rated.
                    </li>
                    <li>Skype or others</li>
                    <li>Email</li>
                    <li>
                      Online management tools that you use like Trello, Base
                      Camp or Smartsheet that you use
                    </li>
                  </ul>
                }
                id={"faqCVAOne"}
              />

              <Item
                question={
                  "Can we put our virtual assistant’s details on our website?"
                }
                answer={
                  "Yes, you certainly can. In fact, we strongly advise it. We recommend that you approach your new employee as though he or she were any other new employee."
                }
                id={"faqCVATwo"}
              />

              <Item
                question={
                  " Can we issue our virtual assistant an email address?"
                }
                answer={
                  "Yes, you certainly can. You might wish to create an email header with your workplace information and possibly a photo."
                }
                id={"faqCVAThree"}
              />
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Paying Your VAs</h3>
            <div className="accordion mtop-30" id="faqPVA">
              <Item
                question={
                  "How much should I pay my Filipino Virtual Assistant?"
                }
                answer={
                  "The majority of Filipino VAs have earned a bachelor's degree or higher. Virtual assistant salaries range from $350-$450 per month for entry-level positions, with experienced and more specialized virtual assistants earning between $450 and $650 per month. This is built on a database of over 100,000 virtual assistants in Linkage."
                }
                id={"faqPVAOne"}
              />
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Rewards</h3>
            <div className="accordion mtop-30" id="faqRW">
              <Item
                question={
                  "Is it possible to compensate our virtual assistant for their efforts?"
                }
                answer={
                  "Yes, you certainly can. Our advice is to let us know how much you'd like to donate, and we'll add it to your next monthly invoice and send it to you in full. Bonuses are not expected, but they are greatly appreciated. We have our own bonus structure here at linkage to reward their efforts."
                }
                id={"faqRWOne"}
              />
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Culture</h3>
            <div className="accordion mtop-30" id="faqCT">
              <Item
                question={
                  "I keep hearing about this 13th Month Pay, what is it?"
                }
                answer={
                  "In summary,the 13th Month Pay benefit in the Philippines is a legislative and mandated benefit that companies are required to pay to rank-and-file employees on a yearly basis. To put it simply, covered employees are entitled to an extra compensation benefit equivalent to one-twelfth (1/12) of their income for the same calendar year."
                }
                id={"faqCTOne"}
              />
            </div>
          </div>
        </div>
        <div className="row mtop-45">
          <div className="col">
            <h3 className="blue">Other FAQs</h3>
            <div className="accordion mtop-30" id="faqOFQ">
              <Item
                question={
                  "Do you have any clients or sorts of businesses that you won't work with?"
                }
                answer={
                  "Yes, they do exist. We shall not promote clients or enterprises that we believe are unethical or could expose our employees or firm to disgrace or embarrassment. In fact, we screen' our clients in the same way that we do our employees! That is correct. We're seeking for employees and clients that want to work with us for a long time. That a result, it's critical that we select clients with the same care as we do our employees."
                }
                id={"faqOFQOne"}
              />

              <Item
                question={"Why outsource to the Philippines?"}
                answer={
                  "You may free up your on-shore team to focus on core business activities by outsourcing to the Philippines, and have the off-shore staff handle the manual processes and administrative tasks. Outsourcing allows you to expand your business quickly while also giving you the freedom you require. It saves money on infrastructure, office space, consumables, and human resources functions. Outsourcing is not only cost-effective, but it also allows you to expand your service offerings."
                }
                id={"faqOFQTwo"}
              />
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

export default Faq;
