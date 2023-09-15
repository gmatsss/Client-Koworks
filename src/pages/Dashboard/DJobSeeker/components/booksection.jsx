import book from "../../../../imgs/book.png";
const BookSection = () => {
  return (
    <div className="row booksection">
      <section className="content-section book-section">
        <div className="container k-container">
          <div className="row align-items-center">
            <div className="col-5 book-content">
              <span>THE ULTIMATE</span>
              <h2 className="book-title">
                <span>SALARY</span>
                <span>GUIDE</span>
              </h2>
              <p>
                FOR HIRING FILIPINO <br />
                VIRTUAL ASSISTANTS
              </p>
              <a href="#" className="btn-default-blue">
                DOWNLOAD PDF
              </a>
            </div>
            <div className="col-7 book-img">
              <img src={book} alt="Jobseekers Name" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookSection;
