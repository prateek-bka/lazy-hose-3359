import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import { Cart } from "./Cart";
import ProductDetails from "./ProductDetails";
import ProductPage from "./ProductPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  );
};

export default MainRoutes;
