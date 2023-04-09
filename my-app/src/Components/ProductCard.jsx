import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import {
  addcartProduct,
  getcartFailure,
  getcartRequest,
} from "../Redux/CartReducer/action";

import axios from "axios";

const ProductCard = ({ card }) => {
  const { isAuthenticated } = useAuth0();
  const toast = useToast();
  const dispatch = useDispatch();
  const { isLoading, isError, cart_products } = useSelector(
    (store) => store.cartReducer
  );

  console.log(cart_products);

  const handleCart = async (card) => {
    if (isAuthenticated) {
      // dispatch(getcartRequest());
      // await axios
      //   .post(`http://localhost:8080/card-data`, card)
      //   .then((res) => {
      dispatch(addcartProduct(card));
      toast({
        title: "Great Choice",
        description: "Products added Successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      //   })
      // .catch(() => {
      //   dispatch(getcartFailure());
      //   toast({
      //     title: "Already in cart 😍",
      //     description: "Go to cart and make it yours",
      //     status: "info",
      //     duration: 4000,
      //     isClosable: true,
      //   });
      // });
    } else {
      toast({
        title: "Sorry",
        description: "First Login your Self ",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Card>
      <CardBody>
        <Image src={card.img} alt={card.name} />
      </CardBody>
      <Stack>
        <Heading size="md" textAlign={"center"} color={"blue.800"}>
          {card.name}
        </Heading>
        <Heading size={"md"} textAlign={"center"} color={"blackAlpha.800"}>
          ₹ {card.price}
        </Heading>
        <Text>Rating: {card.ratingImage}</Text>
        <Button colorScheme="orange" onClick={() => handleCart(card)}>
          Add to Cart
        </Button>
      </Stack>
    </Card>
  );
};

export default ProductCard;
