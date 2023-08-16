import { useNavigate } from "react-router-dom";

const B_categories = ({ categories }) => {
  const navigate = useNavigate();

  const handleCategory = (title) => {
    navigate(`/SearchJob?s=${title}`);
  };

  return (
    <div className="banner-categories">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleCategory(category.title);
              }}
            >
              {category.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default B_categories;
