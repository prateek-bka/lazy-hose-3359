import {
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";

const CheckoutSummary = () => {
  return (
    <>
      <Stack w="full" h="full" p={10} spacing={3} align="flex-start">
        <Heading>Order Summary</Heading>
        <Divider />
        {/* Mapping on Hstack */}
        <HStack maxW={"100%"}>
          <VStack maxW={"100%"}>
            <Image src="" width={"45%"} />
          </VStack>
          <VStack maxW={"100%"} align="flex-start">
            <HStack>
              <Text></Text>
            </HStack>
            <HStack>
              <Text></Text>
            </HStack>
          </VStack>
        </HStack>
        <Divider />

        <HStack>
          <Text m={1}></Text>
        </HStack>
        <HStack>
          <VStack align={"flex-end"}>
            <Text>Qty: 1</Text>
          </VStack>
          <VStack align={"flex-end"}>
            <Text>Price Rs. {``}</Text>
          </VStack>
        </HStack>
        <Divider />
        <HStack>
          <Text>Apply Promo Code (if any)</Text>
          <Input></Input>
        </HStack>
        <HStack>
          <Text>Total: </Text>
        </HStack>
        <Text></Text>
      </Stack>
    </>
  );
};

export default CheckoutSummary;
