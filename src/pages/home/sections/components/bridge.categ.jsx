import { useNavigate } from "react-router-dom";

const B_categories = ({ categories, userRole }) => {
  const navigate = useNavigate();

  const handleCategory = (title) => {
    const path =
      userRole === "employee"
        ? `/SearchJob?s=${encodeURIComponent(title)}`
        : `/SearchEmployee?s=${encodeURIComponent(title)}`;
    navigate(path);
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
