import { Stack } from "@chakra-ui/react";
import React from "react";
import ProductList from "../Components/ProductList";
import Sidebar from "../Components/Sidebar";

const ProductPage = () => {
  return (
    <>
      <Stack direction={["column", "column", "row"]} margin="3" padding="3">
        <Sidebar />
        <ProductList />
      </Stack>
    </>
  );
};

export default ProductPage;
