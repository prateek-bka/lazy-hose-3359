import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getProduct } from "../Redux/ProductReducer/action";
import ProductCard from "./ProductCard";
import styles from "../styles/productlist.module.css";
import { Box, Grid, SimpleGrid, Stack, Spinner } from "@chakra-ui/react";
import Footer from "./Footer";
import { Navbar } from "../HomePage/Navbar";

const ProductList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParam] = useSearchParams();
  const furnitureProduct = useSelector((store) => {
    return store.productReducer.furnitureProduct;
  });
  const loading = useSelector((store) => {
    return store.productReducer.isLoading;
  });
  let obj = {
    params: {
      rating: searchParam.getAll("rating"),
      category: searchParam.getAll("category"),
      _sort: searchParam.get("order") && "price",
      _order: searchParam.get("order"),
    },
  };
  useEffect(() => {
    dispatch(getProduct(obj));
  }, [location.search]);
  return (
    <>
      <SimpleGrid columns={[1, 1, 3]} spacing={3}>
        {loading && (
          <Spinner
            size="xl"
            thickness="7px"
            color="orange.500"
            position="absolute"
            top="50%"
            left="50%"
          />
        )}
        {furnitureProduct.length > 0 &&
          furnitureProduct.map((el) => {
            return <ProductCard key={el.id} card={el} />;
          })}
      </SimpleGrid>
    </>
  );
};

export default ProductList;
