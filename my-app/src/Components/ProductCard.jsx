import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector,useDispatch } from 'react-redux'
import { addcartProduct,getcartFailure,getcartRequest } from "../Redux/CartReducer/action";
import axios from "axios";
const ProductCard = ({ card }) => {
  const dispatch=useDispatch()
  const {isLoading,isError,cart_products}=useSelector((store)=>store.cartReducer)
  console.log(isLoading,isError,cart_products)
  const handleCart=async (card)=>{
    dispatch(getcartRequest())
   await axios.post(` http://localhost:8080/card-data`,card).then((res)=>{
      dispatch(addcartProduct(res.data))
    })
    .catch(()=>{
     dispatch(getcartFailure())
    })
  }
  return (
    <Card>
      <CardBody>
        <Image src={card.img} alt={card.name} />
      </CardBody>
      <Stack>
        <Heading size="md">{card.name}</Heading>
        <Text color={"blue.900"}>₹{card.price}</Text>
        <Text>Rating: {card.ratingImage}</Text>
        <Button colorScheme="orange" onClick={()=>handleCart(card)}>Add to Cart</Button>
      </Stack>
    </Card>
  );
};

export default ProductCard;
