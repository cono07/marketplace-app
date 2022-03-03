import { Link } from "react-router-dom";

const CategoryNavBar = () => {
  return (
    <nav>
      <Link to="/all-items">All Items</Link>
      <Link to="/electronics">Electronics</Link>
      <Link to="/relics">Relics</Link>
      <Link to="/household">Household</Link>
    </nav>
  );
};

export default CategoryNavBar;
