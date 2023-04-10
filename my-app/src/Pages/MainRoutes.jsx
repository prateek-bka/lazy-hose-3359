import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import { Cart } from "./Cart";
import Checkout from "./Checkout/Checkout";

import ProductDetails from "./ProductDetails";
import ProductPage from "./ProductPage";
import AdminHomePage from "../Components/Admin/Pages/AdminHomePage";
import AddProduct from "../Components/Admin/Pages/AddProduct";
import ProductList from "../Components/Admin/Pages/ProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout />} />
      <Route path='/admin'  element={<AdminHomePage/>} />
      <Route path="/add-product"  element={< AddProduct/>}  />
      <Route path="/product-list"  element={<ProductList/>}  />
    </Routes>
  );
};

export default MainRoutes;
