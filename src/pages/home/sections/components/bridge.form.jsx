import { useNavigate } from "react-router-dom";

const B_form = ({ userRole }) => {
  let navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.s.value;
    // Determine the path based on the userRole
    const path =
      userRole === "employee"
        ? `/SearchJob?s=${searchQuery}`
        : `/SearchEmployee?s=${searchQuery}`;
    navigate(path);
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
      <a href="/PostAJob" className="btn-default-red">
        Post a Job - It's Free
      </a>
    </div>
  );
};

export default B_form;
