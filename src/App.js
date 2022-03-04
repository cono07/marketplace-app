import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProductsList from "./Components/AllProductsList";
import MainNavBar from "./Components/MainNavBar";
import CreateProfile from "./Components/CreateProfile";
import ViewProfile from "./Components/ViewProfile";
import ViewOrders from "./Components/ViewOrders";
import SellItems from "./Components/SellItems";
import Basket from "./Components/Basket";
import CategoryNavBar from "./Components/CategoryNavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNavBar />
        <CategoryNavBar />
        <Routes>
          <Route path="/" element={<AllProductsList />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/view-profile" element={<ViewProfile />} />
          <Route path="/view-orders" element={<ViewOrders />} />
          <Route path="/sell-items" element={<SellItems />} />
          <Route path="/view-basket" element={<Basket />} />
          <Route path="/items" element={<AllProductsList />} />
          <Route
            path="/categories/:category/items"
            element={<AllProductsList />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
