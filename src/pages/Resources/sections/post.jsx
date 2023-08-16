import React from "react";

const PostItem = ({
  date,
  imgSrc,
  imgAlt,
  title,
  link,
  description,
  author,
}) => (
  <div className="r-main-content">
    <div className="row mtop-70 align-items-center">
      <div className="col col-2">
        <div className="r-date">
          <span className="rd-month">{date.month}</span>
          <span className="rd-dy">{date.day}</span>
        </div>
      </div>
      <div className="col col-3">
        <div className="r-img">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </div>
      <div className="col col-7">
        <div className="r-content">
          <h3 className="blue f-23">
            <a href={link}>{title}</a>
          </h3>
          <div className="remove-imgs">
            <p>{description}</p>
          </div>
          <div className="r-meta">
            <span>
              <img src="../../imgs/icons/author-icon.png" alt="Author Name" />
              {author}
            </span>
            {/* You can add the like and share functionality here using React's state and event handlers */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Post = () => (
  <section className="content-section white-bg resources-lists">
    <div className="container k-container">
      <PostItem
        date={{ month: "05", day: "19/22" }}
        imgSrc="https://linkagekoworks.viewourdesign.info/storage/images/r1-img.jpg"
        imgAlt="How The Great American Resignation Gives Rise to an Industry of Virtual Assistants in the Philippines"
        title="How The Great American Resignation Gives Rise to an Industry of Virtual Assistants in the Philippines"
        link="https://linkagekoworks.viewourdesign.info/resources/how-the-great-american-resignation-gives-rise-to-an-industry-of-virtual-assistants-in-the-philippines"
        description="According to the US government's jobs report, over 20 million people quit their jobs in the last half of 2021. People began calling this the 'great resignation' or the 'big quit' - a term that describes the beyond-normal quit rate of American workers that began during spring in 2021 and contin..."
        author="Admin Linkage"
      />
      <PostItem
        date={{ month: "05", day: "19/22" }}
        imgSrc="https://linkagekoworks.viewourdesign.info/storage/images/621654255432-img-a1.jpg"
        imgAlt="Why Filipinos are World-Renown Virtual Assistants"
        title="Why Filipinos are World-Renown Virtual Assistants"
        link="https://linkagekoworks.viewourdesign.info/resources/why-filipinos-are-world-renown-virtual-assistants"
        description="The internet has forever changed the world. Our means of communication, forms of entertainment, and means of buying things have some element of the internet present in them. The way we do our jobs is no exception to this. Hence, the rise of remote workers. The idea of working for a client thousands..."
        author="Admin Linkage"
      />
      <PostItem
        date={{ month: "05", day: "19/22" }}
        imgSrc="https://linkagekoworks.viewourdesign.info/storage/images/r3-img.jpg"
        imgAlt="5 Best Reasons Why you Should hire a Filipino Virtual Assistant"
        title="5 Best Reasons Why you Should hire a Filipino Virtual Assistant"
        link="https://linkagekoworks.viewourdesign.info/resources/5-best-reasons-why-you-should-hire-a-filipino-virtual-assistant"
        description="Running a business takes a lot of time and effort. Often, you would find yourself juggling basic tasks such as your business's day-to-day operations and administrative ones as well. Traditionally, one would think that the solution to this is to hire an on-site administrative assistant. While this op..."
        author="Admin Linkage"
      />
    </div>
  </section>
);

export default Post;
