import React, { Component } from "react";
import { render } from "react-dom";
import Anatta from "./Anatta";
import Product from "./Product";
import "./style.css";
import ProductDetails from "./ProductDetails";
import Footer from "./Footer";


class App extends Component {
  render() {
    return (
      <div>
        <Anatta />
        <div />
        <div className="mainDiv">
          <ProductDetails />
          <Product />
        </div>
          <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
