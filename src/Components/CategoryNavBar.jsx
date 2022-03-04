import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../api";

const CategoryNavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <nav className="CategoryNavBar">
      <Link to="/items" className="CategoryNavBar__link">
        All Items
      </Link>
      {categories.map((category) => {
        return (
          <Link
            key={category.category_name}
            to={`/categories/${category.category_name}/items`}
            className="CategoryNavBar__link"
          >
            {category.category_name}
          </Link>
        );
      })}
    </nav>
  );
};

export default CategoryNavBar;
