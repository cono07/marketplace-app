import { Link } from "react-router-dom";

const CategoryNavBar = () => {
	return (
		<nav className="CategoryNavBar">
			<Link to="/all-items" className="CategoryNavBar__link">
				All Items
			</Link>
			<Link to="/electronics" className="CategoryNavBar__link">
				Electronics
			</Link>
			<Link to="/relics" className="CategoryNavBar__link">
				Relics
			</Link>
			<Link to="/household" className="CategoryNavBar__link">
				Household
			</Link>
		</nav>
	);
};

export default CategoryNavBar;
