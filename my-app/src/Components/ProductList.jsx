import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getProduct } from "../Redux/ProductReducer/action";
import ProductCard from "./ProductCard";
import styles from "../styles/productlist.module.css";
import { Box, Grid, SimpleGrid, Stack } from "@chakra-ui/react";

const ProductList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParam] = useSearchParams();
  const furnitureProduct = useSelector((store) => {
    return store.productReducer.furnitureProduct;
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
      <SimpleGrid columns={3} spacing={10}>
        {furnitureProduct.length > 0 &&
          furnitureProduct.map((el) => {
            return (
              <Link to={`/product/${el.id}`}>
                <ProductCard key={el.id} card={el} />
              </Link>
            );
          })}
      </SimpleGrid>
    </>
  );
};

export default ProductList;
