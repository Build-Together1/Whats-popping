import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topnav from "./commponents/Navbar";
import Home from "./Pages/Home";
import Community from "./Pages/Community";
import AboutUs from "./Pages/AboutUs";
import Explore from "./Pages/Explore";
import Faq from "./Pages/Faq";
import Product from "./Pages/Product";
import Error from "./Pages/Error";

function App() {
  return (
    <Router>
      <Topnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/explore" element={<Explore />} /> {/* corrected path */}
        <Route path="/faq" element={<Faq />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
