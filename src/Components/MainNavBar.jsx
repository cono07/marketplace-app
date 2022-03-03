import { Link } from "react-router-dom";
import logo from "../NC_Marketplace_Logo.png";

const MainNavBar = () => {
	return (
		<nav className="MainNavBar">
			<Link to="/">
				<img
					src={logo}
					alt="Marketplace Logo"
					className="MainNavBar__logo"
				></img>
			</Link>
			<Link to="/create-profile" className="MainNavBar__link">
				Create Profile
			</Link>
			<Link to="/view-profile" className="MainNavBar__link">
				View Profile
			</Link>
			<Link to="/view-orders" className="MainNavBar__link">
				View Orders
			</Link>
			<Link to="/sell-items" className="MainNavBar__link">
				Sell Item
			</Link>
			<Link to="/view-basket" className="MainNavBar__link">
				View Basket
			</Link>
		</nav>
	);
};

export default MainNavBar;
