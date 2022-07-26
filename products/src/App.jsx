import React from "react";
import ReactDOM from "react-dom";
import Products from './Products';
import "./index.css";


const App = () => {
    var products = [];
  const generateProducts = () => {
    for (let i =0; i< 10;i++){
      const name = faker.commerce.productName();
      products.push(name);
    }
  }
  generateProducts();

  return (
    <div className="container">
      <Products />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("product-list-app"));