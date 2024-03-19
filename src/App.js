import React from "react";
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from "./commponents/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Community from "./Pages/Community";
import Aboutus from "./Pages/Aboutus";
import Explore from "./Pages/Explore";
import Faq from "./Pages/Faq";
import Product from "./Pages/Product";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <Topnav />
      <Router>
        <Routes>
          <Route Path="/" element={<Home />} />
          <Route Path="/community" element={<Community />} />
          <Route Path="/aboutus" element={<Aboutus />} />
          <Route Path="/explorer" element={<Explore />} />
          <Route Path="/faq" element={<Faq />} />
          <Route Path="/product" element={<Product />} />
          <Route Path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
