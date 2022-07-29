import React from "react";
import ReactDOM from "react-dom";
import Products from 'products/Products';
import Cart from 'cart/Cart';
import { Grid } from "@mui/material";

import "./index.css";
import "./App.css";


const ProductPage = () => {

  return(
    <>
    <Products />
    <Cart />
    </>
  )
};
export default ProductPage;
