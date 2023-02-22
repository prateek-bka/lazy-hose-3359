import { Stack } from "@chakra-ui/react";
import React from "react";
import ProductList from "../Components/ProductList";
import Sidebar from "../Components/Sidebar";

const ProductPage = () => {
  return (
    <>
      <Stack direction={["column", "row", "row"]}>
        <Sidebar />

        <ProductList />
      </Stack>
    </>
  );
};

export default ProductPage;
