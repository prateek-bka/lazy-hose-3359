import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductPage from "./ProductPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default MainRoutes;
