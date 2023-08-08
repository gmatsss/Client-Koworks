import Item from "./components/item.emp";

const Emp_online = () => {
  return (
    <section className="content-section content-testimonials light-grey-bg">
      <div className="container k-container">
        <div className="row">
          <div className="col text-center">
            <h2 className="content-title f-45 blue">
              Our Employers Love OnlineJobs
            </h2>
          </div>
        </div>
        <div className="row mtop-90">
          <Item
            quote={
              "I used Linkage to find a VA, and it was so easy! I found my VA in less than a week—I was very specific about the kind of person I wanted. With Linkage, I was able to find the right one! The platform makes it easy for me to give specifics about the skills that I was looking for for the job."
            }
            name={"Regina Philipps"}
          />

          <Item
            quote={
              "I was so happy to find Linkage! There were some tasks I simply did not have time for, and I needed to hire a virtual assistant to do them. Thankfully, Linkage saved the day! I was able to find Nathan who had exactly the skills my company was looking for in less than a week. Honestly, it couldn't have been easier."
            }
            name={"Liza Edwards "}
          />

          <Item
            quote={
              "Linkage helped me find a talented and competent VA in the easiest way possible. Virtual Assistants who apply for a job via Linkage are really highly competent!"
            }
            name={"Claire Johnson  "}
          />
        </div>
      </div>
    </section>
  );
};

export default Emp_online;
