import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import MainContent from "./Components/MainContent";
import MainNavBar from "./Components/MainNavBar";
import CreateProfile from "./Components/CreateProfile";
import ViewProfile from "./Components/ViewProfile";
import ViewOrders from "./Components/ViewOrders";
import SellItems from "./Components/SellItems";
import Basket from "./Components/Basket";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>;
      <MainNavBar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/view-profile" element={<ViewProfile />} />
        <Route path="/view-orders" element={<ViewOrders />} />
        <Route path="/sell-items" element={<SellItems />} />
        <Route path="/view-basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
