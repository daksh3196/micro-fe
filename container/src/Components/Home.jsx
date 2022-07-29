import React from "react";
import ReactDOM from "react-dom";
import Products from 'products/Products';
import ProductPage from '../ProductPage';
import { Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "../index.css";
import "../App.css";


const Home = () => {
  const history = useNavigate();
  const routeProducts = () => {
    return <ProductPage />
  }

  const loginClick = () => {
    history('/login');
  }

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
        <Grid item className="header-item" onClick={routeProducts}>Products</Grid>
        <Grid item className="header-item">Cart</Grid>
        <Grid item className="header-item" >
          <Link to="/login"> Login </Link> 
        </Grid>
      </Grid>
      <Grid
        className="content-main"
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={2}
      >
        <Grid item>
          Welcome to E-Commerce Application
        </Grid>
        <Grid item>
          <Products />
        </Grid>
      </Grid>
    </div>
  )
};

export default Home;
