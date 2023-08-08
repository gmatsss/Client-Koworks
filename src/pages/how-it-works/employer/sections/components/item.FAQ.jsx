const Item = ({ question, answer, id, ...otherprops }) => {
  return (
    <div className="accordion-item">
      <span
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="true"
        aria-controls={id}
      >
        {question}
        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
      </span>
      <div
        id={id}
        className={`accordion-collapse collapse`}
        aria-labelledby="headingOne"
      >
        <div className="accordion-body">
          <span>{answer}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
