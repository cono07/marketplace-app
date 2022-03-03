import { Link } from "react-router-dom";

const MainNavBar = () => {
  return (
    <nav>
      <Link to="/">
        <p>Logo/Home</p>
      </Link>
      <Link to="/create-profile">Create Profile</Link>
      <Link to="/view-profile">View Profile</Link>
      <Link to="/view-orders">View Orders</Link>
      <Link to="/sell-items">Sell Item</Link>
      <Link to="/view-basket">View Basket</Link>
    </nav>
  );
};

export default MainNavBar;
