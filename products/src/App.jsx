import React from "react";
import ReactDOM from "react-dom";
import Products from './Products';
import "./index.css";


const App = () => {

  return (
    <div className="container">
      <Products />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("product-list-app"));