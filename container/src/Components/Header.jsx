import React from "react";
import Products from 'products/Products';
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../index.css";
import "../App.css";


const Header = () => {
  let history = useNavigate();
  return(
    <div className="container">
      <Grid
        className="header-container"
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        gap={2}
      >
        <Grid item className="header-item" onClick= { () => history('/') }>Home</Grid>
        <Grid item className="header-item" onClick= { () => history('/products') }>Products</Grid>
        <Grid item className="header-item" onClick= { () => history('/cart') }>Cart</Grid>
        <Grid item className="header-item" onClick= { () => history('/combine') }>Combine Both!</Grid>
      </Grid>
    </div>
  )
};

export default Header;