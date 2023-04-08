import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import { Cart } from "./Cart";
import Checkout from "./Checkout/Checkout";

import ProductDetails from "./ProductDetails";
import ProductPage from "./ProductPage";
import { Error } from "./Error";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Error/>} />

      

    </Routes>
  );
};

export default MainRoutes;
