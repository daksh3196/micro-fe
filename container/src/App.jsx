import React from "react";
import ReactDOM from "react-dom";
import Products from 'products/Products';
import ProductPage from './ProductPage';
import { Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

import "./index.css";
import "./App.css";


const App = () => {
  const routeProducts = () => {
    console.log("hello")
    return <ProductPage />
  }
  return(
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
        </Routes>
      </Router>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
