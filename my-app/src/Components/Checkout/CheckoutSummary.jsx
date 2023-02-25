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

import React, { useEffect, useState } from "react";

const CheckoutSummary = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/card-data`)
      .then((res) => setCartData(res.data))
      .catch((err) => console.log("error fetching cart data"));
  }, []);

  return (
    <>
      <Stack align="flex-start" w={"full"} p={5} spacing={3}>
        <Heading color={"blackAlpha.800"} textAlign={"center"}>
          Order Summary
        </Heading>
        <Divider />

        {cartData.map((e) => {
          return (
            <>
              <Card w={"450px"} p={"1"} alignItems="center">
                <Box
                  display="flex"
                  alignItems="center"
                  letterSpacing="wide"
                  fontSize="xl"
                  m={"5"}
                >
                  <Box>
                    <Image w="75px" src={e.img} alt={e.name} />
                  </Box>
                  <Box>
                    <Heading ml={15} color="purple" size="lg">
                      ₹{e.price}
                    </Heading>
                  </Box>
                </Box>
                <Box>
                  <Heading size="md" color="darkgreen" textAlign={"center"}>
                    {e.name}
                  </Heading>
                </Box>
                <Stack></Stack>
              </Card>
            </>
          );
        })}

        <HStack>
          <Text>Total: </Text>
        </HStack>
        <Text></Text>
      </Stack>
    </>
  );
};

export default CheckoutSummary;
