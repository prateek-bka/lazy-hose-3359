import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Checkout from "./Checkout/Checkout";
import ProductDetails from "./ProductDetails";
import ProductPage from "./ProductPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default MainRoutes;
