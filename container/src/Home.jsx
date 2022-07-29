import React from "react";
import Products from 'products/Products';
import { Grid } from "@mui/material";

import "./index.css";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";


const Home = () => {

  return(
    <div className="container">
      <Header />
      <Grid
        className="content-main"
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={2}
      >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <h3 style={{ textAlign: 'center' }}>Welcome to E-Commerce Application</h3>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
};

export default Home;