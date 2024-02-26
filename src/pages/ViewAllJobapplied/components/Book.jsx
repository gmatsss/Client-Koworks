import book from "../../../imgs/book.png";
const Book = () => {
  return (
    <section class="content-section book-section">
      <div class="container k-container">
        <div class="row align-items-center">
          <div class="col-5 book-content">
            <span>THE ULTIMATE</span>
            <h2 class="book-title">
              <span>SALARY</span>
              <span>GUIDE</span>
            </h2>
            <p>
              FOR HIRING FILIPINO <br />
              VIRTUAL ASSISTANTS
            </p>
            <a href="#" class="btn-default-blue">
              DOWNLOAD PDF
            </a>
          </div>
          <div class="col-7 book-img">
            <img src={book} alt="Jobseekers Name" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
