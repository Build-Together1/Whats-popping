import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnav from './commponents/Navbar';
import { BrowserRouter as Routes, Route } from "react-router-dom";import Home from './commponents/Pages/Home';
import Community from './commponents/Pages/Community';
import Aboutus from './commponents/Pages/Aboutus';
import Explore from './commponents/Pages/Explore';
import Faq from './commponents/Pages/Faq';
import Product from './commponents/Pages/Product';
import Error from './commponents/Pages/Error';

function App() {
  return (
    <>
    <Topnav />
    <Routes>
      <Route Path="/" element={ <Home /> } />
      <Route Path="/community" element={ <Community /> } />
      <Route Path="/aboutus" element={ <Aboutus /> } />
      <Route Path="/explorer" element={ <Explore /> } />
      <Route Path="/faq" element={ <Faq /> } />
      <Route Path="/product" element={ <Product /> } />
      <Route Path="*" element={ <Error /> } />
    </Routes>
    </>
  );
}

export default App;
