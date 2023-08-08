const Item = ({ quote, name, ...otherprops }) => {
  //   for the meantime wala pang server
  return (
    <div className="col">
      <div className="tm-content">
        <span className="quote">“</span>
        <p>{quote}</p>
        <div className="tm-profile">
          <img src="../../imgs/tm3.png" alt="Jobseekers Name" />
          <div className="tm-name">
            <p>{name}</p>
            <span className="tm-star">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
