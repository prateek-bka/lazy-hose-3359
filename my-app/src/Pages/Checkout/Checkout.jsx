import { Stack } from "@chakra-ui/react";
import React from "react";
import CheckoutSummary from "../../Components/Checkout/CheckoutSummary";
import CheckoutYourDetails from "../../Components/Checkout/CheckoutYourDetails";
import OrderSuccessCelebration from "../../Components/Checkout/OrderSuccessCelebration";

const Checkout = () => {
  return (
    <>
      <Stack direction={["column", "column", "row"]} w={"100%"}>
        <CheckoutSummary />
        <CheckoutYourDetails />
      </Stack>
    </>
  );
};

export default Checkout;
