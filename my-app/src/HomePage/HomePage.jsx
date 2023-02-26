import {
  Box,
  Heading,
  Image,
  Text,
  Grid,
  GridItem,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  customer_speaks,
  data,
  fry_deals,
  furniture_decor,
  recommend,
  room_data,
  shopCategories,
} from "./HomeData";

import { useAuth0 } from "@auth0/auth0-react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import { color } from "framer-motion";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigationToProductPage = () => {
    navigate("/product");
  };

  const hideCarousel = useBreakpointValue({ base: false, md: true, lg: true });
  return (
    <>
      <Box>
        <br />
        <br />

        {hideCarousel ? (
          <Box width={"90%"} display={"flex"} gap={5} margin={"auto"}>
            <Box flex={2}>
              <Carousel
                showThumbs={false}
                showArrows={false}
                swipeable={true}
                autoPlay
                showStatus={false}
                autoFocus={true}
                infiniteLoop={true}
              >
                {data.map((ele) => {
                  return (
                    <div key={ele.id} onClick={handleNavigationToProductPage}>
                      <Image height={"32rem"} src={ele.src} alt="" />
                    </div>
                  );
                })}
              </Carousel>
            </Box>
            <Box flex={1} width={"20%"}>
              <Image
                width={"350px"}
                height={"32rem"}
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/web_rhs_02022023_1.jpg"
                alt=""
                onClick={handleNavigationToProductPage}
              />
            </Box>
          </Box>
        ) : (
          <Box>
            <Carousel
              showThumbs={false}
              showArrows={false}
              swipeable={true}
              autoPlay
              showStatus={false}
              autoFocus={true}
              infiniteLoop={true}
            >
              {data.map((ele) => {
                return (
                  <div key={ele.id}>
                    <Image height={"32rem"} src={ele.src} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </Box>
        )}

        {/* </> */}
        {/* -------------------------shop_by-------------------------------- */}
        <Box
          className="shop_by"
          width={"90%"}
          margin={"auto"}
          textAlign={"center"}
        >
          <Heading mt={30} marginBottom={30} fontFamily={"sans-serif"}>
            Shop By Room
          </Heading>
          <SimpleGrid columns={[1, 2, 2, 4]} gap={10}>
            {room_data.map((ele) => {
              return (
                <div key={ele.id}>
                  <Image
                    height={"15rem"}
                    src={ele.src}
                    alt=""
                    width={"100%"}
                    onClick={handleNavigationToProductPage}
                  />
                  <p>
                    {ele.title} {"→"}
                  </p>
                </div>
              );
            })}
          </SimpleGrid>
        </Box>
        {/* -----------------fry_deals--------------------- */}
        <Box
          className="fry_deals"
          width={"90%"}
          margin={"auto"}
          textAlign={"center"}
        >
          <Heading
            mt={30}
            marginBottom={30}
            textAlign={"start"}
            fontFamily={"sans-serif"}
          >
            What The Fry Deals
          </Heading>
          <SimpleGrid columns={[1, 2, 4, 4]} gap={10} textAlign={"start"}>
            {fry_deals.map((ele) => {
              return (
                <div key={ele.id}>
                  <Image
                    height={"25rem"}
                    src={ele.src}
                    alt=""
                    width={"100%"}
                    onClick={handleNavigationToProductPage}
                  />
                  <Text fontSize="2xl">{ele.head}</Text>
                  <p>{ele.title}</p>
                </div>
              );
            })}
          </SimpleGrid>
        </Box>
        {/* ----------------------------Inspire and Get-Inspired---------------------------------- */}

        <Box
          className="inspire_get"
          width={"90%"}
          margin={"auto"}
          textAlign={"center"}
        >
          <Heading
            mt={30}
            marginBottom={30}
            textAlign={"start"}
            fontFamily={"sans-serif"}
          >
            Inspire and Get Inspire
          </Heading>
        </Box>

        <Box width={"90%"} margin={"auto"}>
          <Box>
            <Swiper
              effect="coverflow"
              slidesPerView={4}
              spaceBetween={30}
              autoplay={{
                delay: 1000,
              }}
              modules={[Navigation, Autoplay, EffectCoverflow]}
              navigation={true}
              className="mySwiper"
              loop={true}
            >
              {shopCategories.map((ele) => (
                <SwiperSlide key={ele.id}>
                  <Image
                    width={"100%"}
                    src={ele.url}
                    alt=""
                    onClick={handleNavigationToProductPage}
                  />
                  <p>{ele.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
        {/* -------------------Trends In Furniture And Decor-------------------------------------------- */}
        <Box
          className="furniture_decor"
          width={"90%"}
          margin={"auto"}
          textAlign={"center"}
        >
          <Heading
            mt={30}
            marginBottom={30}
            textAlign={"start"}
            fontFamily={"sans-serif"}
          >
            Trends In Furniture And Decor
          </Heading>
          <SimpleGrid columns={[1, 2, 2, 3]} gap={20} textAlign={"start"}>
            {furniture_decor.map((ele) => {
              return (
                <div key={ele.id}>
                  <Image
                    height={"25rem"}
                    src={ele.src}
                    alt=""
                    width={"100%"}
                    onClick={handleNavigationToProductPage}
                  />
                  <Text fontSize="2xl">{ele.head}</Text>
                  <p>Explore Starting at ₹{ele.price}</p>
                </div>
              );
            })}
          </SimpleGrid>
        </Box>
        {/* ----------------------------Customers Speak */}
        <Box
          className="customer_speaks"
          width={"90%"}
          margin={"auto"}
          textAlign={"center"}
        >
          <Heading
            mt={30}
            marginBottom={30}
            textAlign={"start"}
            fontFamily={"sans-serif"}
          >
            Customers Speak
          </Heading>
          <SimpleGrid columns={[1, 2, 2, 3]} gap={10} textAlign={"start"}>
            {customer_speaks.map((ele) => {
              return (
                <div key={ele.id}>
                  <Image height={"15rem"} src={ele.src} alt="" width={"100%"} />
                  <Text fontSize="md">{ele.head}</Text>
                  <br />
                  <Text fontSize="sm">{ele.name}</Text>
                  <p>Explore Starting at ₹{ele.place}</p>
                </div>
              );
            })}
          </SimpleGrid>
        </Box>
        {/* ------------------------------------------Recommended for you */}
        <Box
          className="recommended_you"
          width={"90%"}
          margin={"auto"}
          textAlign={"center"}
        >
          <Heading
            mt={30}
            marginBottom={30}
            textAlign={"start"}
            fontFamily={"sans-serif"}
          >
            Recommended for you
          </Heading>
        </Box>

        <Box width={"90%"} margin={"auto"}>
          <Box>
            <Swiper
              slidesPerView={6}
              spaceBetween={20}
              autoplay={{
                delay: 1000,
              }}
              modules={[Navigation, Autoplay]}
              navigation={true}
              className="mySwiper"
              loop={true}
            >
              {recommend.map((ele) => (
                <SwiperSlide key={ele.id}>
                  <Image
                    height={"12rem"}
                    width={"100%"}
                    src={ele.url}
                    alt=""
                    onClick={handleNavigationToProductPage}
                  />
                  <p>{ele.title}</p>
                  <Text fontSize="sm" color={"orange"}>
                    ₹{ele.price}
                  </Text>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
