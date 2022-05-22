import React from "react";
import Book from "./product_components/Book";
import Mixer from "./product_components/Mixer";
import Watch from "./product_components/Watch";
import Alexa from "./product_components/Alexa";
import Ipad from "./product_components/Ipad";
import Monitor from "./product_components/Monitor";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Mixer />
        <Watch />
      </div>

      <div class="product_row d-flex">
        <Alexa />
        <Ipad />
      </div>

      <div class="product_row d-flex">
        <Monitor />
      </div>
    </div>
  );
}

export default Product;
