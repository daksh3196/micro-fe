import React from "react";
import ReactDOM from "react-dom";
import Cart from "./Cart";

import "./index.css";

const App = () => (
  <div className="container">
    <Cart />
  </div>
);
ReactDOM.render(<App />, document.getElementById("cart-app"));
