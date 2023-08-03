const Item = ({ question, answer, id, ...otherprops }) => {
  return (
    <div class="accordion-item">
      <span
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="true"
        aria-controls={id}
      >
        {question}
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
      </span>
      <div
        id={id}
        className={`accordion-collapse collapse`}
        aria-labelledby="headingOne"
      >
        <div class="accordion-body">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
