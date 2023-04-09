import {
  Box,
  Card,
  CardBody,
  Divider,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const CheckoutSummary = () => {
  const { cart_products } = useSelector((store) => store.cartReducer);
  const total = cart_products.reduce(
    (acc, current) => acc + current.quantity * current.price,
    0
  );

  return (
    <>
      <Stack align="flex-start" p={5} spacing={3}>
        <Heading color={"blackAlpha.800"} textAlign={"center"}>
          Order Summary
        </Heading>
        <Divider />

        {cart_products.length > 0 &&
          cart_products.map((e) => {
            return (
              <>
                <HStack
                  w={"450px"}
                  p={"1"}
                  alignItems="center"
                  justifyItems="center"
                >
                  <Image w="75px" src={e.img} alt={e.name} />
                  <Heading
                    w="200px"
                    size="md"
                    color="darkgreen"
                    textAlign={"center"}
                  >
                    {e.name}
                  </Heading>
                  <Text p={3} textAlign={"center"}>
                    Quantity: {e.quantity}
                  </Text>
                  <Heading w="100px" color="purple" size="md">
                    ₹ {e.price}
                  </Heading>
                </HStack>
              </>
            );
          })}

        <Divider />

        <Box m={5}>
          <Heading ml={20} size="lg" textAlign={"center"}>
            Total: ₹ {total}
          </Heading>
        </Box>
        <Text></Text>
      </Stack>
    </>
  );
};

export default CheckoutSummary;
