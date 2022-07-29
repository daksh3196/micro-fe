import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Footer from './Footer';
import "./index.css";


const Products = ({ sample }) => {
    var products = [];
  const generateProducts = () => {
    for (let i =0; i< 10;i++){
      const name = faker.commerce.productName();
      products.push(name);
    }
  }
  generateProducts();

  return (
    <div className="product-div">
      <h1>Product List</h1>
      <div className="product-list">
    {
      products.map((item)=>{
        return <div key={item}>{item}</div>
      })
    }
    </div>
  </div>
  );
}

export default Products;