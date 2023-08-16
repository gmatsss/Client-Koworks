import { useNavigate } from "react-router-dom";

const B_form = () => {
  let navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.s.value;
    navigate(`/searchjob?s=${searchQuery}`);
  };

  return (
    <div className="banner-form">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="s"
          className="banner-search"
          placeholder="What skills are you looking for?"
        />
        <button type="submit" id="search-btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
      <span>or</span>
      <a href="/post-a-job" className="btn-default-red">
        Post a Job - It's Free
      </a>
    </div>
  );
};

export default B_form;
